import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config"
import { db } from "@/libs/db";
import { getUserById } from "./data/user";
 
export const { auth, handlers, signIn, signOut } = NextAuth({
 
  events:{
     async linkAccount({ user}){
      await db.user.update({
        where:{
          id:user.id
        },
        data:{emailVerified:new Date()}
      })
     }
  },
  callbacks:{
    // async signIn ({ user, account }){
    //   if(account?.provider !=="credentials") return true;
    //     const existingUser = await getUserById(user.id);
    //     if(!existingUser?.emailVerified ){
    //      return false;
    //     }
    // },
    async session({ token, session }){
      
     if(token.sub && session.user){
      session.user.id = token.sub;

     }
        return session;
    },
  async jwt({ token }) {
   
      return token;
    
  }
  },
  // providers: [GitHub, Google],
  adapter:PrismaAdapter(db),
  session:{ strategy:"jwt" },
  ...authConfig,
})