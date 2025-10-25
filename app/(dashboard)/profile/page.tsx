'use client';
import { getUserProfile, updateAvatar } from "@/lib/client/api/authClient";
import { setUserProfile } from "@/lib/client/features/userSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Image from "next/image";
import { SquarePen } from 'lucide-react';
import toast from "react-hot-toast";


export interface UserProfile {

    username: string | null;
    email: string | null;
    profileImage: string | null;
    _id: string | null;

}

export default function Profilepage() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const storedUser = useSelector((state: RootState) => state.user.value);
    const [profileImage, setProfileImage] = useState<string | null>(null);



    //upload pfp
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return

        const previreUrl = URL.createObjectURL(file)
        setProfileImage(previreUrl)

        try {
            const res = await updateAvatar(file);
            if (res.status == 200) {
                dispatch(setUserProfile({ profileImage: res.data.profileImage }))
                setProfileImage(null)
                toast.success(res.data.message)

            }
            console.log(res);

        } catch (error) {
            console.error('Upload error:', error);
        }
    };

    //get user data on laod
    useEffect(() => {
        getUserProfile()
            .then((data) => {
                dispatch(setUserProfile(data.user));


            })
            .finally(() => setLoading(false));
    }, []);


    useEffect(() => {
        return () => {
            if (profileImage) {
                URL.revokeObjectURL(profileImage);
            }
        };
    }, [profileImage]);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-gray-100 h-screen p-6">
            <div>

            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg  p-6 mt-10 ">
                <h2 className="text-3xl font-bold mb-1 text-center">My Account</h2>
                <p className="text-center text-gray-600 mb-6 capitalize font-bold text-lg">{storedUser.username}</p>

                {/* Tabs (static layout for now) */}
                <div className="flex border-b mb-4">
                    <button className="py-2 px-4 border-b-2 border-gray-300 text-gray-700 font-medium">
                        My Services
                    </button>
                    <button className="py-2 px-4 border-b-2 border-black text-black font-semibold">
                        Account Settings
                    </button>
                </div>

                {/* Profile Image Upload */}
                <div className="flex flex-col items-center mb-6">
                    {profileImage || storedUser.profileImage ? (
                        <Image
                            src={profileImage ?? storedUser.profileImage ?? '/default-avatar.png'}

                            alt="Profile"
                            width={200}
                            height={200}
                            className="rounded-full  w-30 h-30 object-cover"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            No Image
                        </div>
                    )}
                    <label className="mt-2 text-blue-600 cursor-pointer text-sm">
                        Upload Profile Image
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>

                </div>

                {/* Account Info */}
                <div className="space-y-4 text-sm">
                    <div>
                        <strong>Name</strong>
                        <div className="flex justify-between items-center">
                            <span className="capitalize">{storedUser.username}</span>
                            <a href="#" className="text-blue-600 text-xs">    <SquarePen />
                            </a>
                        </div>
                    </div>

                    <div>
                        <strong>Your Email</strong>
                        <div className="flex justify-between items-center">
                            <span>{storedUser.email}</span>
                            <a href="#" className="text-blue-600 text-xs">    <SquarePen />
                            </a>
                        </div>
                    </div>

                    <div>
                        <strong>Your Password</strong>
                        <div className="flex justify-between items-center">
                            <span>****************</span>
                            <a href="#" className="text-blue-600 text-xs">    <SquarePen />
                            </a>
                        </div>
                    </div>

                    <div>
                        <strong>Time Zone</strong>
                        <div className="flex justify-between items-center">
                            <span>(GMT-08:00) Pacific Time (US & Canada)</span>
                            <a href="#" className="text-blue-600 text-xs">    <SquarePen />
                            </a>
                        </div>
                    </div>

                    <div>
                        <strong>Notification Settings</strong>
                        <p>To change your email notification settings, <a href="#" className="text-blue-600">click here</a></p>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-6 space-y-2 text-sm text-center">
                    <a href="#" className="text-blue-600">Log out on all devices</a>
                    <p>
                        If you want to delete your account, <a href="#" className="text-red-600">click here</a>.
                    </p>
                    <p className="text-gray-500">
                        Need help? <a href="#" className="text-blue-600">Get in touch</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
