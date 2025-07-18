import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const navItems = [
    {
        section: "Home",
        icon: <HomeIcon className="mr-2" />,
        items: [
            { name: "Home", path: "/home" },
            { name: "Recent", path: "/recent" },
            { name: "Pinned", path: "/pinned" },
        ],
    },
    {
        section: "Administration",
        icon: <SettingsIcon className="mr-2" />,
        items: [
            { name: "Entity Configurations", path: "/entity-configurations" },
            { name: "Settings", path: "/settings" },
            { name: "License Configuration", path: "/license" },
        ],
    },
    {
        section: "Analysis",
        icon: <ListAltIcon className="mr-2" />,
        items: [{ name: "Logs", path: "/logs" }],
    },
    {
        section: "Help",
        icon: <HelpOutlineIcon className="mr-2" />,
        items: [{ name: "User Manual", path: "/user-manual" }],
    },
];

export default function Sidebar({
    open,
    setSidebarOpen,
    activeSection,
    activeItem,
    setActiveSection,
    setActiveItem,
})
{
    const location = useLocation();

    // Update active section/item on location change
    React.useEffect(() =>
    {
        navItems.forEach((section) =>
        {
            section.items.forEach((item) =>
            {
                if (item.path === location.pathname)
                {
                    setActiveSection(section.section);
                    setActiveItem(item.name);
                }
            });
        });
    }, [location.pathname, setActiveSection, setActiveItem]);

    const handleLinkClick = (section, item) =>
    {
        setActiveSection(section);
        setActiveItem(item);

        // Uncomment below line if you want sidebar to close on link click (e.g. on mobile)
        // setSidebarOpen(false);
    };

    return (
        <div className="relative">
            {!open && (
                <button
                    className="absolute top-4 left-4 z-20 rounded-full bg-gray-800 text-white p-2 shadow-md"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open sidebar"
                >
                    <MenuIcon />
                </button>
            )}

            <aside
                className={`fixed top-[60px] left-0 h-[calc(100vh-48px)] z-30 bg-white shadow-lg border-r w-72 transform transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {open && (
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-start p-4 border-b">
                            <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                                <CloseIcon className="w-7 h-7 text-[#253858]" />
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto p-4">
                            {navItems.map((section) => (
                                <div key={section.section} className="mb-4">
                                    <div className="text-xs text-gray-400 uppercase font-bold mb-1 flex items-center cursor-default select-none">
                                        {section.icon}
                                        {section.section}
                                    </div>

                                    {section.items.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`flex items-center py-1 pr-2  hover:bg-gray-100 cursor-pointer text-gray-700 
                                                ${activeSection === section.section && activeItem === item.name
                                                    ? "bg-gray-100 font-medium border-l-4 border-blue-500 pl-1"
                                                    : "pl-2"
                                                }`}

                                            onClick={() => handleLinkClick(section.section, item.name)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}


                                </div>
                            ))}
                        </nav>
                    </div>
                )}
            </aside>

            {/* Spacer for sidebar width */}
            <div className={`${open ? "w-72" : "w-0"} transition-all duration-200`} />
        </div>
    );
}
