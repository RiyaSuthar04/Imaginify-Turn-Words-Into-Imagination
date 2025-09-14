import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

function Testimonials() {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 py-12'  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <h2 className='text-gray-950 font-semibold text-4xl'>Customer Testimonials</h2>
        <p className='mt-4 mb-12 text-gray-500 text-lg'>What Our Users Are Saying</p>

        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((item,index)=>(
                <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md  w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300'>
                    <div className='flex flex-col items-center'>
                        <img className='rounded-full w-14' src={item.image} alt="" />
                        <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
                        <p className='text-gray-500 mb-4'>{item.role}</p>

                        <div className='flex mb-4'>
                            {Array(item.stars).fill().map((item,index)=>(
                                <img key={index} src={assets.rating_star} alt="" />
                            ))}
                        </div>
                        <p className='text-center text-sm text-gray-500'>{item.text}</p>

                    </div>
                    
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials