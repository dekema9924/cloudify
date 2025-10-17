
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';

function MobileNav() {
    const [isNavOpen, setIsNavopen] = useState(false)

    return (
        <>

            <Menu onClick={() => { setIsNavopen(true) }} className=" md:hidden mr-5 md:mr-0" />
            <div className={`md:hidden absolute transition-all duration-500 bg-black text-white flex items-center flex-col justify-center  overflow-hidden w-screen h-screen  ${isNavOpen ? "top-0  " : "-top-[1500px]"}`}>
                <X onClick={() => { setIsNavopen(false) }} className='text-white absolute top-10 right-10 cusor-pointer ' />

                <nav className='flex  flex-col  gap-10 items-center justify-center '>
                    <ul className="flex gap-10 items-center flex-col ">
                        <Link href={''}>About</Link>
                        <Link href={''}>Service</Link>
                        <Link href={''}>Product</Link>
                        <Link href={''}>Pricing</Link>
                    </ul>

                    <div className="flex items-center gap-3  ">
                        <button className="bg-white text-black text-sm w-24 h-9 rounded-3xl font-semibold border cursor-pointer">Login</button>
                        <button className="bg-black text-white text-sm w-24 h-9 rounded-3xl font-semibold cursor-pointer ">Register</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MobileNav
