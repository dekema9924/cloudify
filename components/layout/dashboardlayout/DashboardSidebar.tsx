"use client";

import { File, Star, Trash, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usemodalcontext } from "@/providers/ModalProvider";

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function DashBoardSidebar({ activeTab, setActiveTab }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { isUploadModalOpen } = usemodalcontext()

    const items = [
        { label: "All Files", icon: <File className="w-5 h-5" />, key: "all" },
        { label: "Favorites", icon: <Star className="w-5 h-5" />, key: "favorites" },
        { label: "Trash", icon: <Trash className="w-5 h-5" />, key: "trash" },
    ];

    useEffect(() => {
        isUploadModalOpen ? setIsOpen(false) : ""

    })

    return (
        <>
            {/* Mobile toggle button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 bg-white p-2 rounded-md shadow"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-22 left-0 h-screen bg-white shadow-md  w-64 p-4 flex flex-col gap-4 transform transition-transform duration-300 z-20
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <h2 className="text-xl font-bold mb-6 text-gray-800">Dashboard</h2>

                <nav className="flex flex-col gap-2 text-gray-700 font-medium">
                    {items.map((item) => (
                        <div
                            key={item.key}
                            onClick={() => setActiveTab(item.key)}
                            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-blue-50 hover:text-blue-600
                ${activeTab === item.key ? "bg-blue-100 text-blue-700 font-semibold" : ""}`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}
