'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from "motion/react"
import Logo from '@/components/layout/Logo'
import formbg from '@/public/images/bg/formbg.jpg'
import pagebg from '@/public/images/bg/pagebg.jpg'
import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <>
            <header className='bg-white hidden  z-60 fixed w-full shadow-md h-18 md:flex items-center px-6  '>
                <Link href={'/'}>
                    <div className="absolute top-4 left-4 ">
                        <Logo />
                    </div>
                </Link>
            </header>
            <div
                style={{
                    backgroundImage: `url(${pagebg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="flex  justify-center items-center min-h-screen w-full md:px-4"
            >
                <div className="flex md:w-full w-11/12 md:max-w-5xl rounded-3xl overflow-hidden flex-col md:flex-row shadow-2xl bg-white">

                    {/* Left section (Form) */}
                    <div className="md:w-1/2 md:p-10 p-5 flex flex-col justify-center bg-white relative">
                        <Link href={'/'} className="mb-8 inline-block md:hidden">
                            <Logo />
                        </Link>

                        <h1 className="text-2xl font-semibold mb-2 leading-6">
                            {pathname === '/auth/sign-up' ? 'Create a new Cloudify Account' : 'Welcome Back!'}
                        </h1>
                        <p className="text-gray-500 my-2 text-sm">
                            {pathname === '/auth/sign-up'
                                ? 'Use your Cloudify Account to upload and manage files.'
                                : 'We are happy to see you again.'}
                        </p>

                        {/* Toggle Buttons */}
                        <div className="flex border rounded-full overflow-hidden mb-6">
                            <button
                                onClick={() => router.push('/auth/sign-in')}
                                className={`w-1/2 py-2 text-sm font-semibold transition-colors ${pathname === '/auth/sign-in'
                                    ? 'bg-blue-500 text-white'
                                    : 'hover:bg-gray-100 text-gray-600'
                                    }`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => router.push('/auth/sign-up')}
                                className={`w-1/2 py-2 text-sm font-semibold transition-colors ${pathname === '/auth/sign-up'
                                    ? 'bg-blue-500 text-white'
                                    : 'hover:bg-gray-100 text-gray-600'
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Animated form area */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={pathname} // triggers re-animation when route changes
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                >
                                    {children}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Section (Background) */}
                    <div className="md:w-1/2 relative hidden md:block">
                        <Image
                            src={formbg}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-4 left-4 text-x">
                            © 2025 Cloudify. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
