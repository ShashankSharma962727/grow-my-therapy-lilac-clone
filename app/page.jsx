import TherapyOverview from '@/Components/TherapyOverview'
import Background from '@/Components/Background'
import AboutMe from '@/Components/AboutMe'
import FAQ from '@/Components/FAQ'
import Footer from '@/Components/Footer'
import GetInTouch from '@/Components/GetInTouch'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import SupportMessage from '@/Components/SupportMessage'
import Office from '@/Components/Office'
import Service from '@/Components/Services/Service'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <TherapyOverview/>
        <Service/>
        <SupportMessage/>
        <AboutMe/>
        <FAQ/>
        <Office/>
        <Background/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default page