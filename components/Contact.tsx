import Image from 'next/image'
import React from 'react'
import bg from '@/assets/img3.jpg'

interface Props {
    
}

const Contact = (props: Props) => {
    return (
        <div className='bg-[#000]'>
            <div className='max-w-5xl mx-auto pt-10'>
                <div className=' flex w-full items-end justify-center '>
                    <div className='text-[#4A36EC] w-[30%] pb-5'>
                        <h2 className='text-3xl'>GET IN TOUCH</h2>
                        <p className='text-white text-[10px]'>We value your input, questions and feedback. Connecting with you is essential to us. Whether you're seeking guidance have inquiries about our content or wish to share your thoughts, our virtual door is always open. Reach out to us through the channels below:</p>
                    </div>
                    <Image src={bg} alt='background' className='h-[200px] w-[70%] object-contain' />
                </div>

                
            </div>
            <div className='bg-[#0C0C0C]'>
                <div className='text-white py-10'>
                <div className='max-w-5xl mx-auto'>
                    <div className='border-t border-gray-400 pt-5 w-[20%]'>
                        <h2>Get in contact <br /> with us?</h2>
                        <p className='text-[8px] text-gray-500'>Find all our contact info below.</p>
                    </div>
                </div>
            </div>

            <div className='max-w-5xl mx-auto '>
                <div className='w-full flex flex-wrap gap-5'>
                    <div className='bg-[#131313] p-2 py-4 w-[45%]'>
                        <h2 className='text-xs'>General Support and Enquiries</h2>
                        <div className='h-[1px] w-full bg-gray-100' />
                        <p className='text-[10px]'>official1fantasyisland@gmail.com</p>
                    </div>

                    <div className='bg-[#131313] p-2 py-4 w-[45%]'>
                        <h2 className='text-xs'>Reports</h2>
                        <div className='h-[1px] w-full bg-gray-100' />
                        <p className='text-[10px]'>official1fantasyisland@gmail.com</p>
                    </div>
                    <p className='text-[10px] text-center w-full'>Availability of toys, supplements and lubricant within in-house authorization.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
