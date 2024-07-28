"use client"

import { newVerification } from "@/actions/new-verification";
import FormError from "@/app/component/form-error";
import FormSuccess from "@/app/component/form-success";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import { Suspense, useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners"
const NewVerificationForm = () => {

    const [error, setError] =  useState("" || undefined);
    const [success, setSuccess] =  useState("" || undefined);

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit = useCallback(()=>{
      if(success || error) return;
        if(!token){
            setError("Missing token!");
            return;
        }
       newVerification(token)
       .then((data)=>{
        setSuccess(data.success);
        setError(data.error);
       })
       .catch(()=>{
        setError("Something went wrong!");
       })
    },[token, error, success]);

    useEffect(()=>{
        onSubmit();
    },[onSubmit])
  return (
   <Suspense>
   <div className="flex justify-center items-center h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="bg-white max-w-[30vw] max-h-[35vh] rounded-xl w-full h-full flex flex-col space-y-3 justify-center items-center">
      <div>

        🔐 <span className="text-xl font-bold">Auth</span>
      </div>
      
      <div>
          Confirming your Verification
      </div>
      <div>
       {!success && !error && (
         <BeatLoader />
       )

       }
        <FormSuccess 
        message={success}
        />
       {!success && (
         <FormError 
         message={error}
         />
       )

       }
      </div>

      <div>
      <Link href='/auth/login'>
      <p>
            Back to Login
        </p>
      </Link>
      </div>
    </div>

   </div>
   
   </Suspense>
  )
}

export default NewVerificationForm