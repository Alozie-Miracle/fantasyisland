
import { PaperAirplaneIcon, XCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

import hand from '@/assets/mdi_hand-wave.png'
import headset from '@/assets/ri_customer-service-2-fill.png'
import Image from 'next/image'

type Props = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    setChatInit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({setToggle, setChatInit}: Props) => {
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
            <div className='p-2 px-3  bg-black rounded-md text-xs flex items-center justify-between text-white mt-5 cursor-pointer' onClick={() => {
                setChatInit(true);
            }}>
                <p>Start New Conversation</p>
                <PaperAirplaneIcon className='text-white h-5 w-5' />
            </div>
        </div>

    </div>
  )
}

export default Modal