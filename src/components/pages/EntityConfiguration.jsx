import React, { useState } from "react";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

export default function EntityConfiguration()
{
    // 1. Functional State for Entities
    const [entities, setEntities] = useState([
        { name: "Accounts", schema: "cr45_account", status: "Active", sync: "Enabled" },
        { name: "Contacts", schema: "cr45_contact", status: "Active", sync: "Enabled" },
        { name: "Leads", schema: "cr45_lead", status: "Maintenance", sync: "Disabled" },
        { name: "Opportunities", schema: "cr45_opp", status: "Active", sync: "Enabled" },
    ]);

    // 2. State for "Add New" Form
    const [showAddForm, setShowAddForm] = useState(false);
    const [newEntity, setNewEntity] = useState({
        name: "",
        schema: "",
        status: "Active",
        sync: "Enabled",
    });

    // 3. Handlers
    const toggleSync = (index) =>
    {
        const updated = [...entities];
        updated[index].sync = updated[index].sync === "Enabled" ? "Disabled" : "Enabled";
        setEntities(updated);
    };

    const removeEntity = (index) =>
    {
        setEntities(entities.filter((_, i) => i !== index));
    };

    const handleAddSubmit = (e) =>
    {
        e.preventDefault();
        if (newEntity.name && newEntity.schema)
        {
            setEntities([...entities, newEntity]);
            setNewEntity({ name: "", schema: "", status: "Active", sync: "Enabled" });
            setShowAddForm(false);
        }
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4">
            {/* HEADER SECTION */}
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        <SettingsInputComponentIcon />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Entity Configuration</h1>
                        <p className="text-xs text-gray-400 font-medium">Manage CRM table mapping and synchronization</p>
                    </div>
                </div>
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${showAddForm
                            ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    {showAddForm ? <CloseIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                    {showAddForm ? "Cancel" : "Add Entity"}
                </button>
            </div>

            {/* ADD NEW ENTITY FORM (Simple UI) */}
            {showAddForm && (
                <div className="bg-slate-50 border border-blue-100 p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300">
                    <form onSubmit={handleAddSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Display Name</label>
                            <input
                                required
                                className="w-full p-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                placeholder="e.g. Invoices"
                                value={newEntity.name}
                                onChange={(e) => setNewEntity({ ...newEntity, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Schema Name</label>
                            <input
                                required
                                className="w-full p-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                placeholder="cr45_invoice"
                                value={newEntity.schema}
                                onChange={(e) => setNewEntity({ ...newEntity, schema: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Status</label>
                            <select
                                className="w-full p-2.5 border rounded-xl outline-none bg-white"
                                value={newEntity.status}
                                onChange={(e) => setNewEntity({ ...newEntity, status: e.target.value })}
                            >
                                <option value="Active">Active</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-emerald-600 text-white h-[45px] rounded-xl font-bold hover:bg-emerald-700 flex items-center justify-center gap-2">
                            <CheckCircleIcon fontSize="small" /> Save Entity
                        </button>
                    </form>
                </div>
            )}

            {/* TABLE SECTION */}
            <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                <th className="p-5">Entity Name</th>
                                <th className="p-5">Schema Name</th>
                                <th className="p-5">Status</th>
                                <th className="p-5">Live Sync</th>
                                <th className="p-5 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {entities.map((ent, i) => (
                                <tr key={i} className="hover:bg-blue-50/20 transition-all group">
                                    <td className="p-5">
                                        <span className="font-bold text-gray-700">{ent.name}</span>
                                    </td>
                                    <td className="p-5">
                                        <code className="text-[11px] bg-gray-100 px-2 py-1 rounded text-gray-500 font-mono">
                                            {ent.schema}
                                        </code>
                                    </td>
                                    <td className="p-5">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${ent.status === 'Active'
                                                ? 'bg-green-50 text-green-600 border border-green-100'
                                                : 'bg-amber-50 text-amber-600 border border-amber-100'
                                            }`}>
                                            {ent.status}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <div
                                            onClick={() => toggleSync(i)}
                                            className={`w-11 h-6 rounded-full relative p-1 cursor-pointer transition-colors duration-300 ${ent.sync === 'Enabled' ? 'bg-blue-600' : 'bg-gray-300'
                                                }`}
                                        >
                                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 transform ${ent.sync === 'Enabled' ? 'translate-x-5' : 'translate-x-0'
                                                }`}></div>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex justify-center items-center gap-2">
                                            <button className="text-blue-600 hover:text-blue-800 text-xs font-bold px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => removeEntity(i)}
                                                className="text-gray-300 hover:text-red-500 transition-colors p-1"
                                            >
                                                <DeleteOutlineIcon fontSize="small" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* EMPTY STATE */}
                {entities.length === 0 && (
                    <div className="p-20 text-center">
                        <p className="text-gray-400 font-medium">No entities configured. Click "Add Entity" to begin.</p>
                    </div>
                )}
            </div>
        </div>
    );
}