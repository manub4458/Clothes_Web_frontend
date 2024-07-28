"use client"
import React from 'react'
import Link from 'next/link'
import AllProduct from './AllProduct'
import { useSession, signIn, signOut } from 'next-auth/react';
const SecondNav = () => {
    // const { data: session } = useSession()
  return (
   <>
   <div>
   <div className='flex justify-around py-4   items-center '
              
              >

                 

                  <div className='flex gap-x-8 poppins  '
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
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
                          
                          {/* <div className='    '>
                               {!session && ( 
                                   <Link href='/auth/login'>
                                       <p className='text-black'>Login</p>
                                   </Link>
                               )}
                               {session && ( 
                                   <>
                                      <div  className='flex gap-x-6'>
                                      <p className='text-black'>{session.user.name}</p>
                                      <button onClick={() => signOut()}>Logout</button>
                                      </div>
                                   </>
                               )}
                           </div> */}
                       </div>
                    </div>




   </div>
   </div>
   </>
  )
}

export default SecondNav