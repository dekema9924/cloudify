import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
    return (
        <footer className="bg-[#1f2225] text-gray-400 py-10 px-6 border-t ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Section — Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Logo />
                    <p className="text-sm text-gray-500 mt-2">
                        Secure. Fast. Reliable cloud storage for everyone.
                    </p>
                </div>

                {/* Center — Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/features" className="hover:text-white transition">Features</Link>
                    <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
                    <Link href="/about" className="hover:text-white transition">About</Link>
                    <Link href="/support" className="hover:text-white transition">Support</Link>
                </div>

                {/* Right Section — Socials */}
                <div className="flex items-center gap-4">
                    <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M22.46 6.01c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.37 8.34 8.34 0 01-2.69 1.03 4.22 4.22 0 00-7.18 3.85A12 12 0 013 4.67a4.22 4.22 0 001.31 5.63 4.14 4.14 0 01-1.91-.53v.05a4.23 4.23 0 003.39 4.14 4.3 4.3 0 01-1.9.07 4.23 4.23 0 003.94 2.93A8.48 8.48 0 012 19.54a12 12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56a8.4 8.4 0 002.1-2.13z" />
                        </svg>
                    </Link>

                    <Link href="https://github.com" aria-label="GitHub" className="hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.12-1.48c-.91-.62.07-.61.07-.61a2.11 2.11 0 011.53 1 2.15 2.15 0 002.93.84 2.14 2.14 0 01.64-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 011.03-2.67 3.59 3.59 0 01.1-2.63s.84-.27 2.75 1.02a9.38 9.38 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02a3.59 3.59 0 01.1 2.63 3.86 3.86 0 011.03 2.67c0 3.84-2.35 4.68-4.59 4.93a2.38 2.38 0 01.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="text-center text-xs text-gray-600 mt-10">
                © {new Date().getFullYear()} Cloudify. All rights reserved.
            </div>
        </footer>
    )
}
