import { signOut } from '@/auth';
import React from 'react';

const SignOutForm = () => {
  return (
    <form action={async()=>{
        "use server"
        await signOut();
    }}>
     <button type="submit">
     Sign out
     </button>
    </form>
  );
};

export default SignOutForm;
