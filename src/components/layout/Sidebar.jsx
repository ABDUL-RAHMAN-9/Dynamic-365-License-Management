import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HelpIcon from "@mui/icons-material/Help";
import HistoryIcon from "@mui/icons-material/History";
import PushPinIcon from "@mui/icons-material/PushPin";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";

export default function Sidebar({ activeTab, setActiveTab })
{
  // Navigation Menu Structure
  const menu = [
    {
      group: "HOME",
      items: [
        { name: "Home", icon: <HomeIcon fontSize="small" /> },
        { name: "Recent", icon: <HistoryIcon fontSize="small" /> },
        { name: "Pinned", icon: <PushPinIcon fontSize="small" /> }
      ]
    },
    {
      group: "ADMIN",
      items: [
        { name: "Entity Configuration", icon: <SettingsInputComponentIcon fontSize="small" /> },
        { name: "Settings", icon: <SettingsIcon fontSize="small" /> },
        { name: "License Configuration", icon: <ListAltIcon fontSize="small" /> }
      ]
    },
    {
      group: "ANALYSIS",
      items: [
        { name: "Logs", icon: <ListAltIcon fontSize="small" /> }
      ]
    },
    {
      group: "HELP",
      items: [
        { name: "User Manual", icon: <HelpIcon fontSize="small" /> }
      ]
    }
  ];

  return (
    <aside className="w-16 md:w-64 bg-white border-r border-gray-200 h-full flex flex-col shadow-sm z-40 shrink-0">
      <div className="flex-1 overflow-y-auto py-6 no-scrollbar">
        {menu.map((section) => (
          <div key={section.group} className="mb-6">
            {/* Group Label - Hidden on Mobile */}
            <h3 className="hidden md:block px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">
              {section.group}
            </h3>

            <div className="space-y-1">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-3 px-4 md:px-6 py-3 cursor-pointer transition-all border-l-4 group
                    ${activeTab === item.name
                      ? "bg-blue-50 border-blue-600 text-blue-700 font-bold"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
                >
                  <div className={`${activeTab === item.name ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm hidden md:block whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sidebar Footer (Optional) */}
      <div className="p-4 border-t border-gray-100 hidden md:block">
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase">System Status</p>
          <p className="text-xs font-bold text-emerald-600 flex items-center gap-2 mt-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Online & Synced
          </p>
        </div>
      </div>
    </aside>
  );
}