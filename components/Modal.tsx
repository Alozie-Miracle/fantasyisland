'use client'
import { PaperAirplaneIcon, XCircleIcon } from '@heroicons/react/24/outline'
import React, {useState, useEffect} from 'react'

import hand from '@/assets/mdi_hand-wave.png'
import headset from '@/assets/ri_customer-service-2-fill.png'
import Image from 'next/image'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/constants/firebase'

type Props = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    setChatInit: React.Dispatch<React.SetStateAction<boolean>>;
    setChatId: React.Dispatch<React.SetStateAction<string>>;
}

interface Chat {
    id: string;
    userId: string;
    title: string;
    read: false;
}

const Modal = ({setToggle, setChatInit, setChatId}: Props) => {
    const [title, setTitle] = useState('')
    const [chatTitle, setChatTitle] = useState<Chat[]>([])
    const [selectTitle, setSelectTitle] = useState('')
    const uid = localStorage.getItem('uid')

    useEffect(() => {
        const getChat = async () => {
            const querySnapshot = await getDocs(collection(db, "chats"));
            const fetchedChats: Chat[] = [];

            querySnapshot.forEach((doc) => {
                fetchedChats.push({
                    id: doc.id,
                    userId: doc.data().userId,
                    title: doc.data().title,
                    read: doc.data()?.read
                });
            });

            const chattitle = fetchedChats.filter((title: any) => {
                return title.userId === uid;
            });

            setChatTitle(chattitle);
            console.log(fetchedChats);
            
        };

        getChat();
    }, []);

    useEffect(() => {
        if(selectTitle){
            setChatInit(true);
            setChatId(selectTitle)
        }
    }, [selectTitle])

    const addchat = async () => {
        const uid = localStorage.getItem('uid')
        if (title.length === 0) return;
        await addDoc(collection(db, "chats"), {
        title: title,
        userId: uid,
        read: false,
        })
        .then(() => {
            setChatInit(true);
        })
        .catch((error) => alert(error.message));
    };


  return (
    <div className='text-white w-[330px]'>
        <div className='px-2 py-3 flex items-center justify-between text-xs bg-[#333333] rounded-t-md w-full'>
            <p>Chat with us <span className='text-[#4A36EC]'>@Fantasy Island</span></p>
            <XCircleIcon className='text-white h-5 w-5 cursor-pointer' onClick={()=> setToggle(false)} />
        </div>

        <div className='pt-2 pb-2 bg-[#0C0C0C] px-3'>
            <div className='flex items-center gap-3 '>
                <h2>Welcome </h2>
                <Image src={hand} alt='hand wave' className='h-6 w-6' />
            </div>
            <p className='text-[10px] pt-2'>Need help or assistance?, we would love to hear from you. Click on new conversation or continue previous conversation</p>
        </div>

        <div className='bg-[#FFFFFF] p-3 rounded-b-md text-black'>
            <p className='text-[10px]'>Conversations</p>

            <div className='p-2 bg-[#EDEBEB] flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='bg-black rounded-md p-2 w-10 flex items-center justify-center'>
                        <Image src={headset} alt='headset' className='h-5 w-5' />
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xs'>Need help with gags</h2>
                            <p className='text-gray-400 text-[8px]'>25th August, 12:45am</p>
                        </div>
                        <p className='text-[8px] text-gray-400'>Sit amet consectetur. Et ac nullam risus nisi orci vivamus</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-black rounded-md p-2 w-10 flex items-center justify-center'>
                        <Image src={headset} alt='headset' className='h-5 w-5' />
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xs'>Cannot send email</h2>
                            <p className='text-gray-400 text-[8px]'>07th September, 01:20pm</p>
                        </div>
                        <p className='text-[8px] text-gray-400'>Lorem ipsum dolor sit amet consectetur. Et ac nullam risu nisi orci vivamus</p>
                    </div>
                </div>
            </div>
            {chatTitle.length > 0 ? (
                <select value={selectTitle} onChange={e => setSelectTitle(e.target.value)} aria-label="Sorting Options" className='p-2 w-full border-none text-xs cursor-pointer'>
                    <option value="">Select chat title</option>
                        {chatTitle.map((title) => (
                            <option key={title?.id} value={title?.id}>{title?.title}</option>
                        ))}
                    </select>
            ): (
                <div className='text-[10px] mt-5 border border-gray-500 p-2'>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='bg-transparent flex-1 outline-none border-none' type="text" placeholder='Re: Enter Title' />
                </div>
            )}
            <div className='p-2 px-3  bg-black rounded-md text-xs flex items-center justify-between text-white mt-5 cursor-pointer' onClick={ addchat}>
                <p>Start New Conversation</p>
                <PaperAirplaneIcon className='text-white h-5 w-5' />
            </div>
        </div>

    </div>
  )
}

export default Modal