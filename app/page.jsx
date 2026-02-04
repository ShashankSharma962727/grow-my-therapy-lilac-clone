import About from '@/Components/About'
import Background from '@/Components/Background'
import Contact from '@/Components/Contact'
import FAQ from '@/Components/FAQ'
import Footer from '@/Components/Footer'
import GetInTouch from '@/Components/GetInTouch'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Motivates from '@/Components/Motivates'
import Office from '@/Components/Office'
import Service from '@/Components/Services/Service'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Service/>
        <Motivates/>
        <Contact/>
        <FAQ/>
        <Office/>
        <Background/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default page