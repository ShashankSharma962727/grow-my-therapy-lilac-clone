import Link from 'next/link'
import React from 'react'
import  {colors}  from '@/Styles/colors'
import { TbMenu } from "react-icons/tb";

const Header = () => {
  return (
    <nav className={`w-full flex flex-row-reverse lg:flex-row items-center justify-between py-3 px-5 lg:px-16 ${colors.background.primary} `}>
      <h1 className={`text-base lg:text-[2.15rem] ${colors.text.primary} `}>Lilac Template</h1>

      <div className='lg:flex text-lg gap-12 hidden'>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className='flex lg:hidden text-2xl lg:text-4xl'> <TbMenu/> </div>
    </nav>
  )
}

export default Header