import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function UserManual()
{
    const [query, setQuery] = useState("");

    // Detailed documentation of your components
    const docs = [
        {
            title: "License Activation",
            category: "Getting Started",
            text: "To activate your system, navigate to the License section. You must provide a valid Name (letters only) and a Dynamics CRM URL (e.g., https://org.crm.dynamics.com). The 'Activate' button remains locked until all validation rules are met to ensure data integrity."
        },
        {
            title: "System Dashboard",
            category: "Analytics",
            text: "The Dashboard provides a real-time overview of system performance. You can toggle between 'Daily' and 'Monthly' views to see different data sets. The 'API Pulse' section simulates live traffic, showing packets per second and system uptime."
        },
        {
            title: "Managing System Logs",
            category: "Administration",
            text: "The Logs page tracks all activation attempts. Data is persistent, meaning it is saved to your browser's local storage and won't disappear on refresh. You can remove entries using the delete icon, and the view is fully optimized for mobile devices."
        },
        {
            title: "Entity Configuration",
            category: "Developer Tools",
            text: "Use this section to map CRM entities to the system. You can add new schemas, edit existing ones, and toggle 'Live Sync'. Synchronizing an entity allows data to flow between the CRM and this dashboard automatically."
        },
        {
            title: "System Settings",
            category: "Configuration",
            text: "Manage your organization's global identity here. You can update the organization name, region, and admin contact. Use the 'Save Changes' button to commit updates or 'Cancel' to revert back to the last saved state."
        }
    ];

    const filtered = docs.filter(
        (d) =>
            d.title.toLowerCase().includes(query.toLowerCase()) ||
            d.text.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto p-6 md:p-10">
            {/* SIMPLE HEADER */}
            <div className="flex items-center gap-4 mb-10 border-b pb-6">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                    <MenuBookIcon fontSize="large" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Knowledge Base</h1>
                    <p className="text-slate-500 text-sm">Understand how each system component operates</p>
                </div>
            </div>

            {/* SEARCH BAR */}
            <div className="relative mb-10">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-slate-700"
                    placeholder="Search for components or functionality..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {/* QUICK INFO BOX */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-3">
                <InfoIcon className="text-blue-500 mt-0.5" fontSize="small" />
                <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Each component in this system is built with React state management to ensure real-time updates and data persistence.
                </p>
            </div>

            {/* DOCS LIST */}
            <div className="grid grid-cols-1 gap-6">
                {filtered.length > 0 ? (
                    filtered.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4">
                                <span className="text-[10px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-800 mt-2">{item.title}</h3>
                            </div>
                            <div className="md:w-3/4 border-l md:pl-6 border-slate-100">
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                        <HelpOutlineIcon className="text-slate-300 mb-2" fontSize="large" />
                        <p className="text-slate-500 font-medium">No documentation found matching "{query}"</p>
                    </div>
                )}
            </div>

            {/* FOOTER SUPPORT */}
            <div className="mt-12 text-center border-t pt-8">
                <p className="text-sm text-slate-400">
                    Need more help? <button className="text-blue-600 font-bold hover:underline">Contact System Administrator</button>
                </p>
            </div>
        </div>
    );
}