"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaGithub } from 'react-icons/fa'
// import { LoginSchema } from '..//..//../schema/index'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import axios from 'axios'
// import cardWrapper from '../card-wrapper'
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

import { LoginSchema } from '@/schema'
import { useCart } from '@/hooks/useCartHook'
import { priceCalculator } from '@/libs/utils'
import { loadStripe } from '@stripe/stripe-js'
import ProductCards from '../component/ProductCards'

const Shipping = () => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider!" : "";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const router = useRouter();
 
  const [loading, setLoading] = useState(false)
  const { items } = useCart();
  console.log(items)
  const fetchData = useCallback(async () => {
    const products = await Promise.all(items.map(async (id) => {
      const data = await axios.get(`http://localhost:5000/api/v1/product?productId=${id}`);
      return data.data;
    }));
    setCartItems(products)
    setLoading(true)
  }, [items])

  const isLoggedIn = true;
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/auth/login');
      alert("login required");
    }
    fetchData();
  }, [fetchData])

  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      return total + priceCalculator(product.price, product.discount.value);
    }, 0);
  };

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        })
    });
  }

  // Payment integration
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PZbBiAFxdHYHbOhEUL55byFeMxqI46YsTFuwyFuNZltUqFsuOwcs81Rr01nN3wwn8qIYa1qCTIqf8ZUaeNYgTUD00SHSjbFaK");

    const body = {
      products: items
    }

    const headers = {
      "Content-Type": "application/json"
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();
      console.log("Stripe session:", session);

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  }

  return (
    <>
      <div className='flex justify-evenly w-full h-[90vh] items-center'>
        <div className="flex flex-col justify-center border-2 items-center h-max p-14 space-y-10">
          <h2 className='text-2xl font-semibold'>
            Shipping Information
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='space-y-4 w-[20vw]'>
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="john doe" type="text" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="johndoe@gmail.com" type="email" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact No.</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="0000000000" type="tel" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <div>
                  <h4 className='text-xl font-semibold'>
                    Address Details
                  </h4>
                </div>
                <div className='space-y-4'>
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} disabled={isPending} placeholder="Address(house No., flat No.)" type="text" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} disabled={isPending} placeholder="City" type="text" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="country" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} disabled={isPending} placeholder="Country" type="text" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="pincode" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} disabled={isPending} placeholder="Pincode" type="text" className="rounded-xl placeholder:text-zinc-400 outline-none border-neutral-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>
              <FormError message={error || urlError} />
              <FormSuccess message={success} />
            </form>
          </Form>
        </div>

        <div className='flex flex-col'>
          <div className='space-y-8'>
            <div>
              <p className='font-bold text-lg tracking-wider'>
                Order Summary
              </p>
            </div>
            <hr />
            <div>
              <p className='font-semibold'>
                Price Details ({cartItems.length} <span>items</span>)
              </p>
            </div>
            <div className='flex justify-between font-medium'>
              <div>Total Price</div>
              <div>{getTotalPrice()}.00</div>
            </div>
            <div className='flex justify-between font-medium'>
              <div>Shipping charges</div>
              <div>0.00</div>
            </div>
            <div className='flex justify-between font-semibold'>
              <div>Total Amount</div>
              <div>{getTotalPrice()}.00</div>
            </div>
            <hr />
            <div>
              <button className='bg-[#333333] text-white py-3 w-[420px] rounded-md hover:bg-[#212121]' onClick={makePayment}>
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shipping
