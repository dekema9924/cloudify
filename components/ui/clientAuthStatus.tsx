'use client';
import Link from 'next/link';
import MainButton from './MainButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import useAuthLoader from '@/hooks/useAuthLoader';
import Avatar from './Avatar';

export default function ClientAuthStatus() {
    const user = useSelector((state: RootState) => state.user.value)

    useAuthLoader()

    return (
        <div>
            {user._id ?
                <>
                    <Avatar />

                </>
                :
                <>
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
                </>}
        </div>
    );
}
