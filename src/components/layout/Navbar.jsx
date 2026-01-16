import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar()
{
    return (
        <nav className="h-12 bg-[#002050] text-white flex items-center justify-between px-4 shadow-md z-50">
            <div className="flex items-center gap-4">
                <AppsIcon className="hover:bg-blue-800 p-1 rounded cursor-pointer transition" />
                <div className="h-6 w-[1px] bg-blue-700 hidden sm:block"></div>
                <span className="font-semibold tracking-wide text-sm md:text-base">
                    Dynamics 365 <span className="font-light text-blue-200 ml-2">| Customer Service</span>
                </span>
            </div>

            <div className="flex items-center gap-2 md:gap-5">
                <div className="hidden md:flex items-center bg-blue-900 px-3 py-1 rounded border border-blue-700">
                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs w-32 lg:w-64" />
                    <SearchIcon fontSize="small" className="text-blue-300" />
                </div>
                <SettingsIcon fontSize="small" className="cursor-pointer hover:text-blue-300" />
                <QuestionMarkIcon fontSize="small" className="cursor-pointer hover:text-blue-300" />
                <div className="flex items-center gap-2 ml-2 bg-blue-800 px-2 py-1 rounded-sm cursor-pointer hover:bg-blue-700">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold">MA</div>
                    <span className="text-[10px] hidden lg:block">MOD Administrator</span>
                </div>
            </div>
        </nav>
    );
}