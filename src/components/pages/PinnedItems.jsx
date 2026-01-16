import React from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function PinnedItems()
{
    const pinned = [
        { title: "Monthly Sales Report", type: "Analytics", date: "Pinned 2 days ago", color: "bg-blue-500" },
        { title: "High Value Leads", type: "CRM List", date: "Pinned 5 days ago", color: "bg-orange-500" },
        { title: "System Health Monitor", type: "Security", date: "Pinned 1 week ago", color: "bg-purple-500" },
        { title: "Customer Feedback Loop", type: "Marketing", date: "Pinned 3 hours ago", color: "bg-green-500" },
    ];

    return (
        <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-2xl text-orange-600">
                    <PushPinIcon />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">Pinned Items</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pinned.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                        <div className={`w-12 h-12 ${item.color} rounded-2xl mb-4 flex items-center justify-center text-white shadow-lg`}>
                            <PushPinIcon fontSize="small" />
                        </div>
                        <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{item.type}</p>

                        <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                            <span className="text-[10px] text-gray-300 italic">{item.date}</span>
                            <OpenInNewIcon className="text-gray-200 group-hover:text-blue-400" fontSize="inherit" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}