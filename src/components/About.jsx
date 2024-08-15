import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full rounded-tl-3xl rounded-tr-3xl text-black bg-[#CDEA68]'>
            <p className='p-20 text-[3.5vw] leading-[3.6vw] font-nm2'
                >Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, eexplain complex ideas, and hire great people.</p>
            <div className='border-t-[1px] border-zinc-500 flex justify-between'>
                <div className='part1 w-1/2 px-20 py-6'>
                    <h1 className='text-[3vw] tracking-tighter mb-[1.5vw]' >Our approach</h1>
                    <a className='px-10 py-4 bg-black text-white rounded-[1.5vw] uppercase ' href="">
                        read more 
                        </a>
                </div>
                <div className='part2 w-1/2 h-[70vh] mt-4 mr-10 rounded-3xl bg-[#85993b]'>
                </div>
            </div>
        </div>
    )
}

export default About
