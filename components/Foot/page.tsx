import React from 'react'

export default function Foot() {
  return (
    <div className='bg-[#000000] py-[20px]  '>
        <div className='text-center mb-[40px] md:mb-[60px] '>
            <p className='text-[#4A36EC] text-[14px] font-600  '>Contact</p>
            <p className='text-[#FFFFFF] text-[32px] font-600 '>Contact Information</p>
            <p className='text-[#FFFFFF] text-[14px] '>You can contact us using our contact information through the following mediums</p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-around items-center justify-center '>
            {/* <p>WhatsApp UK: <span className='text-[#4A36EC]'>+447529418982</span></p>
            <p>WhatsApp Canada: <span className='text-[#4A36EC]'>+1 581 279 0030</span></p> */}
            {/* <p>Text or Calls: <span className='text-[#4A36EC]'>+97 0703 6595</span></p> */}
            <p>Email: <a href="mailto:official1fantasyisland@gmail.com" className='text-[#4A36EC]'>official1fantasyisland@gmail.com</a></p>
        </div>
    </div>
  )
}
