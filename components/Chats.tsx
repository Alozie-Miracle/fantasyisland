'use client'
import { messages } from '@/constants/messages';
import { ChevronLeftIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import headset from '@/assets/ri_customer-service-2-fill.png'
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { app, db } from '@/constants/firebase';
import { getAuth } from 'firebase/auth';

type Props = {
    setChatInit: React.Dispatch<React.SetStateAction<boolean>>;
    setChatId: React.Dispatch<React.SetStateAction<string>>;
    chatId: string
}


type Message = {
    id: number;
    user: string;
    message: string;
};

const Chats = ({ setChatInit, setChatId, chatId }: Props) => {
    const [chats, setChats] = useState<Message[]>([])
    const [chatTitle, setChatTitle] = useState({})
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // Create a copy of the 'messages' array to avoid modifying the original array
        const chatsArray = [...messages];
        
        // Update the 'chats' state with the data from 'messages'
        setChats(chatsArray);
    }, []);

    useEffect(() => {
        const getChat = async () => {
            const querySnapshot = await getDocs(collection(db, "chats"));
            const fetchedChats: any = [];

            querySnapshot.forEach((doc) => {
                fetchedChats.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            const chattitle = fetchedChats.filter((title: any) => {
                return title.id === chatId;
            });

            setChatTitle(chattitle);
            
        };

        getChat();
    }, [chatId]);

    const fetchMessages = async () => {
        // Fetch messages from the "messages" subcollection of the chat document
        const messagesRef = collection(db, "chats", chatId, "messages");
        const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
        const querySnapshot = await getDocs(messagesQuery);
        const fetchedMessages: any = [];

        querySnapshot.forEach((doc) => {
            fetchedMessages.push({
            id: doc.id,
            ...doc.data(),
            });
        });

        setMessages(fetchedMessages);
        console.log(messages);
        
        };

    useEffect(() => {
        fetchMessages()
    }, [chatId])


    const sendMessage = async () => {
        const auth = getAuth(app)
        

        if (input) {
            const messagesRef = collection(db, "chats", chatId, "messages");

            // Add a new message to the subcollection
            await addDoc(messagesRef, {
                message: input,
                timestamp: serverTimestamp(),
                email: auth?.currentUser?.email,
                user: 'user'
            })
            .then(() => {
                fetchMessages();
            })

            // Clear the input field after sending the message
            setInput("");

            // Scroll to the end of the ScrollView
            //   scrollViewRef.current.scrollToEnd({ animated: true });
        }

    return;
  };



  return (
    <div className='text-white w-[330px]'>
        <div className='px-2 py-3 flex items-center justify-between text-xs bg-[#333333] rounded-t-md w-full'>
            <ChevronLeftIcon className='text-white h-5 w-5 cursor-pointer' onClick={()=> setChatInit(false)} />
            <p className='text-[10px]'>{chatTitle[0]?.title}</p>
            <p className='text-[8px] text-gray-400'>{new Date().getTime()}</p>
        </div>

        <div className='bg-[#FFFFFF]  rounded-b-md text-black h-[60vh] relative'>
            {messages && (
                <div className='text-xs flex flex-col gap-2 px-2 pt-2'>
                    {messages.map((messages) => (
                        <div key={messages.id} className={`${messages.user === 'admin' ? 'justify-start bg-[#EDEBEB] p-2' : 'justify-end' } flex items-center rounded-md gap-2`}>
                            {messages.user === 'admin' && (
                                <div className='bg-black rounded-md p-2 w-10 flex items-center justify-center'>
                                    <Image src={headset} alt='headset' className='h-5 w-5' />
                                </div>
                            )}
                            <p className={`${messages.user === 'admin' ? 'text-left' : 'text-right text-[#4A36EC]'} text-[10px]`} >{messages.message}</p>
                            {messages.user === 'user' && (
                                <div className='bg-[#4A36EC] p-2 rounded-md text-white'><UserIcon className='h-5 w-5' /></div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className='absolute bottom-2 px-2 w-full'>
                {!messages.length && <p className='mt-auto text-[10px] text-center '>No message here yet, enter a title and type your message to start a conversation</p>}

                <div className='flex items-center justify-between w-full bg-[#EDEBEB] py-2 px-2 rounded-md'>
                    <div className='flex-1 border-r border-gray-500 h-4 flex items-center justify-center px-2'>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type here and send message...' className='text-[10px] text-gray-600 w-full outline-none border-none bg-transparent' />
                    </div>
                    <PaperAirplaneIcon onClick={sendMessage} className='text-black h-5 w-5 ml-2 cursor-pointer active:scale-95 transition-all duration-200 ease-in-out ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chats