"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { LoginSchema, RegisterSchema } from '..//..//../schema/index'
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

import { register } from '@/actions/register'
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const [isPending, startTransition]= useTransition();
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:"",
    }
  });
  const onSubmit =(values)=>{
    setError("");
    setSuccess("");
    // console.log(values)
     startTransition(()=>{
      register(values)
      .then((data)=>{
        setError(data.error);
        setSuccess(data.success);
      })
     });
  }
  return (
    <>
   

    
  
   

    <Form  {...form}
    // className="w-full max-w-2xl flex justify-center items-center"
    >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full h-full max-w-8xl   flex flex-col justify-center items-center"
        >
             <div>
      <h1 className='flex justify-center items-center font-semibold text-3xl'>
        Register
      </h1>
     </div>
        <div
        className='space-y-4 '
        >
           <FormField 
          control={form.control}
          name="name"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                {...field}
                disabled={isPending}
                placeholder="John dae"
                type="name"
                className="placeholder:text-zinc-500 w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
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
                placeholder="johndae@gmail.com"
                type="email"
                className="placeholder:text-zinc-500"
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
                className="placeholder:text-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        </div>
        <FormError 
        message={error}
        />
        <FormSuccess 
        message={success}
        />
        <Button
        disabled={isPending}
       type="submit"
       className="" 
        >
          Create an account
        </Button>
        </form>

      </Form>

    </>
  )
}

export default Register