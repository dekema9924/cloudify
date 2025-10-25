

import React from 'react'
import Logo from './Logo'
import Avatar from '../ui/Avatar'
import Link from 'next/link'

export default function Dashboardheader() {
    return (
        <>
            <header className='flex h-22 items-center justify-between shadow-lg w-full'>
                <Link href={'/'} className='ml-10'>
                    <Logo />
                </Link>
                <div>
                    <Avatar />
                </div>
            </header>
        </>
    )
}
