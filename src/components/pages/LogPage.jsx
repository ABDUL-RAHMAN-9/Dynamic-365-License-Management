import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function LogPage({ logs, onDelete })
{
    const removeLog = (id) =>
    {
        onDelete(logs.filter(l => l.id !== id));
    };

    return (
        <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden animate-in fade-in duration-500">
            <div className="p-5 bg-gray-50 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-blue-900">System Logs</h2>
                <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{logs.length} Total Logs</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-[#f8f9fa] border-b text-gray-500 uppercase text-[10px] font-bold">
                        <tr>
                            <th className="p-4">User</th>
                            <th className="p-4">Organization</th>
                            <th className="p-4">CRM URL</th>
                            <th className="p-4">Date</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-blue-50 transition-colors">
                                <td className="p-4">
                                    <div className="font-bold text-gray-800">{log.firstName} {log.lastName}</div>
                                    <div className="text-[10px] text-gray-400">{log.email}</div>
                                </td>
                                <td className="p-4 text-gray-600">{log.organization || "N/A"}</td>
                                <td className="p-4 text-blue-600 italic text-xs truncate max-w-[150px]">{log.crmUrl}</td>
                                <td className="p-4 text-xs text-gray-500">{new Date(log.submittedAt).toLocaleDateString()}</td>
                                <td className="p-4 text-center">
                                    <button onClick={() => removeLog(log.id)} className="text-red-400 hover:text-red-600 transition">
                                        <DeleteIcon fontSize="small" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}