import React from "react";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";

export default function EntityConfiguration()
{
    const entities = [
        { name: "Accounts", schema: "cr45_account", status: "Active", sync: "Enabled" },
        { name: "Contacts", schema: "cr45_contact", status: "Active", sync: "Enabled" },
        { name: "Leads", schema: "cr45_lead", status: "Maintenance", sync: "Disabled" },
        { name: "Opportunities", schema: "cr45_opp", status: "Active", sync: "Enabled" },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                        <SettingsInputComponentIcon />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Entity Configuration</h1>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                    + Add New Entity
                </button>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <th className="p-6">Entity Name</th>
                            <th className="p-6">Schema Name</th>
                            <th className="p-6">Status</th>
                            <th className="p-6">Live Sync</th>
                            <th className="p-6 text-center">Config</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {entities.map((ent, i) => (
                            <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                                <td className="p-6 font-bold text-gray-700">{ent.name}</td>
                                <td className="p-6 text-xs text-gray-400 font-mono">{ent.schema}</td>
                                <td className="p-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${ent.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                                        }`}>
                                        {ent.status}
                                    </span>
                                </td>
                                <td className="p-6">
                                    <div className="w-10 h-5 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                                        <div className={`w-3 h-3 rounded-full transition-all ${ent.sync === 'Enabled' ? 'bg-blue-600 translate-x-5' : 'bg-white'}`}></div>
                                    </div>
                                </td>
                                <td className="p-6 text-center">
                                    <button className="text-blue-500 hover:underline text-xs font-bold">Edit Settings</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}