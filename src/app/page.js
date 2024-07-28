// _app.js (or _app.tsx for TypeScript)

import { SessionProvider } from 'next-auth/react'; // Import SessionProvider from next-auth/react

import Landing from './component/Landing';
import { Suspense } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider >
  

    <Landing />
 
    </SessionProvider>
    
  );
}

export default MyApp;
