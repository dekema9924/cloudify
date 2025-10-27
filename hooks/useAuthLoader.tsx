'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUserProfile, setUserProfile } from '@/lib/client/features/userSlice';
import { getUserProfile } from '@/lib/client/api/authClient';
import { useRouter } from 'next/navigation';

export default function useAuthLoader() {
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUserProfile();
                if (data.user?._id) {
                    dispatch(setUserProfile(data.user));
                }
                else {
                    dispatch(clearUserProfile())
                    router.push('/')
                }

            } catch (error) {
                console.error('Failed to fetch user on load:', error);
            }
        }

        fetchUser();
    }, [dispatch]);
}
