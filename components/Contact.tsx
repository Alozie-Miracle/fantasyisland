import Image from 'next/image'
import React from 'react'
import bg from '@/assets/img3.jpg'

interface Props {
    
}

const Contact = (props: Props) => {
    return (
        <div className='bg-[#0C0C0C]'>
            <div className=' flex w-full items-center justify-center'>
                <div className='text-[#4A36EC] w-[30%]'>
                    <h2>GET IN TOUCH</h2>
                    <p className='text-white text-xs'>We value your input, questions and feedback. Connecting with you is essential to us. Whether you're seeking guidance have inquiries about our content or wish to share your thoughts, our virtual door is always open. Reach out to us through the channels below:</p>
                </div>
                <Image src={bg} alt='background' className='h-[200px] w-[70%] object-contain' />
            </div>
        </div>
    )
}

export default Contact
