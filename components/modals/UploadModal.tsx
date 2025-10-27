

'use client'
import React from 'react'
import { X } from 'lucide-react';
import { usemodalcontext } from '@/providers/ModalProvider';
import { useEffect } from 'react';


export default function UploadModalComp() {
    const { isUploadModalOpen, toggleUploadModal } = usemodalcontext()

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

                            <form className='my-6'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="title">Title</label>
                                    <input className='border border-gray-800 h-10 pl-4 rounded-lg w-full' type="text" placeholder='title' />
                                </div>

                                <div className='flex flex-col gap-1 my-5'>
                                    <label htmlFor="title">File</label>
                                    <input className='border border-gray-800 h-10 pl-4 rounded-lg w-full' type='file' />
                                </div>

                                <button className='bg-black rounded-xl w-24 cursor-pointer h-8 text-white'>Submit</button>
                            </form>
                        </div>
                    </div>
                </>
            )}

        </>


    )
}
