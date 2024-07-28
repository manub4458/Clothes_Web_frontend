"use server"

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/libs/db";
import { NewPasswordSchema } from "@/schema";
import bcrypt from "bcryptjs"


export const newPassword =async(values,token)=>{
    if(!token){
        return { error : "Missing Token!"}
    }
     const validatedFields = NewPasswordSchema.safeParse(values);
     if(!validatedFields.success){
        return {error: "Invalid Fields!"};
     }

     const { password } = validatedFields.data;
     const exisingToken =  await getPasswordResetTokenByToken(token);
     if(!exisingToken)
        {
            return {error: "Invalid Token!"}; 
        }
        const hasExpired = new Date(exisingToken.expires) < new Date();

        if(hasExpired){
            return {error: "token has Expired!"};
        }

        const existingUser = await getUserByEmail(exisingToken.email);

        if(!existingUser){
            return {error: "User not found!"}
        }

        const hashedPassword = await bcrypt.hash(password,10);
        await db.user.update({
            where:{id:existingUser.id},
            data:{password:hashedPassword},
        });

        await db.passwordResetToken.delete({
            where:{id:exisingToken.id},
        });

        return {success:"Password Updated Succesfully!"};
}
