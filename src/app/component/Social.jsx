import React from 'react'

const Social = () => {
  return (
   <>
   <div className='my-10'>
    <div className='flex flex-col space-y-3 justify-center items-center'>
        <h1 className='text-4xl goudy font-medium'>
            We are Social on @salehub
        </h1>
        <hr className='bg-black h-1 w-12'  />
    </div>

    <div className='flex justify-center mt-16  '>
        <div className='flex flex-col'>
            <div className='flex'>
                  <img src="/product3.avif" alt="" className='w-[300px]  h-[380px]'/>
                  <img src="/product16.avif" alt="" className='w-[300px]  h-[380px]'/>
            </div>
            <div className='flex' >
                  <img src="/product13.avif" alt="" className='w-[300px] h-[380px]' />
                  <img src="/product23.avif" alt="" className='w-[300px] h-[380px]' />
            </div>
        </div>
        <div>
            <img src="/social.jpg" alt="" className='w-[500px] h-[760px]' />
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Social