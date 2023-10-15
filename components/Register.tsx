'use client'
'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import logo from '@/assets/Group 2 (1).png'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import {
    createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from '@/constants/firebase'
import Link from 'next/link'

type Props = {
}

const Register = (prop: Props) => {
    const [toggle, settoggle] = useState(false)
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const uid = localStorage.getItem('uid')
    
        if(uid) window.location.assign('/')
    }, [])


  const handleSubmit = () => {
    const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            
            // Signed up 
            const user = userCredential.user;

            if(user.email  !== undefined){
                localStorage.setItem('uid', user.uid)
                window.location.assign('/')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
            
            // ..
        });
  };

  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
        <div className='bg-white shadow-md p-2 rounded-2xl text-black px-5 w-[90%] md:w-[50%] mx-auto'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                <Image src={logo} alt='logo' className='w-10 h-10 object-contain' />
                <p className='text-xs'>Welcome, Register below</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5'>
                <h2 className='font-bold'>Welcome,</h2>
                <p className="text-[10px] text-[#ABABAB]">Please enter your log in details</p>
            </div>

            <div className='w-[90%] md:w-[60%] mx-auto pb-10 pt-5'>
                <p className='text-[10px] font-bold'>Email Address</p>
                <div className='w-full border border-gray-500 rounded-md p-2'>
                    <input value={email} onChange={e => setemail(e.target.value)} type='text' name='email'  placeholder='Enter Your Email Address' className='w-full outline-none border-none bg-transparent text-xs' />
                </div>

                <p className='text-[10px] font-bold mt-5'>Passsword</p>
                <div className='w-full border border-gray-500 rounded-md p-2 flex items-center'>
                    <input type={`${toggle === true ? "text" : 'password'}`} value={password} name='password' onChange={e => setPassword(e.target.value)}  placeholder='Enter Your Passsword' className='w-full outline-none border-none bg-transparent text-xs flex-1' />
                    {toggle ? (
                        <EyeSlashIcon className='h-5 w-5 cursor-pointer' onClick={()=> settoggle(false)} />
                    ): (
                        <EyeIcon className='h-5 w-5 cursor-pointer' onClick={()=> settoggle(true)} />
                    )}
                </div>
                <p className='text-center text-xs py-2'>I have an account, <Link href='/login' className='text-red-500'>login</Link></p>
                <button type='button' className='w-full my-2 rounded-xl bg-[#4A36EC] py-3 text-xs text-white' onClick={handleSubmit}>Register</button>

            </div>
        </div>
    </div>
  )
}

export default Register