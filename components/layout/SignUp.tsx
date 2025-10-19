
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import google from '@/public/images/icons/Google.png'
import Link from 'next/link'
import { Mail } from 'lucide-react';
import { EyeClosed } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from 'lucide-react';



type formFields = {
    username: string;
    email: string;
    password: string;
}


export default function SignUp() {
    const [isPswrdHidden, setPswrdHidden] = useState(true)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<formFields>();
    const onsubmit: SubmitHandler<formFields> = data => console.log(data);
    console.log(watch("username")) // watch input value by passing the name of it


    return (
        <>



            {/* Login Form */}
            <form onSubmit={handleSubmit(onsubmit)} className='space-y-4'>
                {/* username input */}
                <div>
                    <div className='flex items-center relative'>
                        <input
                            {...register("username", { required: "Username is required", maxLength: { value: 10, message: "username is too long" }, minLength: { value: 4, message: "username must be atleast 4 characters" } })}
                            type='text'
                            placeholder='Enter your username'
                            className='w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 '
                        />
                        <User className='absolute right-4 opacity-45 ' />

                    </div>
                    {errors.username && <p className='text-xs text-red-500 p-1'>{errors.username.message}</p>}
                </div>


                {/* email input */}
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

                    {/* password input */}
                    <div>
                        <div className='flex items-center relative'>
                            <input
                                {...register("password", { required: "password is required", maxLength: { value: 9, message: "password must be exactlt 9 characters" }, minLength: { value: 9, message: "password must be exactly 9 characters" } })}
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
                        Sign Up
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
                <span className='text-sm  text-center'>Already have an account? <Link className='text-blue-400 font-bold' href={'/auth/sign-in'}>Sign-in here!</Link></span>

            </div>

        </>
    )
}
