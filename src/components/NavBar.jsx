import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function NavBar()
{
    return (
        <div className="bg-[#06163a] text-white flex items-center px-4 py-2 min-h-[48px] justify-between">
            {/* Left section: Branding */}
            <div className="flex items-center gap-2">
                <AppsIcon className="text-lg mr-2" />
                <span className="font-bold text-base">Dynamics 365</span>
                <span className="text-gray-300 text-sm ml-2 hidden sm:inline">| Analytics</span>
            </div>

            {/* Right section: All icons except profile (hide on mobile) */}
            <div className="flex items-center gap-5">
                <div className="hidden md:flex items-center gap-5">
                    <SearchIcon className="hover:text-blue-400 cursor-pointer" />
                    <EmojiObjectsIcon className="hover:text-blue-400 cursor-pointer" />
                    <AddIcon className="hover:text-blue-400 cursor-pointer" />
                    <FilterListIcon className="hover:text-blue-400 cursor-pointer" />
                    <SettingsIcon className="hover:text-blue-400 cursor-pointer" />
                    <HelpOutlineIcon className="hover:text-blue-400 cursor-pointer" />
                    <ChatBubbleOutlineIcon className="hover:text-blue-400 cursor-pointer" />
                </div>

                {/* Always show profile initials */}
                <div
                    className="rounded-full border border-gray-200 text-l px-2 py-1 ml-2"
                    style={{
                        minWidth: "44px",
                        minHeight: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    AR
                </div>
            </div>
        </div>
    );
}
