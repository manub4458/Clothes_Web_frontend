
import qs from "query-string"



// import ProductPagee from "../../components/ProductPagee"
import ProductImages from './ProductImages'
import Size from './Size'
import Image from "next/image"
import { getProductById } from "@/server/product"
import Navbar from "@/app/component/Navbar"
import { priceCalculator } from "@/libs/utils"
import ProductPage from "@/app/component/ProductPage"

import Cart from "./cart"
import SecondNav from "@/app/component/SecondNav"

// import Productss from "./Productss"

const ProdcutPage = async({params}) => {
    


  const url = qs.stringifyUrl({
    url: "http://localhost:5000/api/v1/product",
    query: {
        productId: params.productsId,
        // gender: searchParams["gender"],
        // limit: 24,
        // page: searchParams["page"]
    }

},
    {
        skipNull: true
    }

)

const product = await getProductById(url)
console.log(product)


  return (
    <>
      
      <div
      className=""
      >
            <SecondNav />
      </div>
     
        <div
            className="flex justify-center items-center    gap-x-20     "
        >
           
           <div
                    className="  rounded-lg "
                        key={product.id}
                        // onClick={()=>router.push(`/products/${product.id}`)}

                    >
                        {/* <div

                            className=" relative"
                        >
                            
                            <Image
                                src={product.image[0]}
                                width={200}
                                height={200}
                                alt="product"
                                className=" w-full h-full rounded-md"
                            />
                        </div> */}
                        {/* <div>
                           
                          
                            <p className="text-center">
                                {
                                    product.price
                                }
                            </p>
                        </div> */}
                         <div >
        <ProductImages
        images={product.image}
        />
      </div>
                    </div>

                    <div>
                        {/* <div>
                        <h4 className="font-bold">
                                {
                                    product.brand
                                }
                                
                            </h4>
                        </div> */}
                        {/* <div>
                        <h4 className="">
                                {
                                    product.about
                                }
                                
                            </h4>
                        </div> */}

                        {/* <div>
                        <h4 className="">
                                {
                                    product.price
                                }
                                
                            </h4>
                            {product.discount.value}
                        </div> */}

                       <ProductPage 
                       
                       brand={product.brand}
                       about={product.about}
                       discount_price={priceCalculator(product.price,product.discount.value)}
                       original_price={product.price}
                       
                       discount={product.discount.value}
                       taxes="Inclusive of All taxes"
                    
                    //    sizes={product.size[0]}
                       />

<p className='font-semibold'>
                    SELECT SIZE
                </p>
                <div className='flex gap-x-4 '>
                 
                <Size sizes={product.size} />
                </div>

                <div className='flex gap-x-6 '>

                    <button className='flex justify-center items-center gap-x-6 px-4 py-3 rounded-lg bg-[#212121] text-white'> 
                     <img 
                     src='/bag.png'
                     alt='Bag'
                     width={20}
                     height={40}
                     
                     />

                     <p className=''>
                       <Cart
                       id={product.id}
                       />
                     </p>
                    </button>

                    <button className='flex justify-center items-center gap-x-6 px-4 py-3 bg-[#ffffff] hover:bg-yellow-100/20 rounded-lg  '> 
                     <img 
                     src='/heart2.png'
                     alt='Bag'
                     width={20}
                     height={40}
                     
                     />

                     <p className=''>
                      WISHLIST
                     </p>
                    </button>
                </div>

                <div className='leading-6 my-6'>
                    <h2 className='font-bold'>
                        PRODUCT DETAILS
                    </h2>

                    <p className='pt-2 w-[360px]'>
                   {product.specification}
                    </p>
                   
                </div>
                      
                    </div>
                    {/* <div>
                    <ul>
        {product.sizes.map((size) => (
          <li key={size.id}>{size.value}</li>
        ))}
      </ul>

                    </div> */}
                   
                    {/* <Productss /> */}
                    {/* <Size 
                    sizes={product.size}
                    /> */}

        </div>
        <div>

        </div>

       <div className="mt-4">
       {/* <Footer /> */}
       </div>
        </>
  )
}

export default ProdcutPage