
import React from 'react'
import Cart from './cart'
import Footer from '../component/Footer'
import { SessionProvider } from 'next-auth/react'


const page = () => {
    
  return (
   <>
   
<SessionProvider>
<div>
    <Cart />
    {/* <Footer /> */}
   </div>
</SessionProvider>
   </>
  )
}

export default page