"use client"
import { useRouter } from "next/navigation"


const ProductCards = ({ image, product_name, product_description, price, original_price, discount,id,size}) => {
    const router = useRouter()
    return (
        <>

            <div className='flex justify-between px-6 items-center w-[800px] bg-[#ffffff]  border-[2px] rounded-md py-6   gap-x-8   '
                 onClick={()=>router.push(`/products/${id}`)}
            >


                <div class=" rounded-lg space-y-6">


                    <img
                        src={image}
                        alt='Product'
                        width={100}
                        height={100}
                        className='w-[110px]  rounded-lg'
                    />
                    </div>
                    <div className=' space-y-6 '>
                        <p className='text-[14px] tracking-wider text-center font-semibold lora'>
                            {product_name}
                        </p>
                        {/* <p className='text-sm text-center'>
                            {product_description}
                        </p> */}
                        <p className='text-sm text-center tracking-wider '>
                            Rs.{price} 
                           
                              
                        </p>
                        <p>
                            {size}
                        </p>
                        {/* <p className='text-sm text-center ' >
                        <s>Rs.{original_price}</s>
                        </p> */}
                        {/* <p className='text-sm text-center  text-red-500'>
                        {(discount)}%off
                        </p> */}
                    </div>
                





            </div>

        </>
    )
}

export default ProductCards