import Image from "next/image";
import React from 'react'
import { Poppins } from "next/font/google";
import SlideUpAnimation from "../ui/SlideUpAnimation";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],

})


export default function HomeFeatures() {
    return (
        <>
            <section className=" flex md:w-11/12 md:m-auto md:flex-row flex-col items-center md:mt-30 mt-14 md:gap-20 gap-6 justify-center mb-20 lg:border lg:my-66 lg:py-20 border-gray-200/10 p-6 rounded-3xl bg-gray-300/50 shadow-lg">

                <SlideUpAnimation
                    className="w-11/12 mx-auto flex justify-center"
                >
                    {/* <Image
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/index/april-2025-launch/feature-highlight/pv-feature2-1280x800.png?id=d0e99d43-f243-4a0c-83b9-b7840b017288&width=1280&output_type=webp"
                        width={600}
                        height={600}
                        alt="preview image"
                        className="rounded-2xl shadow-lg"
                    /> */}
                    <video
                        className="w-full max-w-md object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://mega.io/wp-content/uploads/20221223_Mega_Main_5-devices-1.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>

                </SlideUpAnimation>


                <SlideUpAnimation
                    className="w-11/12 flex flex-col gap-4 md:mt-0 mt-6 mb-6 ">
                    <h1 className={`${poppins.className} text-3xl font-bold`}>Boost your efficiency with full control of your files.</h1>
                    <p className="text-sm">Need lots of storage space? No problem. We have a range of competitive plans that go up to <span className="font-bold text-md">10 TB.</span></p>
                    <p className="text-sm">Easily access your cloud files through our desktop app, mobile apps or the web. And, if you sync or back up data from your computer to cloudify, all changes will automatically be replicated in real time, so you’ll be able to see the latest files, no matter where you are.</p>
                    <p className="text-sm">cloudify is the perfect online tool to help you grow your business and your team. Store and protect important documents and transform how your teams collaborate with cloudify.</p>

                </SlideUpAnimation>



            </section >
        </>
    )
}
