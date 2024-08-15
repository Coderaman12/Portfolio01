import React, { useEffect, useState } from 'react'

const Eye = () => {

    const [rotate,setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            // console.log(e.clientX,e.clientY);
            let delx = e.clientX - (window.innerWidth/2);
            let dely = e.clientY - (window.innerHeight/2);
            var angle = Math.atan2(dely,delx) * (180/Math.PI);

            setRotate(angle-180);


        })
    })

    return (
        <div  className='w-full h-screen bg-zinc-300 overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed='-.6' className='relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] w-full h-screen bg-cover bg-center' >
                <div className='absolute flex gap-[2vw]  top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='relative w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div style={{
                                transform:`translate(-50%,-50%) rotate(${rotate}deg)`
                            }}
                            className='w-[10vw] h-[10vw] absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
                        <div className='absolute w-[9vw] h-[9vw] bg-black rounded-full' >
                            <div style={{
                                transform:`translate(-50%,-50%) rotate(${rotate}deg)`
                            }} className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-full h-[2vw] p-[0.2vw]'>
                            <div className='w-[1vw] h-[1vw] bg-white rounded-full'></div>
                            </div>
                        </div>
                        </div>
                    <h4 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white capitalize font-nm2 text-xl'>play</h4>
                    </div>
                    <div className='relative w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div style={{
                                transform:`translate(-50%,-50%) rotate(${rotate}deg)`
                            }}
                            className='w-[10vw] h-[10vw] absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
                        <div className='absolute w-[9vw] h-[9vw] bg-black rounded-full' >
                            <div style={{
                                transform:`translate(-50%,-50%) rotate(${rotate}deg)`
                            }} className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-full h-[2vw] p-[0.2vw]'>
                            <div className='w-[1vw] h-[1vw] bg-white rounded-full'></div>
                            </div>
                        </div>
                        </div>
                    <h4 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white capitalize font-nm2 text-xl'>play</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eye
