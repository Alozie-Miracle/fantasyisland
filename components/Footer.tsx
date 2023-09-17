import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className='bg-black py-10 px-5'>
            <p className='text-xs text-center text-[#4A36EC]'>CONTACT</p>
            <h2 className='text-white text-center'>Contact Information</h2>
            <p className='text-[10px] text-gray-400 text-center'>You can contact us using our contact information through the following mediums</p>

            <div className='flex flex-col md:flex-row justify-between md:px-10 px-2 text-[10px] text-white md:mt-5 gap-2 max-w-7xl mx-auto pt-5'>
                <p>WhatsApp UK : <span className='text-[#4A36EC]'>+44 7529418982</span></p>
                <p>WhatsApp Canada: <span className='text-[#4A36EC]'>+1 5812790030</span></p>
                <p>Text or Calls: <span className='text-[#4A36EC]'>+97 07036595</span></p>
                <p>Gmail: <span className='text-[#4A36EC]'>official1fantasyisland@gmail.com</span></p>
            </div>
        </div>
    )
}

export default Footer
