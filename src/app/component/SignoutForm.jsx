import React from 'react';
import { handleSignOut } from '@/actions/signout';

const SignOutForm = () => {
  const onSignOut = async () => {
    await handleSignOut();
    window.location.href = '/auth/login'; // Redirect to the login page after sign-out
  };

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      await onSignOut();
    }}>
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default SignOutForm;
