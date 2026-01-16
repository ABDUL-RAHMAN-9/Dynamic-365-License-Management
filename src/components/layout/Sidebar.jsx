import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HelpIcon from "@mui/icons-material/Help";
import HistoryIcon from "@mui/icons-material/History";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menu = [
    { group: "HOME", items: [
        { name: "Home", icon: <HomeIcon fontSize="small" /> },
        { name: "Recent", icon: <HistoryIcon fontSize="small" /> },
        { name: "Pinned", icon: <PushPinIcon fontSize="small" /> }
    ]},
    { group: "ADMIN", items: [
      { name: "Entity Configuration", icon: <SettingsIcon fontSize="small" /> },
      { name: "Settings", icon: <SettingsIcon fontSize="small" /> },
      { name: "License Configuration", icon: <ListAltIcon fontSize="small" /> }
    ]},
    { group: "ANALYSIS", items: [
        { name: "Logs", icon: <ListAltIcon fontSize="small" /> }
    ]},
    { group: "HELP", items: [
        { name: "User Manual", icon: <HelpIcon fontSize="small" /> }
    ]}
  ];

  return (
    <aside className="w-16 md:w-64 bg-white border-r border-gray-200 h-full flex flex-col shadow-sm z-40">
      <div className="flex-1 overflow-y-auto py-6">
        {menu.map((section) => (
          <div key={section.group} className="mb-6">
            <h3 className="hidden md:block px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              {section.group}
            </h3>
            {section.items.map((item) => (
              <div
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center gap-3 px-4 md:px-6 py-3 cursor-pointer transition-all border-l-4
                  ${activeTab === item.name 
                    ? "bg-blue-50 border-blue-600 text-blue-700 font-bold" 
                    : "border-transparent text-gray-600 hover:bg-gray-50"}`}
              >
                {item.icon}
                <span className="text-sm hidden md:block">{item.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}