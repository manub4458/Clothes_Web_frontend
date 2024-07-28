"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AllProduct from './AllProduct'
import Hero from './Hero'
import Aos from "aos";
import "aos/dist/aos.css";
import { getProductById } from '@/server/product'
import { useSession, signIn, signOut } from 'next-auth/react';


const Navbar = () => {
    useEffect(() => {
		Aos.init();
	}, []);
    const product = getProductById('/http://localhost:5000/api/v1/product')
    console.log(product)

    const [cart, setCart] = useState();

    const addToCart = (product)=>{
        setCart(product)
    }
    const { data: session } = useSession()
    return (
        <>
            <div className='text-black bg-[url("/hero6.webp")]  bg-cover head bg-opacity-20 bg-no-repeat h-[100vh]'>


                <div className='flex justify-evenly py-5 items-center '
              
                >



                    <div className='flex gap-x-8 hel2 text-lg font-semibold  '
                      data-aos="fade-left"
                      data-aos-duration="2000"
                    >

                        <Link href='/'>
                            <li>
                                Home
                            </li>
                        </Link>

                       
                        <li>
                            About us
                        </li>
                       <div>
                        <AllProduct 
                        
                     
                        />
                       </div>
                        <li>
                            Contact Us
                        </li>

                    </div>
                    <div>
                        <img

                            src='/logo5.png'
                            alt='Logo'
                            width={145}
                            height={40}

                        />
                    </div>
                    

                    <div className='flex gap-x-10  '>

                        <img
                            src='/heart.png'
                            alt='Wishlist'
                            width="30"
                            height="30"

                        />

                        <img
                            src='/search3.png'
                            alt='Wishlist'
                            width="30"
                            height="30"

                        />

                       
                      <Link href='/cart'>
                      
                      <img
                            src='/cart3.png'
                            alt='Wishlist'
                            width="30"
                            height="30"
/>
                       
                      </Link>
                      <div className="relative ">
                          
                          <div className='    '>
                               {!session && ( // Show login link if not logged in
                                   <Link href='/auth/login'>
                                       <p className='text-black'>Login</p>
                                   </Link>
                               )}
                               {session && ( // Show logout button if logged in
                                   <>
                                      <div  className='flex gap-x-6'>
                                      <p className='text-black'>{session.user.name}</p>
                                      <button onClick={() => signOut()}>Logout</button>
                                      </div>
                                   </>
                               )}
                           </div>
                       </div>

                    </div>



                </div>
                  <Hero />
            </div>

        </>
    )
}

export default Navbar