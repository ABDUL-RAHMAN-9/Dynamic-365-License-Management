import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

export default function Settings()
{
    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-10 duration-500">
            <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Navigation / Links */}
                <div className="space-y-4">
                    {[
                        { label: "General Information", icon: <CloudSyncIcon /> },
                        { label: "Security & Privacy", icon: <SecurityIcon /> },
                        { label: "Notification Prefs", icon: <NotificationsIcon /> },
                    ].map((link, i) => (
                        <div key={i} className={`p-4 rounded-2xl cursor-pointer transition-all flex items-center gap-4 ${i === 0 ? 'bg-blue-600 text-white shadow-xl' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                            {link.icon}
                            <span className="font-bold text-sm">{link.label}</span>
                        </div>
                    ))}
                </div>

                {/* Form Area */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-8">Organization Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase">Organization Name</label>
                            <input className="w-full border-none bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500" defaultValue="CRM.io Global" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase">Region</label>
                            <input className="w-full border-none bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500" defaultValue="North America" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase">Primary Admin Email</label>
                            <input className="w-full border-none bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500" defaultValue="admin@crm.io" />
                        </div>
                    </div>
                    <div className="mt-10 flex gap-4">
                        <button className="bg-[#0a1334] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-all">Save Changes</button>
                        <button className="text-gray-400 px-8 py-3 rounded-2xl font-bold hover:bg-gray-50">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}