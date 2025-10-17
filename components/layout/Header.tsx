import Image from "next/image"
import coin from '@/public/images/icons/coin.png'
import { Coiny } from "next/font/google"


export default function Header() {
    return (
        <>
            <header className="flex justify-between mt-7 h-20">
                {/* logo */}
                <div className="flex ml-10 items-center gap-1">
                    <Image
                        src={coin}
                        width={44}
                        height={44}
                        alt="gold-coin"
                    />
                    <h1 className="flex font-bold uppercase">Cloudify</h1>
                </div>

                {/* nav links */}
                <nav className="flex mr-10  gap-10 ">
                    <ul className="flex gap-10 items-center  ">
                        <li>About</li>
                        <li>Service</li>
                        <li>Product</li>
                        <li>Pricing</li>
                    </ul>

                    <div className="flex items-center gap-3 ">
                        <button className="bg-white text-black text-sm w-24 h-9 rounded-3xl font-semibold border cursor-pointer">Login</button>
                        <button className="bg-black text-white text-sm w-24 h-9 rounded-3xl font-semibold cursor-pointer ">Register</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
