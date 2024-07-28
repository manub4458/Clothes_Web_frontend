 "use server"
 import { db } from "@/libs/db";
 import { getUserByEmail } from "@/data/user";
 import { getVerificationTokenByToken } from "@/data/verification-token";

 export const newVerification = async(token)=>{
    const existingToken = await getVerificationTokenByToken(token);

    if(!existingToken){
        return {error:"Token doesn't exist!"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired)
        {
            return {error:"Token has expired!"};
        }

        const existingUser = await getUserByEmail(existingToken.email);
        if(!existingUser){
            return {error: "User doesn't exist!"}
        }

        await db.user.update({
            where:{id: existingUser.id},
            data: {
                emailVerified : new Date(),
                email:existingToken.email
            }
        });
        await db.verificationToken.delete({
            where:{id: existingToken.id}
        });
        return {success: "Email Verified"};
 }