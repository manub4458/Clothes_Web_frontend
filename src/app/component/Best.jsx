
import React from 'react'

const Best = () => {
  return (
 <>
 <div>

      <div className='flex justify-center  sm:flex  sm:flex-wrap w-full h-full'>
       <div className='w-[50vw] sm:w-[100vw]'>
        <img src="/body.webp" alt="Image" 
        className='w-full'
        />
       </div>
       <div className='bg-[#2f887e] text-white w-[50vw] sm:w-[100vw] sm:space-y-10 sm:h-[40vh] space-y-20 flex flex-col justify-center items-center'>
      <div className='flex flex-col space-y-3 justify-center items-center'>
      <h2 className='text-4xl goudy'>
        The Artist Edit
     </h2>
      <hr className='bg-white h-1 w-14'  />
      </div>
 

     <div className='flex flex-col space-y-12 justify-center items-center goudy'>
     <p className='text-xl'>
        bridging the gap between art and fashion
     </p>

     <button
     className='text-white bg-transparent border-2 border-white  hover:bg-white hover:text-black hover:font-semibold p-3 px-10 hel2'
     > 
        EXPLORE NOW
     </button>
     </div>
       </div>
      </div>

 </div>
 
 
 </>
  )
}

export default Best