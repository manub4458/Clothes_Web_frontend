"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'


const AllProduct = () => {
    const router = useRouter()
  return (
  <>
 
    <div className='flex hover:cursor-pointer '
            //  onClick={()=>router.push(`/allproducts/${id}`)}
             
            >
             Shop
            </div>
           
  </>
  )
}

export default AllProduct