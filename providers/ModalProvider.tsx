'use client'

import React, { createContext, useContext, useState } from "react";

export type ModalContextType = {
    isUploadModalOpen: boolean;
    toggleUploadModal: () => void;
    isTableMode: 'grid' | 'table';
    setTableMode: React.Dispatch<React.SetStateAction<'grid' | 'table'>>



}


export const modalContext = createContext<ModalContextType>({
    isUploadModalOpen: false,
    setTableMode: (() => { }) as React.Dispatch<React.SetStateAction<'grid' | 'table'>>,
    toggleUploadModal: () => { },
    isTableMode: 'grid',
})


const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTableMode, setTableMode] = useState<'grid' | 'table'>('grid')
    const [isUploadModalOpen, setisUploadModalOpen] = useState(false)

    const toggleUploadModal = () => setisUploadModalOpen(prev => !prev)

    return (
        <modalContext.Provider value={{ isUploadModalOpen, toggleUploadModal, isTableMode, setTableMode }}>
            {children}
        </modalContext.Provider>
    )

}


export const usemodalcontext = () => {
    const context = useContext(modalContext)


    if (!context) throw new Error("useModalProvider must be used within a ModalProvider")

    return context
}

export default ModalProvider


