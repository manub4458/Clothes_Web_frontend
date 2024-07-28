
import React from 'react'

const Second = () => {
  return (
    <>
    
    <div className='flex flex-wrap gap-8 justify-around h-max my-10'>
         <div className='flex flex-col hel2 justify-center items-center space-y-2 '>
            <img src="/return.png" alt="return" width={50} height={50} />
         <h4>
            30 DAYS RETURN
         </h4>
         <p>
         Simply return it within 30 days for an exchange.
         </p>
         </div>
         <div className='flex flex-col hel2 justify-center items-center space-y-2 '>
            <img src="/delivery.png" alt="return" width={50} height={50} />
         <h4>
         FREE DELIVERY
         </h4>
         <p>
         On Order above Rs.5000
         </p>
         </div>

         <div className='flex flex-col hel2 justify-center items-center space-y-2 '>
            <img src="/support.png" alt="return" width={50} height={50} />
         <h4>
          SUPPORT 24/7
         </h4>
         <p>
         Contact us 24 hours a day, 7 days a week
         </p>
         </div>

    </div>
    </>
  )
}

export default Second