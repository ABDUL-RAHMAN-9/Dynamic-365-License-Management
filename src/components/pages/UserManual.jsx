import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function UserManual()
{
    const [query, setQuery] = useState("");

    const docs = [
        { title: "Activation Guide", text: "Go to License Configuration and enter your CRM URL and Email." },
        { title: "Managing Logs", text: "In the Logs section, you can view historical activation data and delete entries." },
        { title: "System Dashboard", text: "The Home page displays real-time charts of your CRM performance." }
    ];

    const filtered = docs.filter(d => d.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border p-8 animate-in fade-in">
            <div className="flex items-center gap-3 mb-6">
                <MenuBookIcon className="text-blue-600" fontSize="large" />
                <h1 className="text-2xl font-bold text-gray-800">User Manual & Documentation</h1>
            </div>

            <div className="relative mb-8">
                <SearchIcon className="absolute left-3 top-3 text-gray-400" />
                <input
                    className="w-full pl-10 pr-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search for help topics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="space-y-4">
                {filtered.map((item, i) => (
                    <div key={i} className="p-4 border rounded hover:bg-gray-50 transition">
                        <h3 className="font-bold text-blue-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}