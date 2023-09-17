import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { Playball } from 'next/font/google'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import hambuger from '@/assets/hamburger.png'

const font = Playball({weight: "400", preload: false })
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-[#0C0C0C] p-3 sticky top-0 z-50 w-full'>
        <div className='max-w-7xl mx-auto shadow-md flex items-center justify-between'>
            <div className='flex items-center gap-5 text-white'>
                <Image src={logo}  alt='logo' className='md:h-10 md:w-10 h-6 w-6 object-contain'/>
                <h2 className='text-xs'>Fantasy Island</h2>
            </div>

            <div className='text-white md:flex gap-2 md:gap-10 hidden text-xs'>
                <Link href='/'>Home</Link>
                <Link href='/services'>Services</Link>
                <Link href='/contact'>Contact</Link>
            </div>

            <div className='text-white text-xs md:flex hidden gap-2 items-center'>
                <EnvelopeIcon className='h-5 w-5 text-blue-600' />
                <p>official1fantasyisland@gmail.com</p>
            </div>

            <Image className='md:hidden h-8 w-8 cursor-pointer' src={hambuger} alt='hambuger menu' />
        </div>

    </div>
  )
}

export default Navbar