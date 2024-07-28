"use server"

import { generatePasswordResetToken } from '@/data/tokens';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/libs/mail';
import { ResetSchema } from '@/schema';
import * as z from 'zod';

export const reset = async(values)=>{
const validatedFields = ResetSchema.safeParse(values);

if(!validatedFields.success)
    {
        {error: "Invalid email!"};
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if(!existingUser) {
       return {error: "Email not found!"};
    }

     const passwordResetToken = await generatePasswordResetToken(email);
     await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
     )
    return {success:"Reset email sent!"};

}