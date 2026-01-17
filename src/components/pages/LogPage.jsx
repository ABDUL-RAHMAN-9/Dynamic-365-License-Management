import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import StorageIcon from "@mui/icons-material/Storage";
import PersonIcon from "@mui/icons-material/Person";
import DomainIcon from "@mui/icons-material/Domain";

// 1. Pre-built Mock Data (8-12 entries)
const initialMockData = [
    { id: 1, firstName: "Alice", lastName: "Johnson", email: "alice.j@microsoft.com", organization: "Tech Corp", crmUrl: "https://techcorp.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 2, firstName: "Bob", lastName: "Smith", email: "bob.smith@cloud.com", organization: "Cloudify", crmUrl: "https://cloudify.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 3, firstName: "Charlie", lastName: "Davis", email: "charlie@inagic.com", organization: "Inagic Systems", crmUrl: "https://inagic.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 4, firstName: "Diana", lastName: "Prince", email: "diana@themyscira.io", organization: "Amazon Ltd", crmUrl: "https://amazon.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 5, firstName: "Ethan", lastName: "Hunt", email: "hunt@imf.org", organization: "Mission Ops", crmUrl: "https://imf.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 6, firstName: "Fiona", lastName: "Gallagher", email: "fiona@southside.co", organization: "Global Sales", crmUrl: "https://gsales.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 7, firstName: "George", lastName: "Miller", email: "george@madmax.com", organization: "V8 Engines", crmUrl: "https://fury.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 8, firstName: "Hannah", lastName: "Abbott", email: "hannah@huffle.edu", organization: "Magic Goods", crmUrl: "https://magic.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 9, firstName: "Ian", lastName: "Wright", email: "ian.w@arsenal.uk", organization: "London Retail", crmUrl: "https://london.crm.dynamics.com", submittedAt: new Date().toISOString() },
    { id: 10, firstName: "Julia", lastName: "Roberts", email: "julia@cinema.com", organization: "Hollywood Hub", crmUrl: "https://movies.crm.dynamics.com", submittedAt: new Date().toISOString() },
];

export default function LogPage()
{
    // 2. Load data from LocalStorage on mount, or use initialMockData
    const [logs, setLogs] = useState(() =>
    {
        const savedLogs = localStorage.getItem("crm_system_logs");
        return savedLogs ? JSON.parse(savedLogs) : initialMockData;
    });

    // 3. Persist data whenever logs change
    useEffect(() =>
    {
        localStorage.setItem("crm_system_logs", JSON.stringify(logs));
    }, [logs]);

    const removeLog = (id) =>
    {
        const updatedLogs = logs.filter((l) => l.id !== id);
        setLogs(updatedLogs);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 p-4 md:p-0">
            {/* HEADER SECTION */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
                        <StorageIcon />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">System Logs</h2>
                        <p className="text-sm text-slate-400 font-medium">Monitoring license activations and users</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-5 py-2 bg-slate-100 rounded-full border border-slate-200">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{logs.length} Active Records</span>
                </div>
            </div>

            {/* MAIN LOGS AREA */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden">

                {/* DESKTOP TABLE (Hidden on Mobile) */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50 border-b border-gray-100">
                            <tr>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">User Details</th>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Organization</th>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">CRM Environment</th>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                                <th className="p-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-slate-50/80 transition-all group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                                                {log.firstName[0]}{log.lastName[0]}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-800">{log.firstName} {log.lastName}</div>
                                                <div className="text-xs text-slate-400">{log.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 font-bold text-slate-600 text-sm">
                                        <div className="flex items-center gap-2">
                                            <DomainIcon fontSize="inherit" className="text-slate-300" />
                                            {log.organization || "Private Entity"}
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[11px] font-bold border border-indigo-100">
                                            {log.crmUrl}
                                        </span>
                                    </td>
                                    <td className="p-6 text-xs font-bold text-slate-400">
                                        {new Date(log.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="p-6 text-center">
                                        <button
                                            onClick={() => removeLog(log.id)}
                                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* MOBILE VIEW (Card Layout) */}
                <div className="md:hidden divide-y divide-gray-100">
                    {logs.map((log) => (
                        <div key={log.id} className="p-6 space-y-4 hover:bg-slate-50 transition-all">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                                        {log.firstName[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{log.firstName} {log.lastName}</h4>
                                        <p className="text-[10px] text-slate-400 uppercase font-black">{log.organization}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeLog(log.id)} className="p-2 text-red-400 bg-red-50 rounded-lg">
                                    <DeleteIcon fontSize="small" />
                                </button>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 p-2 rounded-lg truncate">
                                    <StorageIcon style={{ fontSize: 14 }} /> {log.crmUrl}
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                                    <span>{log.email}</span>
                                    <span>{new Date(log.submittedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {logs.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <PersonIcon className="text-slate-200" style={{ fontSize: 40 }} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">No logs found</h3>
                        <p className="text-sm text-slate-400">Active licenses will appear here automatically.</p>
                    </div>
                )}
            </div>
        </div>
    );
}