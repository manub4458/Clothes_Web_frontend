import React, { Suspense } from 'react'
import SecondNav from '../component/SecondNav'
import Navbar from '../component/Navbar'

import { SessionProvider } from 'next-auth/react'
import Shipping from './checkoutPage'

const Checkout = () => {
  return (
    <Suspense>
  
  <SessionProvider>
  <SecondNav />
 <Shipping />
  </SessionProvider>
    
    </Suspense>
  )
}

export default Checkout