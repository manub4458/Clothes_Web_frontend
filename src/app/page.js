// _app.js (or _app.tsx for TypeScript)
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider from next-auth/react

import Landing from './component/Landing';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider >
      {/* Pass session prop to SessionProvider */}
     <Landing />
    </SessionProvider>
  );
}

export default MyApp;
