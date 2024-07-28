"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const Size = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
      setSelectedSize(size);
  };
  console.log(selectedSize)
   
    return (
        <>


<div className="my-2">
      {/* <h3 className="text-lg font-semibold">Available Sizes:</h3> */}
      <ul className="list-disc  flex gap-x-8 ">
        {sizes && sizes.map((size, index) => (
         <button
         onClick={()=>handleSizeClick(size)}
         >
           <li
          
          key={index} className="mb-2
          
          ">{size.value}</li>
         </button>
        ))}
      </ul>
      {/* {selectedSize && <p>Selected Size: {selectedSize}</p>} */}
    </div>
        </>
    )
}

export default Size