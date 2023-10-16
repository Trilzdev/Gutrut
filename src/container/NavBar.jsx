import React from 'react'
import {RiSearch2Fill} from 'react-icons/ri'

const NavBar = () => {
  return (
    <nav className='section__padding flex items-center justify-between text-white topbar'>
        <div>
         <span className=' text-2xl tracking-wider '>GUTRUT</span>  
        </div>
        <div className='flex gap-8 custom-text max-lg:hidden'>
            <a href="" className=' tracking-wider link'>Home</a>
            <a href="" className=' tracking-wider link'>About</a>
            <a href="" className=' tracking-wider link'>Products</a>
            <a href="" className=' tracking-wider link'>Bookings</a>
        </div>
        <div className='flex items-center gap-8'>
          <button className=' text-base border-2 rounded-full p-4 max-md:hidden'>
            <RiSearch2Fill/>
          </button>
        <div className=' rounded-full py-4 px-8 gradient__button'>
            <button className='tracking-wider'>Get Started</button>
        </div>
        </div>
        
    </nav>
  )
}

export default NavBar