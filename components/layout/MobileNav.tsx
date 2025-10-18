
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import MainButton from '../ui/MainButton';

function MobileNav() {
    const [isNavOpen, setIsNavopen] = useState(false)

    return (
        <>

            <Menu onClick={() => { setIsNavopen(true) }} className=" md:hidden mr-5 md:mr-0" />
            <div className={`md:hidden absolute transition-all duration-500 bg-black text-white flex items-center flex-col justify-center  overflow-hidden w-screen h-screen  ${isNavOpen ? "top-0  " : "-top-[1500px]"}`}>
                <X onClick={() => { setIsNavopen(false) }} className='text-white absolute top-10 right-10 cusor-pointer ' />

                <nav className='flex  flex-col  gap-10 items-center justify-center '>
                    <ul className="flex gap-10 items-center flex-col ">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/service'}>Service</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                    </ul>

                    <div className="flex items-center gap-3  ">
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
            </div>
        </>
    )
}

export default MobileNav
