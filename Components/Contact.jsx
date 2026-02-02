import React from 'react'
import Image from 'next/image'
import contact from '../public/Images/Contact.webp'
import flower from '../public/Images/flower.webp'
import { colors } from '@/Styles/colors'

const Contact = () => {
  return (
    <section
      className={`${colors.background.secondary} ${colors.text.primary} flex flex-col-reverse md:flex-row w-full min-h-screen pt-30 pb-60`}
    >
      
      <aside className="flex-1 flex flex-col justify-center gap-6 px-6 md:px-10 py-10 md:py-0">
        <h1 className="lg:text-[3vw] md:text-[4vw] text-[6vw]">
          Hi, I’m Lilac.
        </h1>

        <p className="text-[clamp(1rem,4vw,1.125rem)] md:text-lg leading-relaxed">
          I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
        </p>

        <button
          className={`text-sm border ${colors.border.secondary} w-40 md:w-36 text-center p-3 mt-10 md:mt-20
           ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary} cursor-pointer transition-all duration-700 mx-auto`}
        >
          LET'S CHAT
        </button>
      </aside>

     <aside className="flex-1 flex justify-center items-center py-10 md:py-0 md:pr-20">

  <div className="relative w-[40%] md:w-full lg:w-[75%]">

    <div className="rounded-t-full overflow-hidden">
      <Image
        src={contact}
        alt="contact"
        placeholder="blur"
        className="object-cover w-full"
      />
    </div>


    <div className="absolute -bottom-15 -right-15 md:-bottom-20 md:-right-20 w-35 md:w-[60%] rounded-full overflow-hidden">
      <Image
        src={flower}
        alt='Flower'
        placeholder="blur"
        className="object-cover aspect-square"
      />
    </div>
  </div>
</aside>


    </section>
  )
}

export default Contact
