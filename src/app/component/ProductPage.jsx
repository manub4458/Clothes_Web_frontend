"use client"
import React, { useState } from 'react'

const ProductPage = ({brand,about,original_price,discount_price,taxes,product_info,sizes,discount}) => {
   
  return (
    <>

    <div className=' '>

        <div className='flex  justify-start '>
    

            {/* <div className='' >
                <div className='flex justify-center items-center card3'>
                    <img src={images[selectedImage]} alt={`Product ${productId}`}
                        width={400}
                        className='space-y-6 w-[550px] h-[700px] rounded-md justify-center items-center'
                    />
                </div>
            </div> */}

            <div className=' space-y-3'>
                <h2 className='font-bold text-xl'>
            {brand}
                </h2>
                <p className='font-medium'>
                {about}
                </p>
                <p>
                    RS.{discount_price} <span className='ml-2'>  <s>RS.{original_price}</s></span> <span className='text-red-600 font-semibold'>{discount}%</span>
                </p>
                <p className='text-[#03A685] font-semibold'>
                 {taxes}
                </p>

                {/* <p className='font-semibold'>
                    SELECT SIZE
                </p> */}
                {/* <div className='flex gap-x-4 '>
                 
                <Size sizes={product.size} />
                </div> */}

                {/* <div className='flex gap-x-6 '>

                    <button className='flex justify-center items-center gap-x-6 px-4 py-3 rounded-lg bg-[#212121] text-white'> 
                     <img 
                     src='/bag.png'
                     alt='Bag'
                     width={20}
                     height={40}
                     
                     />

                     <p className=''>
                       <Cart />
                     </p>
                    </button>

                    <button className='flex justify-center items-center gap-x-6 px-4 py-3 bg-[#ffffff] hover:bg-yellow-100/20 rounded-lg  '> 
                     <img 
                     src='/heart2.png'
                     alt='Bag'
                     width={20}
                     height={40}
                     
                     />

                     <p className=''>
                      WISHLIST
                     </p>
                    </button>
                </div>

                <div className='leading-6'>
                    <h2 className='font-bold'>
                        PRODUCT DETAILS
                    </h2>

                    <p className='pt-2 w-[360px]'>
                   {product_info}
                    </p>
                   
                </div> */}

              

            
                       

            </div>

        </div>

    </div>
</>
  )
}

export default ProductPage