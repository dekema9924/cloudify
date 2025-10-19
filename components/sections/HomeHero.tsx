
'use client'
import React from 'react'
import MainButton from '../ui/MainButton'
import { Playfair_Display, Poppins } from "next/font/google";
import SlideUpAnimation from '../ui/SlideUpAnimation';


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
        <section className="flex flex-col md:w-11/12 md:m-auto md:flex-row items-center justify-center md:mt-44 mt-10 px-6  gap-12">
            {/* Left Text Section */}
            <div className="flex flex-col gap-6 max-w-lg w-full">
                <SlideUpAnimation>
                    <h1
                        className={`uppercase text-4xl md:text-5xl font-bold leading-tight text-gray-900 ${poppins.className}`}
                    >
                        Helpful for <br /> Files and Task Management
                    </h1>
                    <p className={`text-sm text-gray-600 my-6  leading-relaxed ${playfair.className}`}>
                        Efficient file storage and task management, easy and secure access, optimizing productivity and work
                        monitoring, making everything operate seamlessly.
                    </p>
                    <MainButton
                        text='get started'
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase text-sm py-3 px-6 rounded w-44" />

                </SlideUpAnimation>

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
                    <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/index/april-2025-launch/hero/dash-multimedia-search-homepage-ui-transparent-1080xauto-v3.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}
