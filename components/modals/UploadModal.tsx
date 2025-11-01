

'use client'
import React from 'react'
import { X } from 'lucide-react';
import { usemodalcontext } from '@/providers/ModalProvider';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { uploadToS3 } from '@/lib/client/api/authClient';
import axios from 'axios';
import toast, { LoaderIcon } from 'react-hot-toast';

type Inputs = {
    title: string
    file: FileList | null
}


export default function UploadModalComp() {
    const { isUploadModalOpen, toggleUploadModal } = usemodalcontext()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const file = data.file?.[0];
        if (!file) {
            toast.error("No file selected");
            return;
        }

        try {
            // 1️ Get pre-signed URL
            const { data: presignRes } = await uploadToS3(file);
            const { uploadUrl, key } = presignRes.message;

            if (!uploadUrl || !key) {
                throw new Error("Invalid S3 response");
            }

            // 2️ Upload file directly to S3
            await axios.put(uploadUrl, file, {
                headers: { "Content-Type": file.type }
            });

            // 3️ Register uploaded file in DB
            const completeRes = await axios.post(
                "/api/files/complete",
                {
                    key,
                    size: file.size,
                    title: data.title,
                    originalName: file.name,
                    type: file.type,
                },
                { headers: { "Content-Type": "application/json" } }
            );

            if (completeRes.status === 200) {
                toast.success("File uploaded successfully ");
                toggleUploadModal();
                reset({
                    title: "",
                    file: null
                })
                console.log(completeRes)
            }

        } catch (err: any) {
            console.error("Upload error:", err);

            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data?.error || err.message);
            } else {
                toast.error("Something went wrong ");
            }
        }
    };



    useEffect(() => {
        const body = document.body;

        if (isUploadModalOpen) {
            body.style.overflow = "hidden"; // disables all scrolling
        } else {
            body.style.overflow = "auto"; // restores scrolling
        }

        return () => {
            body.style.overflow = "auto";
        };
    }, [isUploadModalOpen]);






    return (
        <>
            {isUploadModalOpen && (
                <>
                    {/* Soft gray blurred backdrop */}
                    <div className="fixed inset-0 bg-gray-200/20 backdrop-blur-sm z-40"></div>

                    {/* Modal content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
                        <div className="rounded-lg bg-white overflow-hidden w-full max-w-md h-80 p-5 shadow-lg">
                            <div className='flex justify-between'>
                                <p>Upload your files here</p>
                                <X onClick={() => toggleUploadModal()} className='cursor-pointer' />
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className='my-6'>
                                <div >
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="title">Title</label>
                                        <input {...register("title", { required: true, minLength: { value: 3, message: 'field must be greater than 3 characters' } })} className='border border-gray-800 h-10 pl-4 rounded-lg w-full' type="text" placeholder='title' />
                                    </div>
                                    {errors.title && <span className='text-sm text-red-400'>This field is required</span>}
                                </div>

                                <div className='my-5'>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="title">File</label>
                                        <input {...register("file", { required: true })} className='border border-gray-800 h-10 pl-4 rounded-lg w-full' type='file' />
                                    </div>
                                    {errors.file && <span className='text-sm text-red-400'>This field is required</span>
                                    }
                                </div>

                                <button className={` ${isSubmitting ? "bg-gray-400 cursor-not-allowed pointer-events-none" : "bg-black"} rounded-xl w-24 cursor-pointer h-8 text-white flex items-center justify-center `}>{isSubmitting ? <LoaderIcon /> : "Submit"}</button>
                            </form>
                        </div>
                    </div>
                </>
            )}

        </>


    )
}
