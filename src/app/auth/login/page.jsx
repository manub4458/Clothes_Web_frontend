import React, { Suspense } from 'react'
import Login from './login'

const page = () => {
  return (
   <Suspense>
   
   <Login />
   </Suspense>
  )
}

export default page