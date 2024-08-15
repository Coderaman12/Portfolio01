import React from 'react'
import {motion} from 'framer-motion'


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className='w-full bg-[#004D43] rounded-tl-3xl rounded-tr-3xl py-28 '>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex text-nowrap overflow-hidden  '>
        {["we are ochii",'we are ochii',"we are ochii"].map((items,index)=>{
            return (
                    <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear", repeat:Infinity, duration:10}}
                    key={index} className='text-white font-gt2 text-[28vw] uppercase leading-[24vw] -mt-[3vw]'>{items}</motion.h1>

            )
        })}
      </div>
    </div>
  )
}

export default Marquee
