import React from 'react'

const Category = () => {
  return (
   <>
   <div className='my-10'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-medium'>
            Shop By Category
        </h1>
      </div>

      <div className='flex justify-around '>
        <div className='img w-[426px] h-[584px] flex flex-col justify-center items-center   bg-cover   bg-no-repeat'>
             <h2 className=''>
              T-SHIRTS
             </h2>

             <button className=' text-black p-3'>
              SHOP THE COLLECTION
             </button>
        </div>
        <div className='img  bg-cover w-[426px] h-[584px]   bg-no-repeat'>
             <h2 className='flex justify-center items-center'>
              T-SHIRTS
             </h2>

             <button className=' text-black p-3'>
              SHOP THE COLLECTION
             </button>
        </div>
        <div className=' img flex flex-col justify-center items-center  bg-cover w-[426px] h-[584px]   bg-no-repeat'>
             <h2 className=' '>
              T-SHIRTS
             </h2>

             <button className='  bg-white border-2 border-black text-black '>
              SHOP THE COLLECTION
             </button>
        </div>
      </div>



   </div>
   
   
   </>
  )
}

export default Category