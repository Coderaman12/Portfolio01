/* eslint-disable no-unused-vars */
import { animate, motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='bg-zinc-200 w-full h-screen pt-1'>
            <div className='textstructure mt-40 px-12'>
                {['we create',"eye-opening",'presentations'].map((items,index)=>{
                    return (
                        <div key={index} className='masker  leading-[6.4vw] tracking-tighter'>
                            <div className='flex w-fit overflow-hidden gap-2 items-center'>
                                {index === 1 && (
                                <motion.div 
                                initial={{width:0}} 
                                animate={{width:"9vw"}} 
                                transition={{ease:[0.83, 0, 0.17, 1],duration:1,delay:1}}
                                className=' w-[9vw] h-[5.8vw] rounded-[5px] mt-4 bg-red-200'>
                                    {/* <img src="https://plus.unsplash.com/premium_photo-1722180932260-da1a58af338b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                                </motion.div>)}
                                <h1 className='font-gt2 uppercase text-[9vw]'>{items}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='border-t-[1px] border-zinc-400 mt-20 flex justify-between py-4 px-10 font-sm font-bold text-base'>
                {["For public and private companies","From the first pitch to IPO"].map((items,index)=>(
                    <p className='capitalize' key={index}>{items}</p>
                ))}
                <div className='flex items-center uppercase gap-1'>
                    <div className=' border-[1px] border-zinc-700 px-3 py-1 rounded-3xl'>start the project</div>
                    <div className='border-[1px] border-zinc-700 p-2     rounded-full'><GoArrowUpRight/></div>
                </div>
            </div>
        </div>
    )
}

export default Landing
