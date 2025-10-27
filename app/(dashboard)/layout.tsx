"use client";

import Dashboardheader from "@/components/layout/dashboardlayout/Dashboardheader";
import DashBoardSidebar from "@/components/layout/dashboardlayout/DashboardSidebar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useAuthLoader from "@/hooks/useAuthLoader";
import Dashboardpage from "./dashboard/page";
import { Playfair_Display } from 'next/font/google'
import ActionHeader from "@/components/layout/dashboardlayout/ActionHeader";
import Bg from "@/components/ui/Bg";
import UploadModalComp from "@/components/modals/UploadModal";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['600', '900']
})


// Dummy content components
function AllFiles() {
    return <Dashboardpage />;
}
function Favorites() {
    return <div>Favorites Content</div>;
}
function Trash() {
    return <div>Trash Content</div>;
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeTab, setActiveTab] = useState("all");
    const pathname = usePathname();
    useAuthLoader();

    // Check if we are on the profile route
    const isProfileRoute = pathname.includes("/profile");

    // Function to render content based on sidebar selection
    const renderContent = () => {
        switch (activeTab) {
            case "all":
                return <AllFiles />;
            case "favorites":
                return <Favorites />;
            case "trash":
                return <Trash />;
            default:
                return <AllFiles />;
        }
    };

    return (
        <>

            <UploadModalComp />


            <div className={` relative min-h-screen flex bg-gray-50  ${playfair.className}`}>
                <Bg />
                {/* Sidebar — only show on dashboard routes */}
                {!isProfileRoute && (
                    <DashBoardSidebar {...({ activeTab, setActiveTab } as any)} />
                )}

                {/* Main Content */}
                <div className="flex-1">
                    <Dashboardheader />

                    <main className="p-6">
                        {pathname.includes("/dashboard") && <ActionHeader />}


                        {/* Only show tab content on /dashboard route */}
                        {!isProfileRoute ? renderContent() : children}

                    </main>
                </div>
            </div>

        </>
    );
}
