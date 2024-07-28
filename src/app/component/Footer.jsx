
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className='bg-black text-white hel2 h-[300px] space-y-6  text-xl flex flex-col md:flex-wrap justify-center items-center '>
   
     <div className='flex gap-x-10'>
     <h4>
        About Us
      </h4>
      <h4>
        Shipping Policy
      </h4>
      <h4>
        Return & Exchange Policy
      </h4>
       <h4>
        Privacy Policy
       </h4>
       <h4>
        Terms & Conditions
       </h4>
     </div>

     <div className='flex gap-x-4'>
         <FaInstagram />
         <CiFacebook />
         <FaXTwitter />
     </div>

     <div>
        <p>
        © 2024 salehub | ZORFIN PRIVATE LIMITED
        </p>
     </div>
    </div>

    
    </>
  )
}

export default Footer