

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import google from '@/public/images/icons/Google.png'
import Link from 'next/link'
import { Mail } from 'lucide-react';
import { EyeClosed } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form"

type formFields = {
    email: string;
    password: string;
}



export default function SignIn() {
    const [isPswrdHidden, setPswrdHidden] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<formFields>();
    const onsubmit: SubmitHandler<formFields> = data => console.log(data);

    return (
        <>
            {/* Login Form */}
            <form onSubmit={handleSubmit(onsubmit)} className='space-y-4'>

                <div>
                    <div className='flex items-center relative'>
                        <input
                            {...register("email", { required: "Email Address is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                            type='email'
                            placeholder='Enter your email'
                            className='w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 '
                        />
                        <Mail className='absolute right-4 opacity-45 ' />
                    </div>
                    {errors.email && <p className='text-xs text-red-500 p-1'>{errors.email.message}</p>}
                </div>
                <div >
                    <div>
                        <div className='flex items-center relative'>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type={isPswrdHidden ? "password" : "text"}
                                placeholder='Enter your password'
                                className='w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                            />
                            {
                                !isPswrdHidden ?
                                    <Eye onClick={() => setPswrdHidden(true)} className='absolute right-4 opacity-45 cursor-pointer' /> :
                                    <EyeClosed onClick={() => setPswrdHidden(false)} className='absolute right-4 opacity-45 cursor-pointer' />
                            }
                        </div>
                        {errors.password && <p className='text-xs text-red-500 p-1'>{errors.password.message}</p>}
                    </div>
                    <div className='text-right mt-1'>
                        <Link href='#' className='text-xs text-blue-500 hover:underline'>
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition'
                    >
                        Login
                    </button>
                </div>
            </form>

            {/* Divider */}
            <div className='flex items-center my-4'>
                <div className='flex-grow h-px bg-gray-200'></div>
                <span className='px-2 text-sm text-gray-400'>OR</span>
                <div className='flex-grow h-px bg-gray-200'></div>
            </div>

            {/* Social Logins */}
            <div className='flex flex-col gap-3'>
                {/* <button className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 text-sm hover:bg-gray-50 transition'>
                            <img src='/apple-icon.svg' alt='Apple' className='h-4' />
                            Log in with github
                        </button> */}
                <button className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl cursor-pointer py-2 text-sm hover:bg-gray-50 transition'>
                    <Image src={google} width={22} height={22} alt='Google' className='h-4' />
                    Log in with Google
                </button>
                <span className='text-sm  text-center'>Don't have an account? <Link className='text-blue-400 font-bold' href={'/auth/sign-up'}>Create one here!</Link></span>

            </div>

        </>
    )
}
