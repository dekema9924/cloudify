
'use client'
import React from 'react'
import MainButton from '../ui/MainButton'
import { Playfair_Display, Poppins } from "next/font/google";


const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],

})




export default function HomeHero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center mt-44 px-6  gap-12">
            {/* Left Text Section */}
            <div className="flex flex-col gap-6 max-w-lg w-full">
                <h1
                    className={`uppercase text-4xl md:text-5xl font-bold leading-tight text-gray-900 ${poppins.className}`}
                >
                    Helpful for <br /> Files and Task Management
                </h1>
                <p className={`text-sm text-gray-600 leading-relaxed ${playfair.className}`}>
                    Efficient file storage and task management, easy and secure access, optimizing productivity and work
                    monitoring, making everything operate seamlessly.
                </p>
                <MainButton
                    text='get started'
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase text-sm py-3 px-6 rounded w-44" />

            </div>

            {/* Right Media Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <video
                    className="w-full max-w-md object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/images/home/hero.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}
