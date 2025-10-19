

import React from 'react'
import coin from '@/public/images/icons/coin.png'
import { Coiny } from "next/font/google"
import Image from 'next/image';




// logo font
const coiny = Coiny({
    weight: "400",
    subsets: ["latin"],
});

export default function Logo() {
    return (
        <>
            <div className="flex items-center gap-1 ml-5 md:ml-0">
                <Image
                    src={coin}
                    width={44}
                    height={44}
                    alt="gold-coin"
                />
                <h1 className={`${coiny.className} flex font-bold uppercase text-lg`} >Cloudify</h1>
            </div>
        </>
    )
}
