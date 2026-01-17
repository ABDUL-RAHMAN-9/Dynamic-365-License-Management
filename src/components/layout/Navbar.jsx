import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Navbar({ setActiveTab })
{
    const [searchValue, setSearchValue] = useState("");

    // THE MAPPER: Matches user input to your App.jsx state names
    const navigationMap = {
        "home": "Home",
        "dashboard": "Home",
        "logs": "Logs",
        "history": "Logs",
        "settings": "Settings",
        "config": "Settings",
        "license": "License Configuration",
        "activation": "License Configuration",
        "entity": "Entity Configuration",
        "entities": "Entity Configuration",
        "manual": "User Manual",
        "help": "User Manual",
        "pinned": "Pinned",
        "recent": "Recent"
    };

    const handleSearch = (e) =>
    {
        if (e.key === "Enter")
        {
            const query = searchValue.toLowerCase().trim();

            // Look for the page name in our map
            const targetPage = navigationMap[query];

            if (targetPage)
            {
                setActiveTab(targetPage); // This changes the page in App.jsx
                setSearchValue("");       // Clear search bar
                console.log(`Navigating to: ${targetPage}`);
            } else
            {
                alert(`No page found for "${searchValue}". Try 'Logs' or 'Settings'`);
            }
        }
    };

    return (
        <nav className="h-12 bg-[#002050] text-white flex items-center justify-between px-4 shadow-md z-50 shrink-0">
            <div className="flex items-center gap-4">
                <AppsIcon className="hover:bg-blue-800 p-1 rounded cursor-pointer transition" />
                <div className="h-6 w-[1px] bg-blue-700 hidden sm:block"></div>
                <div
                    className="cursor-pointer flex items-center gap-1"
                    onClick={() => setActiveTab("Home")}
                >
                    <span className="font-bold tracking-tight text-sm">Dynamics 365</span>
                    <span className="font-light text-blue-200 text-sm hidden md:inline ml-1">| Customer Service</span>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-5">
                {/* SEARCH BAR */}
                <div className="hidden md:flex items-center bg-blue-900/40 px-3 py-1 rounded border border-blue-700 focus-within:border-blue-400 focus-within:bg-blue-900/60 transition-all">
                    <input
                        type="text"
                        placeholder="Search pages (Logs, Settings...)"
                        className="bg-transparent border-none outline-none text-[11px] w-32 lg:w-64 placeholder:text-blue-300/50"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleSearch} // Triggers on Enter key
                    />
                    <SearchIcon fontSize="small" className="text-blue-300" />
                </div>

                <div className="flex items-center gap-3 border-r border-blue-800 pr-4">
                    <SettingsIcon
                        fontSize="small"
                        className="cursor-pointer hover:text-blue-300 transition-colors"
                        onClick={() => setActiveTab("Settings")}
                    />
                    <QuestionMarkIcon
                        fontSize="small"
                        className="cursor-pointer hover:text-blue-300 transition-colors"
                        onClick={() => setActiveTab("User Manual")}
                    />
                </div>

                <div className="flex items-center gap-2 bg-blue-800/50 px-2 py-1 rounded cursor-pointer hover:bg-blue-800 transition-all">
                    <div className="w-7 h-7 bg-orange-600 rounded-full flex items-center justify-center text-[10px] font-black">
                        MA
                    </div>
                    <div className="hidden lg:flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-bold">MOD Administrator</span>
                        <span className="text-[8px] text-blue-300 uppercase font-black">Admin Access</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}