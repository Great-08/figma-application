import React from 'react'
import { productTop } from "../Constant"
import { motion } from "framer-motion"
import { textVariant, staggerContainer, fadeIn } from "../utils/Motion"

const Product = () => {
  return (

  
   <div className='pt-[10vh]'>
    <motion.div variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25}}
    className='flex overflow-hidden font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
      <div  className='flex gap-10 items-center justify-center flex-wrap p-10 md:p-1'>
         {productTop.map((top, index) => (
             <motion.div variants={staggerContainer()}
             initial="hidden"
             whileInView="show"
             viewport={{once:true, amount:0.25}} > 
                <img src={top.icon} alt="/" width={300}  variants={fadeIn("right", "spring", index * 0.5, 1)}/>
                <h1 className='text-[25px]'  variants={textVariant()}> {top.name} </h1>
                <p  variants={textVariant()}>&#x20A6;{top.amount} </p>    
                <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-primary text-center justify-center items-center'>Buy Now</button> 
             </motion.div>
         ))}
      </div>
      </motion.div>    
   </div>  
  )
}

export default Product;