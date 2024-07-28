"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import qs from "query-string"

const ProductImages = ({ images, params }) => {
   
    
  
    const [primaryImage, setPrimaryImage] = useState(images[0])
    const [cartData, setCartData] = useState();

const addToCart =(product)=>{
    setCartData(product)
}
    return (
        <>


            <div
                className=' flex justify-center items-center gap-x-10'
            >
                <div
                    className='flex flex-col shrink-0 gap-4 '
                >
                    {
                        images.map((image) => (
                            <div
                                className='w-16 h-20  aspect-square relative'
                                onClick={() => {
                                    if (primaryImage !== image)
                                        setPrimaryImage(image)
                                }}
                            >
                                <Image
                                    src={image}
                                    alt='images'

                                    fill
                                    className='rounded-md'
                                />
                            </div>
                        ))
                    }
                </div>
                <div
                    className='h-[600px] flex justify-center items-center aspect-[3/4] relative card4  '
                >
                    <Image
                        src={primaryImage}
                        alt='images'

                        fill
                        className='rounded-md'
                    />

                </div>

                <div>
                   
                </div>
            </div>
        </>
    )
}

export default ProductImages