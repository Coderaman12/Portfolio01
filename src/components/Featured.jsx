import { delay, easeInOut, motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
    const[hover1,setHover1] = useState(false);
    const[hover2,setHover2] = useState(false);
    return (
        <div className='w-full h-screen'>
            <h1 className='border-b-[1px] border-zinc-400 py-[1.8vw] mt-[4vw] px-10 capitalize text-[4vw] font-nm2 tracking-tighter'>featured projects</h1>
            <div className=' w-full py-[5.5vw] px-[3vw] flex gap-[1vw]'>
                <motion.div onMouseEnter={()=>setHover1(true)} onMouseLeave={()=>setHover1(false)} 
                initial={{scale:1}} animate={hover1?{scale:0.95}:{scale:1}}
                transition={{ease: [0.83, 0, 0.17, 1], delay:0.01,duration:.5}}
                className='w-1/2 h-[80vh]'>
                    <div className='relative cardcontaine w-full h-full rounded-3xl'>
                        <h1 className='absolute overflow-hidden flex text-[6vw] font-semibold text-white  leading-[1] top-1/2 left-full uppercase font-nm2 -translate-x-1/2 -translate-y-1/2'>
                            {"fyde".split("").map((item,index)=><motion.span 
                                initial={{y:"100%"}} 
                                animate={hover1?{y:'0%'}:{y:"100%"}}
                                transition={{ease: [0.83, 0, 0.17, 1], delay:index*.04}}
                                className='inline-block'
                            key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='w-full h-full rounded-3xl bg-[url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png)]'>
                        </div>
                    </div>
                </motion.div>   
                <motion.div onMouseEnter={()=>setHover2(true)} onMouseLeave={()=>setHover2(false)} 
                initial={{scale:1}} animate={hover2?{scale:0.95}:{scale:1}}
                transition={{ease: [0.83, 0, 0.17, 1], delay:0.01,duration:.5}}
                className='w-1/2 h-[80vh]'>
                    <div className='relative cardcontainer w-full h-full rounded-3xl'>
                        <h1 className='absolute text-[6vw] overflow-hidden flex font-semibold text-white  leading-[1] top-1/2 left-0 uppercase font-nm2 -translate-x-1/2 -translate-y-1/2'>
                                {"vise".split("").map((item,index)=><motion.span 
                                    initial={{y:"100%"}} 
                                    animate={hover2?{y:'0%'}:{y:"100%"}}
                                    transition={{ease: [0.83, 0, 0.17, 1], delay:index*.04}}
                                    className='inline-block'
                                key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='w-full h-full rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")]'>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Featured
