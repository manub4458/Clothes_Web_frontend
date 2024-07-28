"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";
import styles from './product.module.css'


const Product_card = ({ image, product_name,defaultImage, hoverImage, product_description, price, original_price, discount,id}) => {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>

            <div className='flex '
                 onClick={()=>router.push(`/products/${id}`)}
            >


                <div 
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                   className={`${styles.product} ${isHovered ? styles.hovered : ''}`}

                >

             
                    <img
                        src={isHovered ? hoverImage : defaultImage}
                        alt='Product'
                        width={120}
                        height={200}
                        className='w-[426px] h-[584px]  rounded-lg'
                    />
                    <div className='my-2 space-y-3'>
                        <p className='text-[16px] hel2 text-center font-semibold lora'>
                            {product_name}
                        </p>
                        <p className='text-sm text-center hel2 text-wrap w-auto'>
                            {product_description}
                        </p>
                        <p className='text-sm hel2 text-center space-x-2'>
                            Rs.{price} <span> <s>Rs.{original_price}</s></span>  <span className='text-red-500'>{(discount)}%off</span>
                        </p>
                    </div>
                </div>





            </div>

        </>
    )
}

export default Product_card