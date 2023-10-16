import React from 'react'
import NavBar from '../container/NavBar'
import Animate from '../container/Animate'
import Section2 from '../container/Section2'
import Section3 from '../container/Section3'
import Section4 from '../container/Section4'
import Section5 from '../container/Section5'
import Section6 from '../container/Section6'
import Footer from '../container/Footer'

const Home = () => {
  return (
    <>
    <div className='bg-neutral-900 h-screen w-full relative'>
        <NavBar/>
        <Animate/>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer/>
    </>
  )
}

export default Home