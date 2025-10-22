
'use client';

import { signOut } from "@/lib/client/api/authClient";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearUserProfile } from "@/lib/client/features/userSlice";
import { useRouter } from "next/navigation";

export default function useSignOut() {
    const dispatch = useDispatch();
    const router = useRouter();

    async function handleSignOut() {
        try {
            const res = await signOut();

            if (res.status === 200) {
                toast.success(res.data.message);
                dispatch(clearUserProfile());
                router.push('/');
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err.message);
            dispatch(clearUserProfile());
            router.push('/');
        }
    }

    return { handleSignOut };
}

