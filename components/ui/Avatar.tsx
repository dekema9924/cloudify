'use client'

import { RootState } from '@/store/store'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useState } from 'react'
import useSignOut from '@/hooks/useSignout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Avatar() {
    const user = useSelector((state: RootState) => state.user.value)
    const [isProfileClicked, setProfileClicked] = useState(false)
    const { handleSignOut } = useSignOut()
    const pathname = usePathname()
    const profileRef = useRef<HTMLDivElement | null>(null);



    const resetProfileClicked = () => {
        setProfileClicked(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            const targetNode = event.target as Node | null;
            if (profileRef.current && targetNode && !profileRef.current.contains(targetNode)) {
                resetProfileClicked();
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);



    return (
        <>
            <div ref={profileRef} onClick={() => { setProfileClicked(!isProfileClicked) }} className=' relative cursor-pointer  md:flex items-center gap-10 hidden md:mr-10  w-13 h-13 text-black  font-bold  rounded-full justify-center'>
                {


                    user?.profileImage ? <Image
                        src={user?.profileImage}
                        width={150}
                        height={150}
                        alt='avatar'
                        className='rounded-full h-14 w-14 object-cover'
                    /> : <span className='text-xl uppercase bg-yellow-400 flex items-center justify-center w-full h-12 rounded-full '>{user.username?.[0]}{user.username?.[user.username.length - 1]}</span>

                }
                <div className={`flex w-80 flex-col z-50 bg-white border border-gray-300 justify-center absolute  right-0 transition-all duration-500 top-14 rounded-2xl gap-1 text-xl shadow-xl overflow-hidden ${isProfileClicked ? "h-55 p-4 pb-9" : "h-0 p-0 border-0"} `}>
                    <p className='capitalize w-full h-full p-2 rounded-2xl transition-all duration-500'>{user.username}</p>
                    <hr className=' border-gray-300 border-t-1 w-11/12 m-auto' />
                    <Link className='hover:bg-gray-300 w-full h-full p-2 rounded-2xl transition-all duration-500' href={'/profile'}>My Account</Link>
                    {
                        pathname !== '/dashboard' ?
                            <Link className='hover:bg-green-300 w-full h-full p-2 rounded-2xl transition-all duration-500' href={'/dashboard'}>
                                Dashboard
                            </Link>
                            :
                            <Link className='hover:bg-green-300 w-full h-full p-2 rounded-2xl transition-all duration-500' href={'/'}>
                                Home
                            </Link>
                    }
                    <span onClick={() => handleSignOut()} className='hover:bg-red-300 w-full h-full p-2 rounded-2xl transition-all duration-500'>Logout</span>
                </div>

            </div>
        </>
    )
}
