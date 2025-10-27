'use client'

import React, { createContext, useContext, useState } from "react";

export type ModalContextType = {
    isUploadModalOpen: boolean;
    setisUploadModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleUploadModal: () => void;
}


export const modalContext = createContext<ModalContextType>({
    isUploadModalOpen: false,
    setisUploadModalOpen: (() => { }) as React.Dispatch<React.SetStateAction<boolean>>,
    toggleUploadModal: () => { }
})


const ModalProvider = ({ children }: { children: React.ReactNode }) => {


    const [isUploadModalOpen, setisUploadModalOpen] = useState(false)
    const toggleUploadModal = () => setisUploadModalOpen(prev => !prev)

    return (
        <modalContext.Provider value={{ isUploadModalOpen, setisUploadModalOpen, toggleUploadModal }}>
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


