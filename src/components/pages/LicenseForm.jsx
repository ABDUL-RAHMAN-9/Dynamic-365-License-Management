import React, { useState } from "react";
import DynamicLogo from "../../assets/Dynamic_Logo.png";
import LinkIcon from "@mui/icons-material/Link";

export default function LicenseForm({ onActivate })
{
    const [form, setForm] = useState({
        firstName: "", lastName: "", companyName: "", email: "",
        website: "", mainPhone: "", crmUrl: "", organization: "",
        from: "", to: "", interval: "day", checkbox: false
    });

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        onActivate({ ...form, submittedAt: new Date().toISOString() });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded shadow-lg p-6 md:p-10 animate-in slide-in-from-bottom-5">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
                <img src={DynamicLogo} alt="Logo" className="h-16" />
                <div className="flex gap-3">
                    <button onClick={handleSubmit} className="bg-[#228B22] text-white px-6 py-2 rounded font-bold hover:bg-green-700 transition shadow-md">ACTIVATE</button>
                    <button className="flex items-center gap-1 text-gray-400 font-bold text-xs uppercase hover:text-blue-600 transition">
                        <LinkIcon fontSize="small" /> Send Request
                    </button>
                </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2"><h2 className="text-blue-900 font-bold border-b pb-2">Registrant Information</h2></div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">First Name *</label>
                    <input className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Last Name *</label>
                    <input className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Email Address *</label>
                    <input type="email" className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">CRM URL *</label>
                    <input className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://org.crm.dynamics.com" required value={form.crmUrl} onChange={e => setForm({ ...form, crmUrl: e.target.value })} />
                </div>

                <div className="col-span-1 md:col-span-2 mt-4 flex items-center gap-4 bg-blue-50 p-4 rounded border border-blue-100">
                    <input type="checkbox" className="w-5 h-5" checked={form.checkbox} onChange={e => setForm({ ...form, checkbox: e.target.checked })} />
                    <p className="text-xs text-blue-800 font-medium">I agree to notify Inagic about licensing issues and accept terms.</p>
                </div>
            </form>
        </div>
    );
}