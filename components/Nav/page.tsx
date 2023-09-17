/* use client */

import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link'

export default function Nav() {
   
  return (
    <>
    <div className='bg-[#0C0C0C] h-[65px] w-[100%] text-[#FFFFFF] lg:flex items-center justify-between hidden '>
        <div className='ml-[98px] cursor-pointer '> <Image src='../img/logo.svg' height={100} width= {100} alt={'Logo'} className='w-[173px] ' />  </div>
        <div className='flex w-[30%] justify-between text-[16px] font-500 '>
            <Link href='/' className='cursor-pointer'>Home</Link>
            <Link href='/services' className='cursor-pointer'>Services</Link>
            <Link href='/contact' className='cursor-pointer'>Contact</Link>
        </div>
        <div className='flex items-center w-[20%] gap-[18px] mr-[98px] '>
            <Image src='../img/email.svg' height={100} width={100} alt='email' className='w-[19px] h-[17px] ' />
            <a href="mailto: officialfantasy@gmail.com" className='text-[13px] font-500 '>officialfantasy@gmail.com</a>
        </div>
    </div>

    <div className='lg:hidden block w-[100%] bg-[#CCCCC] '>
        <div className='py-[20px] pl-[25px] cursor-pointer '>
            {
                [1,2,3].map((bun) => {
                    return(
                        <div className='border-[#FFFFFF] border-[2px] w-[50px] rounded-[5px] mb-[5px] '></div>
                    )
                })
            }
          
        </div>
    </div>
    </>
  )
}
