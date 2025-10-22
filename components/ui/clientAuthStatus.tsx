// components/ClientAuthStatus.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import MainButton from './MainButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { signOut } from '@/lib/client/api/authClient';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { clearUserProfile } from '@/lib/client/features/userSlice';
import useSignOut from '@/hooks/useSignout';

export default function ClientAuthStatus() {
    const user = useSelector((state: RootState) => state.user.value)
    const [isProfileClicked, setProfileClicked] = useState(false)
    const { handleSignOut } = useSignOut()
    const dispatch = useDispatch()
    const router = useRouter()


    // const HandleSignOut = async () => {

    //     try {
    //         const res = await signOut()

    //         if (res.status === 200) {
    //             toast.success(res.data.message)
    //             dispatch(clearUserProfile())
    //             router.push('/')
    //         }
    //     } catch (err: any) {
    //         console.error(err);
    //         toast.error(err.message);
    //         dispatch(clearUserProfile())

    //         router.push('/')
    //     }
    // }







    return (
        <div>
            {user._id ?
                <>
                    <div onClick={() => { setProfileClicked(!isProfileClicked) }} className="relative md:flex py-6 cursor-pointer  items-center gap-10 hidden md:mr-10  w-13 border border-yellow-400 bg-yellow-300 font-bold h-13 rounded-full justify-center">
                        <span className='text-xl uppercase'>{user.username?.[0]}{user.username?.[user.username.length - 1]}</span>
                        <div className={`flex w-80 flex-col border border-gray-300 justify-center absolute  right-0 transition-all duration-500 top-14 rounded-2xl gap-3 text-xl shadow-xl overflow-hidden ${isProfileClicked ? "h-40 p-5" : "h-0 p-0 border-0"} `}>
                            <p className='capitalize cursor-pointer hover:bg-gray-300 w-full h-full p-2 rounded-2xl transition-all duration-500'>{user.username}</p>
                            <Link className='hover:bg-gray-300 w-full h-full p-2 rounded-2xl transition-all duration-500' href={'/profile'}>My Account</Link>
                            <span onClick={() => handleSignOut()} className='hover:bg-red-300 w-full h-full p-2 rounded-2xl transition-all duration-500'>Logout</span>
                        </div>
                    </div>

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
