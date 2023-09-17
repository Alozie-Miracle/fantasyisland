import Image from 'next/image'
import React from 'react'

import girl from '@/assets/girl2.jpg'
import girl3 from '@/assets/girl3.jpg'


type Props = {}

const About = (props: Props) => {
  return (
    <div className='bg-[#0C0C0C] p-5 pt-10'>
        <h2 className='text-center text-white text-2xl'>Exploring Boundaries, <br /> Embracing Desires: <br /> <span className='text-[#4A36EC]'> Welcome to Fantasy Island</span> </h2>

        <div className='flex items-center gap-10 px-10 mt-10'>
            <div className='max-w-[70%] mx-auto h-[50vh] flex flex-col gap-2'>
                <h2 className='text-[#4A36EC] text-xs'>About</h2>
                <p className='text-white text-3xl'>Picture this as your <br /> embarkation to an <br /> enchanting  island where <br /> <span className='text-[#4A36EC]'>curiosity knows no bounds</span></p>
                <p className='text-white text-xs max-w-2xl'>At Fantasy Island, we believe that human desires are as diverse as the colors of the rainbow, and we're here to celebrate the beauty of each unique shade. Our journey began with the shared passion of individuals who believe in the power of consensual exploration, trust, and the enchantment of desire. Our BDSM information website is a testament to our commitment to educate, empower, and ignite the flames of your deepest fantasies</p>
                <p className='text-white text-xs max-w-2xl'>Safety is paramount in the BDSM world, and we prioritize your well-being above all else. We provide comprehensive resources on consent, risk-awareness, and communication to ensure your journey is one of self-discovery and enlightenment.</p>
            </div>
            <div className='w-[30%] h-[70vh]'>
                <Image src={girl} alt='girl' className='w-full h-full' />
            </div>
        </div>

        <Image src={girl3} alt='girl' />
    </div>
  )
}

export default About