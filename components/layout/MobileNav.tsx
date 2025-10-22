
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import MainButton from '../ui/MainButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import useSignOut from '@/hooks/useSignout';

function MobileNav() {
    const [isNavOpen, setIsNavopen] = useState(false)
    const user = useSelector((state: RootState) => state.user.value)
    const { handleSignOut } = useSignOut()

    return (
        <>

            <Menu onClick={() => { setIsNavopen(true) }} className=" md:hidden mr-5 md:mr-0" />
            <div className={`md:hidden absolute transition-all duration-500 bg-black text-white flex items-center flex-col justify-center  overflow-hidden w-screen h-screen  ${isNavOpen ? "top-0  " : "-top-[1500px]"}`}>
                <X onClick={() => { setIsNavopen(false) }} className='text-white absolute top-10 right-10 cusor-pointer ' />
                <ul className="flex gap-10 items-center flex-col ">
                    <Link onClick={() => setIsNavopen(false)} href={'/'}>Home</Link>
                    <Link onClick={() => setIsNavopen(false)} href={'/pricing'}>Pricing</Link>
                </ul>

                {
                    user._id ?
                        <>
                            <div>
                                <div className='flex items-center gap-2 absolute top-25 left-10'>
                                    <span className=' w-13 h-13 bg-gray-400 rounded-full flex items-center justify-center text-lg font-bold uppercase text-yellow-300'>{user.username?.[0]}{user.username?.[user.username.length - 1]}</span>
                                    <div className=''>
                                        <p className='capitalize font-bold'>{user.username}</p>
                                        <p className='text-gray-300'>{user.email}</p>
                                    </div>

                                </div>
                                <div className='my-4 flex flex-col gap-4'>
                                    <Link className='hover:bg-gray-300 w-full h-full p-2 rounded-2xl transition-all text-center bg-yellow-500 duration-500 font-bold' href={'/profile'}>My Account</Link>
                                    <span onClick={() => { handleSignOut(), setIsNavopen(false) }} className='hover:bg-red-300 w-full h-full text-center  p-2 rounded-2xl bg-red-500 font-bold transition-all duration-500'>Logout</span>
                                </div>

                            </div>

                        </>
                        :
                        <>

                            <nav className='flex  flex-col  gap-10 items-center justify-center '>


                                <div className="flex items-center gap-3 my-10 ">
                                    <Link href={'/auth/sign-in'}>
                                        <MainButton
                                            text="Login"
                                            className="w-24 h-9 bg-white text-black border hover:bg-gray-100 text-sm font-semibold  "
                                        />
                                    </Link>
                                    <Link href={'/auth/sign-up'}>
                                        <MainButton
                                            text="Register"
                                            className="w-24 h-9 bg-black text-white  hover:bg-gray-600 text-sm font-semibold"
                                        />
                                    </Link>

                                </div>
                            </nav>
                        </>
                }
            </div>
        </>
    )
}

export default MobileNav
