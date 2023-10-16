import React from 'react'
import Bar from './Bar'
import {BsPeopleFill,BsFillGrid3X3GapFill,BsFillFilePostFill} from 'react-icons/bs'
import {IoMdColorPalette} from 'react-icons/io'
import blob from '../assets/blobanimation.svg'
const Section3 = () => {
  return (
    <div className=' bg-neutral-900 gradient__side relative'>
        <div class="custom-shape-divider-top-1696107783">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
    <div className='pt-48 pb-32'>
        <div className=' pl-16 max-sm:pl-8'>
            <p className='text-6xl max-lg:text-4xl max-sm:text-3xl text-white gradient__animation p-4 '>
                Discover + create unlimited <br/> visuals for your designs
            </p>
        </div>
        <div className='px-16 grid grid-cols-2 max-md:grid-cols-1 max-md:px-8 max-sm:py-16 py-16 gap-16 text-white'>
            <div className='flex flex-col gap-4'>
                <div className='text-4xl max-xl:text-2xl border border-neutral-500 w-min bg-neutral-800 p-4 rounded-2xl'>
                    <BsPeopleFill/>
                </div>
                <h1 className=' text-4xl max-xl:text-2xl max-md:text-xl'>
                Design Collaboration
                <Bar/>
                </h1>
                <p className=' custom-text leading-8 tracking-wide text-neutral-500'>
                Collaboration is at the heart of GUTRUT. Users can seamlessly collaborate with team members, clients, or fellow designers on projects in real-time. Share feedback, make edits, and track changes effortlessly, fostering a collaborative and efficient design process.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-4xl max-xl:text-2xl border border-neutral-500 w-min bg-neutral-800 p-4 rounded-2xl'>
                    <IoMdColorPalette/>
                </div>
                <h1 className=' text-4xl max-xl:text-2xl max-md:text-xl'>
                    Intuitive Design Tools
                    <Bar/>
                </h1>
                <p className=' custom-text leading-8 tracking-wide text-neutral-500'>
                GUTRUT offers an extensive suite of intuitive design tools tailored to various design needs. From graphics and illustrations to web design and branding, our platform provides users with a range of easy-to-use tools to create visually stunning concepts.                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-4xl max-xl:text-2xl border border-neutral-500 w-min bg-neutral-800 p-4 rounded-2xl'>
                    <BsFillGrid3X3GapFill/>
                </div>
                <h1 className=' text-4xl max-xl:text-2xl max-md:text-xl'>
                Design Libraries
                <Bar/>
                </h1>
                <p className=' custom-text leading-8 tracking-wide text-neutral-500'>
                Access an extensive library of design elements, templates, fonts, and graphics curated to inspire and enhance your design projects. Users can customize and integrate these elements into their designs, saving time and effort in the creative process.
                </p>            
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-4xl max-xl:text-2xl border border-neutral-500 w-min bg-neutral-800 p-4 rounded-2xl '>
                    <BsFillFilePostFill/>
                </div>
                <h1 className=' text-4xl max-xl:text-2xl max-md:text-xl'>
                Curated Templates
                <Bar/>
                </h1>
                <p className=' custom-text leading-8 tracking-wide text-neutral-500'>
                For those seeking inspiration or a starting point, GUTRUT offers a diverse range of professionally designed templates across various categories like social media graphics, presentations, logos, posters, and more. Customizable and adaptable, these templates provide a foundation to build upon and tailor to specific design requirements.
                </p>
            </div>
        </div>
    </div>
    <div className="custom-shape-divider-bottom-1696194725 absolute bottom-0" >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
  )
}

export default Section3