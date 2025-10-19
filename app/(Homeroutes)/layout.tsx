
import Header from '@/components/layout/Header'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className=' md:w-11/12 md:m-auto'>
                <Header />
                {children}
            </div>
        </>
    )
}
