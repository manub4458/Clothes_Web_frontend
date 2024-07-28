"use client"
import { useState, useEffect, useCallback } from 'react';


import axios from 'axios';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SecondNav from '../component/SecondNav';
import { priceCalculator } from '@/libs/utils';
import { useCart } from '@/hooks/useCartHook';
import ProductCards from '../component/ProductCards';
export default function ShoppingCart() {
  
  const [cartItems, setCartItems] = useState([]);
  const[count, setCount] = useState(0);
  const router = useRouter();
 
 
  const [loading, setLoading] = useState(false)
  const { items } = useCart();
  const fetchData = useCallback(async () => {
      const products = await Promise.all(items.map(async (id) => {
        // const data = await fetch(`http://localhost:5000/api/v1/product?productId=${id}`);
        const data = await axios.get(`http://localhost:5000/api/v1/product?productId=${id}`);

        console.log(data.data)
        return data.data;


      }))

    setCartItems(products)
    setLoading(true)
    // console.log(products)
  }, [items])
  const isLoggedIn = true;
  useEffect(() => {
   
          
    if (!isLoggedIn) {
        
        router.push('/auth/login');
        alert("login required");
    }
    // else{
    //   router.push('/checkout');
    // }
    fetchData();
  }, [fetchData])
  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => {
       
        return total + priceCalculator(product.price,product.discount.value);
    }, 0);
};


 
    
            if(!loading){
              return <div className='flex justify-center mt-[400px] items-center'>
                Loading...
              </div>
            }

                      
          

  return (
    <>
      <SecondNav  />
      <div className='flex items-baseline  '>

      
      {
         cartItems.length===0?(
          <div>
            Your Cart is Empty
            </div>
            
         ):(
          <div className='max-w-[1100px] w-[1400px] grid justify-center grid-rows-2 sm:grid-rows-3 md:grid-rows-4 lg:grid-rows-5 gap-10 md:gap-6'>
        

            {
              cartItems.map((product)=>(

                <div>
        
        <ProductCards

image={product.image[3]}
product_name={product.brand}
product_description={product.about}
price={priceCalculator(product.price,product.discount.value)}
original_price={product.price}
discount={product.discount.value}
id={product.id}
// size={product.selectedSize}

/>


                  </div>
                  

              ))
 
 }


          </div>
         )
        }
        <div>
        <div className='space-y-8 fixed'>

<div>
    <p className='font-bold text-lg tracking-wider'>
        Order Summary
    </p>
</div>
     <hr />
<div>
    <p className='font-semibold'>
        Price Details({
            cartItems.length
        }<span> items</span>)
    </p>
</div>
<div className='flex justify-between  font-medium w-[400px]   '>
    <div>
        Total Price
    </div>
    <div>
        {
          getTotalPrice()
        }.00
    </div>
</div>
<div className='flex justify-between font-medium   w-[400px] '>
    <div>
        Shipping charges
    </div>
    <div>
        0.00
    </div>
</div>

<div className='flex justify-between font-semibold   w-[400px] '>
    <div>Total Amount</div>
    <div> 
    {
          getTotalPrice()
        }.00
    </div>
</div>
<hr />

<div>
  <Link href={isLoggedIn?'/checkout'  :'/auth/login' }>

  <button className='bg-[#333333] text-white py-3 w-[420px] rounded-md hover:bg-[#212121]'>
        Checkout
    </button>
  </Link>
</div>
</div>
        </div>
        </div>
        
{/* 
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
        




      </div> */}
    </>
  );
}
