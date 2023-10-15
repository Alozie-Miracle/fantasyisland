import Image from 'next/image'
import React from 'react'
import bg from '@/assets/img3.jpg'

interface Props {
    
}

const Contact = (props: Props) => {
    return (
        <div className='bg-[#000]'>
            <div className='max-w-[98%] md:max-w-5xl mx-auto pt-10'>
                <div className=' flex flex-col md:flex-row w-full md:items-end md:justify-center '>
                    <div className='text-[#4A36EC] md:w-[30%] w-full pb-5'>
                        <h2 className='text-3xl text-center'>GET IN TOUCH</h2>
                        <p className='text-white text-[10px] text-center'>We value your input, questions and feedback. Connecting with you is essential to us. Whether you're seeking guidance have inquiries about our content or wish to share your thoughts, our virtual door is always open. Reach out to us through the channels below:</p>
                    </div>
                    <div className='md:h-[200px] md:w-[70%] flex items-center justify-center '>
                        <Image src={bg} alt='background' className='w-full h-full object-contain' />
                    </div>
                </div>

                
            </div>
            <div className='bg-[#0C0C0C] '>
                <div className='text-white py-5 md:py-10 max-w-[98%] md:max-w-5xl mx-auto'>
                    <div className=''>
                        <div className='md:border-t md:border-gray-400 pt-5 md:w-[20%]'>
                            <h2>Get in contact <br className='hidden md:flex' /> with us?</h2>
                            <p className='text-[8px] text-gray-500'>Find all our contact info below.</p>
                        </div>
                    </div>
                </div>

                <div className='md:max-w-5xl max-w-[90%] mx-auto '>
                    <div className='w-full flex flex-wrap gap-2 md:gap-5'>
                        <div className='bg-[#131313] p-2 py-4 w-[100%] md:w-[40%] flex flex-col gap-3 rounded-md'>
                            <h2 className='text-xs'>General Support and Enquiries</h2>
                            <div className='h-[1px] w-full bg-gray-100' />
                            <p className='text-[10px]'>official1fantasyisland@gmail.com</p>
                        </div>

                        <div className='bg-[#131313] p-2 py-4 w-[100%] md:w-[40%] flex flex-col gap-3 rounded-md'>
                            <h2 className='text-xs'>Reports</h2>
                            <div className='h-[1px] w-full bg-gray-100' />
                            <p className='text-[10px]'>official1fantasyisland@gmail.com</p>
                        </div>
                    </div>
                    <p className='text-[10px] text-center w-full py-2'>Availability of toys, supplements and lubricant within in-house authorization.</p>
                    <div className='w-full flex flex-wrap gap-5 py-3'>
                        <div className='bg-[#131313] p-2 py-4 w-[100%] md:w-[40%] flex flex-col gap-2 rounded-md'>
                            <h2 className='text-xs'>Contact Information</h2>
                            <div className='h-[1px] w-full bg-gray-100' />
                            {/* <p className='text-[10px]'>WhatsApp United Kingdom: +44 7529418982‪</p>
                            <p className='text-[10px]'>WhatsApp Canada: +1 5812790030‪</p>
                            <p className='text-[10px]'>Text or Calls United States: +97 07036595</p> */}
                           <p className='text-[10px]'>Our Call/text numbers are provided to registered clients to ensure maintenance of the privacy policy. Contact us via our email and live chat for to subscribe for a the fantasy experience. </p>
                        </div>

                        <div className='bg-[#131313] p-2 py-4 w-[100%] md:w-[40%] flex flex-col gap-2 rounded-md'>
                            <h2 className='text-xs'>Payment Methods</h2>
                            <div className='h-[1px] w-full bg-gray-100' />
                            <p className='text-[10px]'>Bitcoin, E-transfer</p>
                            <p className='text-[10px]'>Cashapp, Zelle</p>
                            <p className='text-[10px]'>PayPal, Venmo</p>
                            <p className='text-[10px]'>MoneyGram</p>
                            <p className='text-[10px]'>WesternUnion</p>
                        </div>
                    </div>
                    <div className='bg-[#131313] p-2 py-4 w-[100%] md:w-[40%] flex flex-col gap-2 mt-5 rounded-md'>
                        <h2 className='text-xs'>Packages</h2>
                        <div className='h-[1px] w-full bg-gray-100' />
                        <p className='text-[10px]'>Reservation: Regular 580 (split $300)</p>
                        <p className='text-[10px]'>VIP: $1150</p>
                        <p className='text-[10px]'>Membership: $1650</p>
                    </div>
                </div>

                <div className='py-10 max-w-5xl mx-auto'>
                    <h1 className='text-xl md:text-3xl text-center'>Leather Love: Uncover the allure of <br /> <span className='text-[#4A36EC]'>fetish wear</span> and <span className='text-[#4A36EC]'>leather play</span></h1>
                    <div className='md:border-t md:border-gray-400 pt-5 md:w-[20%] mt-16'>
                        <h2 className='text-center'>Please fill the contact <br className='hidden md:flex' /> form</h2>
                        <p className='text-[10px] text-gray-500 text-center'>Enter the details provided below and we will contact you shortly</p>
                    </div>

                    <div className='px-2 text-[10px] flex flex-col md:flex-row justify-between gap-5 pt-10'>
                        <div className='flex-1'>
                            <p>FIRST NAME</p>
                            <div className='bg-[#131313] p-2 rounded-md border border-[#131313]'>
                                <input type="text" placeholder='Enter your first name' className='border-none outline-none bg-transparent w-full' />
                            </div>
                        </div>

                        <div className='flex-1'>
                            <p>LAST NAME</p>
                            <div className='bg-[#131313] p-2 rounded-md border border-[#131313]'>
                                <input type="text" placeholder='Enter your last name' className='border-none outline-none bg-transparent w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='px-2 text-[10px] flex flex-col md:flex-row md:justify-between gap-5 pt-10'>
                        <div className='flex-1'>
                            <p>EMAIL</p>
                            <div className='bg-[#131313] p-2 rounded-md border border-[#131313]'>
                                <input type="text" placeholder='Enter your email' className='border-none outline-none bg-transparent w-full' />
                            </div>
                        </div>

                        <div className='flex-1'>
                            <p>MESSAGE</p>
                            <div className='bg-[#131313] p-2 rounded-md border border-[#131313]'>
                                <textarea cols={30} rows={3}  placeholder='Enter your message' className='border-none outline-none bg-transparent w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-10'>
                        <button type='button' className='p-2 text-white bg-[#4A36EC] text-xs rounded-md px-5'>SUBMIT</button>
                    </div>                
                    </div>
            </div>
        </div>
    )
}

export default Contact
