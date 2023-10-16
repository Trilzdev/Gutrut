import React from 'react'
import Bar from './Bar'
const Section2 = () => {
  return (
    <>
    <div className='custom-text tracking-wide py-16 px-16 max-md:px-8 max-sm:py-32'>
        <div className='flex justify-center items-start gap-8 max-lg:flex-col'>

            <div className='min-w-64  max-w-96 '>
                <Bar/>
                <p className=' leading-8'>GUTRUT offers an extensive suite of intuitive design tools tailored to various design needs. From graphics and illustrations to web design and branding, our platform provides users with a range of easy-to-use tools to create visually stunning concepts.</p>
            </div>
            <div className='min-w-64 max-w-96 '>
                <Bar/>
                <p className=' leading-8'>Typography is a vital aspect of design, and our platform understands its significance. GUTRUT's font repository encompasses an extensive collection of fonts catering to different styles and moods. Users can experiment with various fonts to find the perfect fit for their projects, elevating the overall visual appeal.</p>
            </div>
            <div className='min-w-64 max-w-96'>
                <Bar/>
                <p className=' leading-8'>GUTRUT is committed to regularly updating and expanding its design libraries to keep pace with the ever-evolving design landscape. New design elements, templates, fonts, and graphics are continually added to provide fresh and trending options to our users.</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Section2