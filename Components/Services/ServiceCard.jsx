import React from 'react'
import { colors } from '@/Styles/colors'
import Image from 'next/image'

const ServiceCard = ({title, desc, image}) => {
  return (
    <div className={`w-full max-w-100 lg:max-w-full ${colors.background.secondary} ${colors.text.primary} border ${colors.border.secondary} flex flex-col items-start gap-10 p-5`}>
      <h1 className='text-lg'>{title}</h1>

      <p className='text-xs'>{desc}</p>

      <div className='w-[75%] aspect-square overflow-hidden rounded-full m-auto relative'>
        <Image 
        src={image}
        alt='card'
        placeholder='blur'
        fill
        className='object-cover'/>
      </div>
    </div>
  )
}

export default ServiceCard