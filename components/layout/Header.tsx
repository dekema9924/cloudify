
import Link from "next/link";
import MobileNav from "@/components/layout/MobileNav";
import MainButton from "../ui/MainButton";
import Logo from "./Logo";



export default function Header() {
    return (
        <>
            <header className="flex justify-between md:mt-7 h-20  relative  items-center ">
                {/* logo */}
                <Link className="md:ml-10" href={'/'} >
                    <Logo />
                </Link>

                {/* nav links */}
                <nav className="md:flex  items-center gap-10 hidden md:mr-10 ">
                    <ul className="flex gap-10 items-center  ">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                    </ul>

                    <div className="flex items-center gap-3 ">
                        <Link href={'/auth/sign-in'}>
                            <MainButton
                                text="Login"
                                className="w-24 h-9 bg-white text-black border hover:bg-gray-100 text-sm font-semibold  "
                            />
                        </Link>
                        <Link href={'/auth/sign-up'}>
                            <MainButton
                                text="Register"
                                className="w-24 h-9 bg-black text-white  hover:bg-gray-600 text-sm font-semibold"
                            />
                        </Link>
                    </div>
                </nav>


                {/* mobile nav */}
                <MobileNav />
            </header>
        </>
    )
}
