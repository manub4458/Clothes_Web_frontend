'use server';

import { signOut } from '@/auth'; // Ensure the correct path to your auth module

export const handleSignOut = async () => {
  await signOut();
};
