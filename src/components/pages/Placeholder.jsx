import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Placeholder({ title, setActiveTab })
{
    return (
        <div className="h-full flex flex-col items-center justify-center text-center p-10">
            <div className="bg-gray-100 p-10 rounded-full mb-6">
                <SettingsIcon sx={{ fontSize: 60 }} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
            <p className="text-gray-400 mb-6 max-w-sm">This module is currently being configured by the administrator. Access will be granted shortly.</p>
            <button
                onClick={() => setActiveTab("Home")}
                className="bg-blue-900 text-white px-8 py-2 rounded hover:bg-blue-800 transition shadow-lg"
            >
                BACK TO HOME
            </button>
        </div>
    );
}