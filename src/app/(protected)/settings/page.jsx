import React from 'react';
import { auth } from '@/auth'; // Ensure the correct path to your auth module
import SignOutForm from '@/app/component/SignoutForm';


const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className='gap-x-10'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    <SignOutForm />
    </div>
  );
};

export default SettingsPage;
