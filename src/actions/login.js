"use server"

import { LoginSchema } from '@/schema'
import React from 'react'
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/data/tokens';
import { sendVerificationEmail } from '@/libs/mail';

export const login = async(values) => {
//   console.log(values)
const validatedFields = LoginSchema.safeParse(values);
if (!validatedFields.success)
    {
        return {error: "Incorrect Fields"}
    }
   const {email, password} = validatedFields.data;
   const existingUser = await getUserByEmail(email);

   if(!existingUser || !existingUser.email || !existingUser.password){
    return {error:"Invalid credentials! "}
   }

   if(!existingUser.emailVerified)
    {
        const verificationToken = await generateVerificationToken(existingUser.email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
         )
        return {success:"Confirmation email sent!"}
    }

   try {
      await signIn("credentials",{
        email,
        password,
        redirectTo:DEFAULT_LOGIN_REDIRECT
      })
   } catch (error) {

    if(error instanceof AuthError){
        switch (error.type){
            case "CredentialsSignin":
                return {error: "Invalid credentials!"}
            default: 
                return {error: "Something went wrong!"};
        }
    }
    throw error;
    
   }
}

