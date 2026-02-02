import React from 'react'
import ServiceCard from './ServiceCard'
import { colors } from "@/Styles/colors";
import card1 from '../../public/Images/Service1.jpg'
import card2 from '../../public/Images/Service2.jpg'
import card3 from '../../public/Images/Service3.webp'

const ServiceData = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: card1
  },
  {
    title: "Relationships",
    desc: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: card2
  },
  {
    title: "Burnout",
    desc: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: card3
  },
]

const Service = () => {
  return (
    <section className={`w-full min-h-screen ${colors.text.primary} ${colors.background.primary} flex flex-col gap-15 items-center pt-30 pb-30`}>
      <h1 className='text-[6vw] md:text-[4vw]'>My Specialties</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-15 gap-5'>
        {
          ServiceData.map((card, index) => (
            <ServiceCard key={index} title={card.title} desc={card.desc} image={card.image} />
          ))
        }
      </div>
    </section>
  )
}

export default Service