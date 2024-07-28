import React from 'react'
import SecondNav from '../component/SecondNav'
import Navbar from '../component/Navbar'

import { SessionProvider } from 'next-auth/react'
import Shipping from './checkoutPage'

const Checkout = () => {
  return (
    <>
   {/* <Navbar /> */}
  <SessionProvider>
  <SecondNav />
 <Shipping />
  </SessionProvider>
    
    </>
  )
}

export default Checkout