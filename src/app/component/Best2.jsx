
import React from 'react'

const Best2 = () => {
  return (
   <>
   
   <div>

<div className='flex md:flex-wrap-reverse  justify-center w-full h-full'>

 <div className='bg-[#ade2f6] w-[50vw] sm:w-[100vw] sm:space-y-10 sm:h-[40vh] space-y-20 flex flex-col justify-center items-center'>
   
   <div className='flex flex-col space-y-3 justify-center items-center'>
   <h2 className='text-4xl goudy'>
        Bold Pairings
     </h2>
      <hr className='bg-black h-1 w-14'  />
   </div>
 

    <div className='flex flex-col space-y-12 justify-center items-center'>
    <p className='text-xl goudy'>
        Find Your Perfect Match
     </p>

     <button
     className='text-white hel2 bg-[#212121]  hover:bg-transparent hover:text-black hover:border-2 hover:border-black p-2 px-10 rounded-md'
     > 
        SHOP NOW
     </button>
    </div>
 </div>

 <div className='w-[50vw] sm:w-[100vw]'>
  <img src="/body2.webp" alt="Image" 
  className='w-full'
  />
 </div>
</div>

</div>
   </>
  )
}

export default Best2