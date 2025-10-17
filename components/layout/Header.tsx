import Image from "next/image"
import coin from '@/public/images/icons/coin.png'
import { Coiny } from "next/font/google"
import Link from "next/link";
import MobileNav from "@/components/layout/MobileNav";




// logo font
const coiny = Coiny({
    weight: "400",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <>
            <header className="flex justify-between md:mt-7 h-20  relative  items-center ">
                {/* logo */}
                <div className="flex items-center gap-1 ml-5 md:ml-0">
                    <Image
                        src={coin}
                        width={44}
                        height={44}
                        alt="gold-coin"
                    />
                    <h1 className={`${coiny.className} flex font-bold uppercase text-lg`} >Cloudify</h1>
                </div>

                {/* nav links */}
                <nav className="md:flex  items-center gap-10 hidden ">
                    <ul className="flex gap-10 items-center  ">
                        <Link href={''}>About</Link>
                        <Link href={''}>Service</Link>
                        <Link href={''}>Product</Link>
                        <Link href={''}>Pricing</Link>
                    </ul>

                    <div className="flex items-center gap-3 ">
                        <button className="bg-white text-black text-sm w-24 h-9 rounded-3xl font-semibold border cursor-pointer">Login</button>
                        <button className="bg-black text-white text-sm w-24 h-9 rounded-3xl font-semibold cursor-pointer ">Register</button>
                    </div>
                </nav>


                {/* mobile nav */}
                <MobileNav />
            </header>
        </>
    )
}
