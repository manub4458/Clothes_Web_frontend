"use client"
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hero from './Hero'
import Second from './Second'
import NewArrivals from './NewArrivals'
import Best from './Best'
import Best2 from './Best2'
import Category from './Category'
import Social from './Social'
import Footer from './Footer'
import Effect from './effect'
import Mobnav from './Mobnav';

const Landing = () => {

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
   
      gsap.registerPlugin(ScrollTrigger);

    
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 }, 
          {
            y: 0, 
            opacity: 1, // Fully visible
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%', // Adjust as needed
              end: 'bottom 30%', // Adjust as needed
              scrub: true,
            },
          }
        );
      });
    }
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className="select-none landing_conatiner h-screen ">
				<div
					className="absolute w-screen top-0 md:hidden z-[99]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<Navbar />
				</div>
				<div className="absolute hidden w-screen  md:inline-block">
					<Mobnav />
				</div>
				{/* <div className="absolute top-20 z-[1] w-screen">
					<Hero />
				</div> */}
			</div>
      <div >
        <Second />
      </div>
      <div >
        <NewArrivals />
      </div>
      <div >
        <Best />
      </div>

      <Best2 />


      <div >
        <Social />
      </div>

      <Footer />
    </>
  )
}

export default Landing