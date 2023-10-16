import React from 'react'
import layer from '../assets/layer.svg'
import design1 from '../assets/design1.png'
import design2 from '../assets/design2.png'
import design3 from '../assets/design3.jpg'
import design4 from '../assets/design4.jpg'
import design5 from '../assets/design5.png'
import design6 from '../assets/design6.jpg'
import design7 from '../assets/design7.png'
import design8 from '../assets/design8.png'
import design9 from '../assets/design9.jpg'
import design10 from '../assets/design10.jpg'
import design11 from '../assets/design11.jpg'
import design12 from '../assets/design12.jpg'
const Section4 = () => {
  return (
    <div className='h-fit bg-neutral-800 py-16 text-center text-white gradient__side'>
        <div>
            <p className=' text-4xl max-xl:text-2xl max-md:text-xl'>Get inspired by our designers!</p>
        </div>
        <div className='flex gap-4 justify-center py-8 px-16  items-center max-sm:px-8 max-sm:flex-col'>
            <div className='flex flex-col gap-4 w-[600px] max-lg:w-[600px] max-2xl:w-[600px]  max-sm:w-full '>
                <div className=''>
                    <img src={design1} alt="" />
                </div>
                <div className=''>
                    <img src={design2} alt="" />
                </div>
                <div className=''>
                    <img src={design3} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-4 w-[600px] max-lg:w-[600px] max-2xl:w-[600px] max-sm:w-full'>
                <div className=''>
                    <img src={design4} alt="" />
                </div>
                <div className=''>
                    <img src={design5} alt="" />
                </div>
                <div className=''>
                    <img src={design6} alt="" />
                </div>
            </div>
            <div className=' flex flex-col gap-4 w-[600px] max-lg:w-[600px] max-2xl:w-[600px] max-sm:w-full max-lg:hidden'>
                <div className=''>
                    <img src={design7} alt="" />
                </div>
                <div className=''>
                    <img src={design8} alt="" />
                </div>
                <div className=''>
                    <img src={design9} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4