"use client";

import Dashboardheader from "@/components/layout/Dashboardheader";
import DashBoardSidebar from "@/components/layout/DashboardSidebar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useAuthLoader from "@/hooks/useAuthLoader";

// Dummy content components
function AllFiles() {
    return <div>All Files Content</div>;
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
        <div className="relative min-h-screen flex bg-gray-50">
            {/* Sidebar — only show on dashboard routes */}
            {!isProfileRoute && (
                <DashBoardSidebar {...({ activeTab, setActiveTab } as any)} />
            )}

            {/* Main Content */}
            <div className="flex-1">
                <Dashboardheader />
                <main className="p-6">
                    {/* Only show tab content on /dashboard route */}
                    {!isProfileRoute ? renderContent() : children}
                </main>
            </div>
        </div>
    );
}
