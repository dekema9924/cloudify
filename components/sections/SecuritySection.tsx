'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, easeOut } from 'framer-motion'
import Image from 'next/image'
import MainButton from '../ui/MainButton'
import folder from '@/public/images/home/folder.jpg'

export default function SecuritySection() {
    const ref = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 90%', 'end 10%'],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    const y1 = useTransform(scrollYProgress, [0, 1], [30, -10])
    const y2 = useTransform(scrollYProgress, [0, 1], [10, -20])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -30])

    return (
        <motion.section
            ref={ref}
            style={{
                scale,
                opacity,
                transition: 'transform 0.4s ease-out',
            }}
            className="relative flex flex-col m-auto items-center justify-center min-h-[65vh] bg-gradient-to-b from-[#000000] to-[#abaeb3] text-white px-6 py-20 overflow-hidden rounded-3xl"
        >
            {/* Text */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 max-w-2xl text-center mb-10"
            >
                <div className="text-3xl md:text-4xl font-semibold mb-4">
                    Security never comes second
                </div>
                <p className="text-gray-400 mb-8">
                    From industry-leading encryption and tamper-proof documents to version
                    history and recovery, Cloudify keeps your intellectual property safe.
                </p>

                <div className="flex justify-center gap-4">

                    <MainButton
                        className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition"
                        text="                        Get started free">
                    </MainButton>
                    <MainButton
                        className="border border-white/40 text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                        text="Learn more →
">
                    </MainButton>

                </div>
            </motion.div>

            {/* Image stack container */}
            <div className="relative w-full max-w-4xl flex items-center justify-center z-10">
                {/* Back layer */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute left-0 top-1/4 w-48 md:w-64 rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=webp"
                        alt="back"
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Middle layer */}
                <motion.div
                    style={{ y: y2 }}
                    className="absolute left-1/4 top-12 md:left-32 w-64 md:w-80 rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=webp"
                        alt="middle"
                        width={420}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Front / main card */}
                <motion.div
                    style={{ y: y3 }}
                    className="relative w-[85%] sm:w-[70%] md:w-[62%] lg:w-[45%] rounded-xl overflow-hidden shadow-2xl bg-white"
                >
                    <Image
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=webp"
                        alt="front"
                        width={520}
                        height={360}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-0" />
        </motion.section>
    )
}
