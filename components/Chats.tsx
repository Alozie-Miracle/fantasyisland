'use client'
import { messages } from '@/constants/messages';
import { ChevronLeftIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import headset from '@/assets/ri_customer-service-2-fill.png'

type Props = {
    setChatInit: React.Dispatch<React.SetStateAction<boolean>>;
}

type Message = {
    id: number;
    user: string;
    message: string;
};

const Chats = ({ setChatInit }: Props) => {
    const [chats, setChats] = useState<Message[]>([])

    useEffect(() => {
        // Create a copy of the 'messages' array to avoid modifying the original array
        const chatsArray = [...messages];
        
        // Update the 'chats' state with the data from 'messages'
        setChats(chatsArray);
    }, []);


  return (
    <div className='text-white w-[330px]'>
        <div className='px-2 py-3 flex items-center justify-between text-xs bg-[#333333] rounded-t-md w-full'>
            <ChevronLeftIcon className='text-white h-5 w-5 cursor-pointer' onClick={()=> setChatInit(false)} />
            <p className='text-[10px]'>Re: Enter Title</p>
            <p className='text-[8px] text-gray-400'>12:45am</p>
        </div>

        <div className='bg-[#FFFFFF]  rounded-b-md text-black h-[60vh] relative'>
            {chats && (
                <div className='text-xs flex flex-col gap-2 px-2 pt-2'>
                    {chats.map((chat) => (
                        <div key={chat.id} className={`${chat.user === 'admin' ? 'justify-start bg-[#EDEBEB] p-2' : 'justify-end' } flex items-center rounded-md gap-2`}>
                            {chat.user === 'admin' && (
                                <div className='bg-black rounded-md p-2 w-10 flex items-center justify-center'>
                                    <Image src={headset} alt='headset' className='h-5 w-5' />
                                </div>
                            )}
                            <p className={`${chat.user === 'admin' ? 'text-left' : 'text-right text-[#4A36EC]'} text-[10px]`} >{chat.message}</p>
                            {chat.user === 'user' && (
                                <div className='bg-[#4A36EC] p-2 rounded-md text-white'><UserIcon className='h-5 w-5' /></div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className='absolute bottom-2 px-2 w-full'>
                {!chats.length && <p className='mt-auto text-[10px] text-center '>No message here yet, enter a title and type your message to start a conversation</p>}

                <div className='flex items-center justify-between w-full bg-[#EDEBEB] py-2 px-2 rounded-md'>
                    <div className='flex-1 border-r border-gray-500 h-4 flex items-center justify-center px-2'>
                        <input type="text" placeholder='Type here and send message...' className='text-[10px] text-gray-600 w-full outline-none border-none bg-transparent' />
                    </div>
                    <PaperAirplaneIcon className='text-black h-5 w-5 ml-2 cursor-pointer active:scale-95 transition-all duration-200 ease-in-out ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chats