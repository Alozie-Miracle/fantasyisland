'use client'
import React, { useState } from 'react'
import girl from '@/assets/girl.jpg'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import chat from '@/assets/cryptocurrency_chat.png'
import Modal from './Modal'
import Chats from './Chats'
import Link from 'next/link'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '@/constants/firebase'
interface Props {
    
}

const Hero = (props: Props) => {

    const [toggle, setToggle] = useState(false)
    const [chatInit, setChatInit] = useState(false)
    const [chatId, setChatId] = useState('')

    const autoScrolll = () => {
        const height = window.innerHeight
        

        window.scrollTo({
            behavior: 'smooth',
            top: height
        })
        
    }

    const handleClick =  () => {
        const uid = localStorage.getItem('uid')
        
        
        if (uid === null) {
            window.location.assign('/login')
            console.log(uid);
        }
        else {
            
            localStorage.setItem('uid', uid)
            setToggle(!toggle)
            
        }
    }

    return (
        <div className={`h-screen relative top-0 bg-cover bg-center bg-no-repeat bg-[url('/img/girl.jpg')]`}
        >
            {/* <Image src={girl} alt='banner' className='w-full h-full' /> */}
            <div className='absolute z-10 top-0 w-full h-full'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div className='flex flex-col h-[80%] items-center justify-between'>
                        <div className='flex flex-col h-[80%] items-center'>
                            <div className='flex items-center gap-3 md:gap-5 text-white text-sm'>
                                <p className=''>luxury</p>
                                <StarIcon className='h-3 w-3 text-[#4A36EC]' />
                                <p>Discreet</p>
                                <StarIcon className='h-3 w-3 text-[#4A36EC]' />
                                <p>Sensual</p>
                                <StarIcon className='h-3 w-3 text-[#4A36EC]' />
                                <p>Realistic</p>
                            </div>
                            <div className='h-full w-full flex flex-col items-center justify-center'>
                                <h2 className='text-white text-center text-5xl md:text-7xl mt-10 flex flex-col gap-2'><span>Welcome to a world</span> 
                                    <span className='mt-5'> of boundless 
                                    <span className='text-[#4A36EC]'> desires.</span>
                                    </span> 
                                </h2>
                                <Link className='text-white text-xs bg-[#4A36EC] p-2 py-3 px-3 mt-10 w-[90%] md:w-[40%] mx-auto text-center' href='/contact'>Contact us</Link>
                            </div>

                            
                        </div>

                        <div className='flex flex-col gap-5 items-center mb-5'>
                            <p className='text-white text-xs'>Scroll down</p>
                            <ArrowDownIcon className='h-5 w-5 text-white animate-bounce cursor-pointer' onClick={autoScrolll} />
                        </div>
                    </div>

                    

                </div>

            </div>

            <div className='fixed bottom-48 md:bottom-32 right-10 z-30'>

                {chatInit ? (
                    <Chats chatId={chatId} setChatId={setChatId} setChatInit={setChatInit} />
                ): (
                    <>
                        {toggle && (
                    <Modal setChatId={setChatId} setToggle={setToggle} setChatInit={setChatInit} />
                )}
                    </>
                )}
            </div>

            <div className='fixed bottom-24 md:bottom-16 right-10 z-30'>
                <Image src={chat} alt='chat' className=' cursor-pointer bg-white rounded-full hover:scale-110 transition-all duration-300 ease-in-out active:scale-95' onClick={handleClick} />
            </div>
        </div>
    )
}

export default Hero
