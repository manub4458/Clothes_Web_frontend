import React, { Suspense } from 'react'
import NewVerificationForm from './new-verification-form'

const NewVerificationPage = () => {
  return (
   <Suspense>
   <NewVerificationForm />
   </Suspense>
  )
}

export default NewVerificationPage