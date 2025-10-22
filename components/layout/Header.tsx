
import Link from "next/link";
import MobileNav from "@/components/layout/MobileNav";
import Logo from "./Logo";
import ClientAuthStatus from "../ui/clientAuthStatus";



export default function Header() {
    return (
        <>
            <header className="flex justify-between  h-20  relative  items-center ">
                {/* logo */}
                <Link className="md:ml-10" href={'/'} >
                    <Logo />
                </Link>

                {/* nav links */}

                {
                    <ClientAuthStatus />
                }



                {/* mobile nav */}
                <MobileNav />
            </header>
        </>
    )
}
