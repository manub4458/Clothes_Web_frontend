import React from 'react';
import { auth } from '@/auth'; // Ensure the correct path to your auth module
import SignOutForm from '../../component/SignoutForm';

const SettingsPage = async () => {
  let session;

  try {
    session = await auth();
  } catch (error) {
    console.error('Error fetching session:', error);
    session = null;
  }

  return (
    <div className='gap-x-10'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOutForm />
    </div>
  );
};

export default SettingsPage;
