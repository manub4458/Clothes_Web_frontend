"use server"

import { LoginSchema, RegisterSchema } from '@/schema'
import React from 'react'
import bcrypt from "bcrypt"
import { db } from '@/libs/db'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/data/tokens'
import { sendVerificationEmail } from '@/libs/mail'

export const register = async(values) => {
//   console.log(values)
const validatedFields = RegisterSchema.safeParse(values);
if (!validatedFields)
    {
        return {error: "Incorrect Fields"}
    }

    const {email, password, name} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

     if(existingUser){
        return {error: "Email already exists!"}
     }

     await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword,
        }
     });
     const verificationToken = await generateVerificationToken(email);
     await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
     )
return {success: "Confirmation email sent successfully!"}
//  3:58:08
}

