'use client'
import React from 'react'
import { usemodalcontext } from '@/providers/ModalProvider'

function Bg() {
    const { isUploadModalOpen } = usemodalcontext()

    if (isUploadModalOpen)

        return (

            <div className="fixed inset-0 bg-gray-300/20  z-40"></div>
        )
}




export default Bg
