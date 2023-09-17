import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    img: StaticImageData;
    text: string
}

const ServiceCard = ({img, text}: Props) => {
  return (
    <div className='md:mt-10 mt-5 py-10 relative'>
        <Image src={img} alt={text} className='w-[300px] h-[400px] object-cover rounded-md' />
        <div className="absolute z-10 bottom-16 w-full text-center text-white px-10">
            <p className='border border-gray-100 rounded-md p-2 bg-[#646464]/50'>{text}</p>
        </div>
    </div>
  )
}

export default ServiceCard