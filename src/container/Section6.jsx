import React from 'react'
import googleplay from '../assets/icons8-google.svg'
import adobe from '../assets/icons8-adobe.svg'
import figma from '../assets/icons8-figma.svg'
import instagram from '../assets/icons8-instagram.svg'
import canva from '../assets/icons8-canva.svg'
import chatgpt from '../assets/icons8-chatgpt.svg'
import microsoft from '../assets/icons8-microsoft.svg'
import dribble from '../assets/icons8-dribble.svg'
import apple from '../assets/icons8-apple.svg'
// import pinterest from '../assets/'
import Marquee from "react-fast-marquee";
const Section6 = () => {
  return (
    <>
    <div className=' bg-neutral-900 text-neutral-500 text-8xl h-fit py-16 max-sm:py-8 relative px-16'>
        <Marquee autoFill='true' gradient='true' gradientColor='#171717' gradientWidth={800}> 
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={googleplay} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={adobe} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={figma} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={instagram} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={canva} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={dribble} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={apple} alt="" className='w-full' />
            </div>
            <div className='w-32 mx-4 max-sm:w-16 max-sm:mx-2'>
                <img src={microsoft} alt="" className='w-full' />
            </div>
        </Marquee>

    </div>

    </>
  )
}

export default Section6