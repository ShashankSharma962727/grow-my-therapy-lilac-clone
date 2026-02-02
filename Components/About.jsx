import React from 'react'
import { colors } from "@/Styles/colors";
import Image from 'next/image';
import about from '../public/Images/About.webp'

const About = () => {
  return (
    <section className='min-h-screen w-full flex flex-col-reverse md:flex-row overflow-hidden'>
      <aside className={`${colors.background.secondary} ${colors.text.primary} flex-1 flex flex-col`}>
        <div className='w-full grow flex flex-col mt-6 md:mt-0 justify-start md:justify-center px-8 md:px15 gap-6'>
          <h1 className='text-[7.5vw] md:text-[4vw] '>Live a fulfilling life.</h1>
          <p className='text-base lg:text-lg'>Life can be challenging—especially when you're trying to balance your personal and professional life. </p>
          <p className='text-base lg:text-lg'>It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p>
        </div>

        <div 
        className={`border-t ${colors.border.secondary} w-full text-sm py-4 md:py-6 flex items-center justify-center 
        ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary} cursor-pointer duration-1000`}
        >
          GET IN TOUCH 
        </div>
      </aside>

      <aside className='w-full aspect-video md:aspect-auto overflow-hidden flex-0 md:flex-1 relative'>
        <Image src={about}
         alt="About"
         placeholder='blur'
         fill
        className="object-cover" />
      </aside>
    </section>
  )
}

export default About