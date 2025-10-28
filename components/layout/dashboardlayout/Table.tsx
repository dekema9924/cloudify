import React from "react";

// 1️⃣ Define the interface for your table data
export interface FileData {
    name: string;
    type: string;
    user: string;
    uploadedOn: string;
    actions?: string[];
}

// 2️⃣ Fake JSON data (could come from an API later)
export const fileData: FileData[] = [
    {
        name: "Report.pdf",
        type: "Document",
        user: "James",
        uploadedOn: "2025-10-25",
        actions: ["View", "Delete"],
    },
    {
        name: "Invoice.xlsx",
        type: "Spreadsheet",
        user: "Olivia",
        uploadedOn: "2025-10-22",
        actions: ["View", "Edit", "Delete"],
    },
    {
        name: "Image.png",
        type: "Image",
        user: "Sophia",
        uploadedOn: "2025-10-26",
        actions: ["View", "Download"],
    },
    {
        name: "Presentation.pptx",
        type: "Presentation",
        user: "Liam",
        uploadedOn: "2025-10-21",
        actions: ["View", "Share"],
    },
];

// 3️⃣ Map the JSON data to a responsive, light-themed table
const Table: React.FC = () => {
    return (
        <div className="bg-gray-200 text-gray-800 p-6 rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="border-b border-gray-400 text-left bg-white">
                        <th className="py-3 px-4 font-semibold">Name</th>
                        <th className="py-3 px-4 font-semibold">Type</th>
                        <th className="py-3 px-4 font-semibold">User</th>
                        <th className="py-3 px-4 font-semibold">Uploaded On</th>
                        <th className="py-3 px-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fileData.map((file, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                            <td className="py-2 px-4">{file.name}</td>
                            <td className="py-2 px-4">{file.type}</td>
                            <td className="py-2 px-4">{file.user}</td>
                            <td className="py-2 px-4">{file.uploadedOn}</td>
                            <td className="py-2 px-4 space-x-2">
                                {file.actions?.map((action, i) => (
                                    <button
                                        key={i}
                                        className={`px-3 py-1 rounded text-white text-sm ${action === "Delete"
                                                ? "bg-red-500 hover:bg-red-600"
                                                : "bg-blue-500 hover:bg-blue-600"
                                            }`}
                                    >
                                        {action}
                                    </button>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
