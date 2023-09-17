'use client'
import React, { useState } from 'react'
import girl from '@/assets/girl.jpg'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import chat from '@/assets/cryptocurrency_chat.png'
import Modal from './Modal'
import Chats from './Chats'
interface Props {
    
}

const Hero = (props: Props) => {

    const [toggle, setToggle] = useState(false)
    const [chatInit, setChatInit] = useState(false)


    const autoScrolll = () => {
        const height = window.innerHeight
        

        window.scrollTo({
            behavior: 'smooth',
            top: height
        })
        
    }

    return (
        <div className='h-screen relative top-0'>
            <Image src={girl} alt='banner' className='w-full h-full' />
            <div className='absolute z-10 top-0 w-full h-full'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div className='flex flex-col h-[80%] items-center justify-between'>
                        <div className='flex flex-col h-[80%] items-center'>
                            <div className='flex items-center gap-5 text-white text-sm'>
                                <p className=''>luxury</p>
                                <StarIcon className='h-3 w-3 text-[#4A36EC]' />
                                <p>Discreet</p>
                                <StarIcon className='h-3 w-3 text-[#4A36EC]' />
                                <p>Sensual</p>
                                <StarIcon className='h-3 w-3 text-[#4A36EC]' />
                                <p>Realistic</p>
                            </div>
                            <h2 className='text-white text-center text-7xl mt-10 flex flex-col gap-2'><span>Welcome to a world</span> 
                                <span className='mt-5'> of boundless 
                                <span className='text-[#4A36EC]'> desires.</span>
                                </span> 
                            </h2>

                            <button type='button' className='text-white text-xs bg-[#4A36EC] p-2 px-3 mt-10'>Contact us</button>
                        </div>

                        <div className='flex flex-col gap-5 items-center'>
                            <p className='text-white text-xs'>Scroll down</p>
                            <ArrowDownIcon className='h-5 w-5 text-white animate-bounce cursor-pointer' onClick={autoScrolll} />
                        </div>
                    </div>

                    

                </div>

            </div>

            <div className='absolute bottom-48 right-10 z-30'>

                {chatInit ? (
                    <Chats setChatInit={setChatInit} />
                ): (
                    <>
                        {toggle && (
                    <Modal setToggle={setToggle} setChatInit={setChatInit} />
                )}
                    </>
                )}
            </div>

            <div className='absolute bottom-24 right-10 z-30'>
                <Image src={chat} alt='chat' className='text-white cursor-pointer' onClick={()=> setToggle(!toggle)} />
            </div>
        </div>
    )
}

export default Hero
