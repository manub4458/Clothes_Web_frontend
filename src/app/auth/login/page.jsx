"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { useSearchParams } from 'next/navigation'
import { FaGithub } from 'react-icons/fa'
import { LoginSchema } from '..//..//../schema/index'
import * as z from 'zod'
import { transformToNestObject } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import cardWrapper from '../card-wrapper'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SecondNav from '@/app/component/SecondNav'
import FormError from '@/app/component/form-error'
import FormSuccess from '@/app/component/form-success'
import { login } from '@/actions/login'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import Socials from '../socials'
import Top from './Top'


const Login = () => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") ==="OAuthAccountNotLinked" ? "Email already in use with different provider!":"";
  // const onClick = (provider) =>{
  //   signIn(provider,{
  //     callbackUrl : DEFAULT_LOGIN_REDIRECT,

  //   });
  // }
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");




  const [isPending, startTransition]= useTransition();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });
  
  const onSubmit =(values)=>{
    setError("");
    setSuccess("");
    // console.log(values)
     startTransition(()=>{
      login(values)
      .then((data)=>{
        setError(data?.error);
        setSuccess(data?.success);
      })
     });
  }

      

  return (
    <>
   

    

   <div className="flex justify-center items-center h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

    <Form  {...form}
    // className="w-full max-w-2xl flex justify-center items-center"
    >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          // className="space-y-6 w-full h-full  flex flex-col justify-center items-center"
          className="bg-white  rounded-xl  w-min h-min px-14 py-8 flex flex-col space-y-6 justify-center items-center"
        >
        <div
        className='space-y-2 w-[18vw]'
        >
          <Top />
          <FormField 
          control={form.control}
          name="email"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                {...field}
                disabled={isPending}
                placeholder="jphndae@gmail.com"
                type="email"
                className=" rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

            <FormField 
          control={form.control}
          name="password"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                {...field}
                disabled={isPending}
                placeholder="******"
                type="password"
                className="rounded-xl"
                />
              </FormControl>
              <Button
              size="sm"
              variant="link"
              asChild
              className="px-0 font-normal "
              >

          <Link href='/auth/reset'>
          Forgot password?
          </Link>
              </Button>
              <FormMessage />
            </FormItem>
          )}
          />
        </div>
        <FormError 
        message={error || urlError}
        />
        <FormSuccess 
        message={success}
        />
        <Button
        disabled={isPending}
       type="submit"
       className="bg-blue-950  text-white rounded-xl   w-full hover:text-black" 
        >
          Login
        </Button>
        <div  className='flex justify-between w-full '>
         {/* <button
         onClick={()=> onClick("google")}
         >
          <FaGithub
          className='h-5 w-5'
          />
         </button>
         <button
         onClick={()=> onClick("github")}
         >
         <FcGoogle 
            className='h-5 w-5'
         />
         </button> */}

         <Socials />
        </div>
        <div>
          <p>
            Don't have an account?
          <Link href='/auth/register'>
          <span className='hover:underline'>
            Register
           </span>
          </Link>

          </p>
        </div>
        </form>
         
      </Form>
</div>
    </>
  )
}

export default Login