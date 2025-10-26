import MainButton from '@/components/ui/MainButton'
import { Search } from 'lucide-react'
import React from 'react'
import { Grid3x3 } from 'lucide-react';
import { Grid2x2 } from 'lucide-react';



export default function ActionHeader() {
    return (
        <>
            <header className='mt-10 p-6 '>
                <div className='flex items-center  justify-between '>
                    <h1 className='text-2xl'>Welcome Daniel</h1>
                    <form className='flex gap-4' action="">
                        <input className='border border-gray-300 shadow-2xl rounded-lg w-44 pl-4 outline-blue-500' type="text" placeholder='search' />
                        <button className='bg-black text-white w-30 h-9 flex items-center gap-2 rounded-xl justify-center cursor-pointer'><Search />Search</button>
                    </form>
                    <MainButton
                        text='upload file'
                        className='w-44 h-8  bg-blue-300 text-white font-semibold'
                    />
                </div>

                {/* //grid toggle */}
                <div className='flex items-center justify-between mt-10 '>

                    <div className=' bg-gray-200 w-fit px-2 flex gap-2 rounded border-blue-100'>
                        <span className=' flex gap-1 items-center border-r border-blue-400 cursor-pointer p-1 bg-blue-100'><Grid3x3 />Grid</span>
                        <span className=' flex gap-1 items-center cursor-pointer' ><Grid2x2 />Table</span>
                    </div>

                    {/* //filter by type */}


                    <div className=' w-fit px-5 flex items-center gap-2 '>
                        <span className='font-bold'>Type Filter</span>
                        <select className='border border-blue-600 rounded-lg w-22' name="filter">
                            <option className='' value="pdf">PDF</option>
                            <option value="image">Image</option>
                            <option value="csv">CSV</option>
                        </select>
                    </div>
                </div>
            </header>
        </>
    )
}
