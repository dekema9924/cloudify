
import PricingSection from '@/components/sections/PricingSection'
import MainButton from '@/components/ui/MainButton'
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import Faq from '@/components/layout/Faq'


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function page() {
    return (
        <div>

            <PricingSection />
            <div>
                <h1 className={` font-bold text-center text-4xl ${poppins.className}`}>Free trial with limited uploads</h1>
                <div className=' bg-gray-100 shadow-2xl border border-gray-300
                00 rounded-2xl p-4 md:w-8/12 m-auto w-11/12 my-4 flex flex-col gap-4'>
                    <p className='font-semibold text-2xl'> Basic, at no cost</p>
                    <p className='w-10/12 text-sm'>Get started with a free trial that includes limited uploads to experience our cloud storage solution.</p>
                    <p>Already have an account? <Link href={'/auth/sign-in'}><span className='text-blue-500 font-bold'>Log in</span></Link></p>
                    <MainButton
                        text='Create an account'
                        className='bg-gray-400 w-44 h-12 font-semibold uppercase text-sm'
                    />
                </div>
            </div>

            <Faq />
        </div>
    )
}
