import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

function Header() {
    const {user,setShowLogin} = useContext(AppContext);
    const navigate = useNavigate();
    const onclickHandler = ()=>{
        if(user){
            navigate('/result');
        }else{
            setShowLogin(true);
        }
    }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <motion.div className=' inline-flex gap-2 border rounded-full border-neutral-500 py-1 px-6 bg-white text-center' initial={{opacity:0,y:-20}} transition={{delay:0.2, duration:0.8}} animate={{opacity:1,y:0}} viewport={{once:true}}>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <h1 
        className='text-4xl  max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
            Turn text to <span className='text-blue-600'>image</span>, in seconds.</h1>

        <p className='text-center max-w-xl mx-auto mt-5 '>Unleash ypur creativity with AI. Turn your imagination into visual art 
            in seconds - Just type, and watch the magic happen.
        </p>

        <button  onClick={onclickHandler}
        className='flex gap-2 items-center mt-8 w-auto border rounded-full bg-black sm:text-lg text-white hover:scale-105 transition-all duration-500  px-12 py-2.5'>
            Generate Images 
            <img className='h-6' src={assets.star_group} alt="" />
        </button>

        <motion.div className='flex justify-center flex-wrap gap-4 mt-16' initial={{opacity:0}} transition={{delay:1,duration:1}} animate={{opacity:1}}>
            {Array(6).fill('').map((item,index)=>(
                <motion.img whileHover={{scale:1.05,duration:0.1}}
                className='rounded max-sm:w-10 hover:scale-105 transition-all duration-300 cursor-pointer' 
                src={index%2 === 0 ? assets.sample_img_2 : assets.sample_img_1 }
                 alt="" 
                 key={index}
                  width={150}/>
            ))}
        </motion.div>

        <p className='mt-2 text-neutral-600 text-2xl'>Generated images from imegify</p>

    </motion.div>
  )
}

export default Header