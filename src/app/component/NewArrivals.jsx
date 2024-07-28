"use client"
import React, { useEffect } from 'react'
import Product_card from './ProductCard'
import { getProductById } from '@/server/product'
import qs from "query-string"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



const NewArrivals = () => {



  useEffect(() => {
    // Only run on the client-side
    if (typeof window !== 'undefined') {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Set up scroll animations
      gsap.utils.toArray('.animate').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: -50 }, // Initial state: move from left (-50px)
          {
            opacity: 1,
            x: 0, // Final state: move to center (0px)
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
      <div className=''>

        <div>
          <h2 className='text-center text-4xl goudy '>
            NEW ARRIVALS
          </h2>
        </div>
        <div className='flex flex-wrap justify-around my-10 md:mx-6'

        >
          <Product_card

            defaultImage="/product3.avif"
            hoverImage="/product32.avif"



            product_description="Oversized Pure Cotton Tshirt"
            price="599"
            original_price="999"
            discount="45"
            id="66125f82960f1c26298619e6"

          />
          <Product_card

            defaultImage="/product19.avif"
            hoverImage="/product192.avif"

            product_description="Oversized Corduroy Casual Shirt"
            price="1259"
            original_price="1799"
            discount="30"
            id="66126f50960f1c26298619ec"

          />
          <Product_card

            defaultImage="/product14.avif"
            hoverImage="/product142.avif"

            product_description="Men White Pure Cotton Printed Polo Collar T-shirt"
            price="629"
            original_price="899"
            discount="30"
            id="661263fa960f1c26298619e7"

          />
        </div>

      </div>


    </>
  )
}

export default NewArrivals