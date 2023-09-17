import React from 'react'
import bg from '@/assets/services.png'
import Image from 'next/image'
import Options from './Options'
import { options } from '@/constants'
import ServiceCard from './ServiceCard'

import cardImg3 from '@/assets/girl4.jpg'
import cardImg2 from '@/assets/img2.jpg'
import cardImg from '@/assets/img1.jpg'


type Props = {}

const Services = (props: Props) => {
  return (
    <div className='bg-[#0C0C0C]'>
      <div className='relative w-full'>
        <Image src={bg} alt='background' />
        <h2 className='text-[#4A36EC] absolute bottom-5 left-16 text-2xl'>Our Services</h2>
      </div>
      <div className='max-w-7xl mx-auto'>

        <div className='flex  justify-between text-white gap-5 p-5 md:p-10 pt-16'>
          <h2 className='text-base md:text-2xl border-t border-gray-100 py-2 md:py-5'>Educate, Excite, Empower - <br /> View Our Services</h2>
          <p className='text-[10px] md:text-xs'>Shown below are a list of all our services offered at Fantasy Island. <br /> Go on, you might see something you like</p>
        </div>

        <div className='p-5 px-2 md:px-10 text-white flex flex-wrap gap-5 justify-center items-center'>
          {options.map((option: {name : string}, index: number) => (
            <Options name={option.name} index={index + 1} key={index} />
          ))}
        </div>

        <div className='flex gap-5 md:gap-10 flex-wrap md:justify-between justify-center items-center px-10'>
          <ServiceCard img={cardImg} text='Bondage' />
          <ServiceCard img={cardImg2} text='Role Play' />
          <ServiceCard img={cardImg3} text='Gags' />
        </div>

        <h2 className='text-center text-white py-5 md:text-3xl text-sm px-2'>Shibari Seduction: Explore the sensual and <br /> beautiful art of <span className='text-[#4A36EC]'>rope bondage</span></h2>
      </div>
    </div>
  )
}

export default Services