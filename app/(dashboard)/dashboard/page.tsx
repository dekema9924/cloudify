

"use client";

import React from "react";
import { Image, EllipsisVertical } from "lucide-react";
import UploadModal from "@/components/modals/UploadModal";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Example content grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-300 rounded p-4 flex flex-col space-y-4"
                    >
                        {/* File header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Image className="w-4 h-4 text-gray-500" /> {/* small file icon */}
                                <p className="text-sm font-medium text-gray-700">File {idx + 1}</p>
                            </div>
                            <EllipsisVertical className="w-4 h-4 text-gray-500" />
                        </div>

                        {/* File content / preview */}
                        <div className="flex items-center justify-center flex-1">
                            <Image className="w-12 h-12 text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
