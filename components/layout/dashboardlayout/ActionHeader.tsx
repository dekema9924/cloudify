'use client'
import { Search } from 'lucide-react'
import React from 'react'
import { Grid3x3 } from 'lucide-react';
import { Grid2x2 } from 'lucide-react';
import { usemodalcontext } from '@/providers/ModalProvider';



export default function ActionHeader() {
    const { toggleUploadModal, setTableMode } = usemodalcontext()



    return (
        <>
            <header className='mt-10 p-6'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0'>
                    <h1 className='text-2xl'>Welcome Daniel</h1>

                    <form className='flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto' action="">
                        <input className='border border-gray-300 shadow-2xl rounded-lg w-full md:w-44 pl-4 outline-blue-500' type="text" placeholder='search' />
                        <button className='bg-black text-white w-full md:w-30 h-9 flex items-center gap-2 rounded-xl justify-center cursor-pointer'>
                            <Search />Search
                        </button>
                    </form>

                    <button onClick={() => toggleUploadModal()} className='w-full md:w-44 h-8 cursor-pointer bg-blue-300 text-white font-semibold rounded-md'>
                        Upload file
                    </button>
                </div>

                {/* Grid toggle */}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-10 gap-4 md:gap-0'>
                    <div className='bg-gray-200 w-full md:w-fit px-2 flex gap-2 rounded border-blue-100'>
                        <span onClick={() => setTableMode('grid')} className='flex gap-1 items-center border-r border-blue-400 cursor-pointer p-1 bg-blue-100'>
                            <Grid3x3 />Grid
                        </span>
                        <span onClick={() => setTableMode('table')} className='flex gap-1 items-center cursor-pointer'>
                            <Grid2x2 />Table
                        </span>
                    </div>

                    {/* Filter by type */}
                    <div className='w-full md:w-fit px-5 flex items-center gap-2'>
                        <span className='font-bold'>Type Filter</span>
                        <select className='border border-blue-600 rounded-lg w-full md:w-22' name="filter">
                            <option value="pdf">PDF</option>
                            <option value="image">Image</option>
                            <option value="csv">CSV</option>
                        </select>
                    </div>
                </div>
            </header>

        </>
    )
}
