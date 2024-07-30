"use client"
import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import SignOutForm from '@/app/component/SignoutForm';

const SettingsPage = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        setSession(session);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, []);

  return (
    <div className='gap-x-10'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOutForm />
    </div>
  );
};

export default SettingsPage;
