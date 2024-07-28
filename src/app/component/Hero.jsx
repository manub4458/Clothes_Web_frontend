"use client"
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'

const Hero = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
    <>
    <div className="h-screen flex justify-between px-32 leading-9 goudy  items-center">
             <div className=" space-y-1 "
               data-aos="fade-right"
               data-aos-duration="2000"
             >
             <h2 className='text-3xl font-bold    '>
   NEW COLLECTION
  </h2>
  <h2 className="text-5xl font-medium">
    FIND YOUR
  </h2>
  <h2 className="text-6xl font-extrabold">
    PERFECT
  </h2>
             </div>

             <div className=" space-y-1"
               data-aos="fade-left"
               data-aos-duration="2000"
             >
             <h2 className='text-3xl font-bold    '>
   FASHION TRENDS
  </h2>
  <h2 className="text-5xl font-medium">
    THE HOTLIST OF
  </h2>
  <h2 className="text-6xl font-extrabold">
    SUMMER
  </h2>
             </div>

    </div>
    
    
    
    </>
  )
}

export default Hero