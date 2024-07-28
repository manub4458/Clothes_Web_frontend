"use client"
import { useCart } from '@/hooks/useCartHook';
import React, { useState } from 'react'



const Cart = ({ id }) => {
  const { addItem, removeItem, items } = useCart();
  const toggleCart = () => {
    const existingItem = items.find((item) => item === id)
    if (existingItem) {
      removeItem(id)
    }
    else {
      addItem(id)
    }
  }
  const handleClick= ()=>{
    return <div>
      Added to cart
    </div>
  }
  return (
    <>


      <div

      >
        <button
          onClick={toggleCart}

        >
          {
             items.find((item) => item === id)?'Remove from Cart':'Add to Cart'
          }
        </button>
      </div>


    </>
  )
}

export default Cart