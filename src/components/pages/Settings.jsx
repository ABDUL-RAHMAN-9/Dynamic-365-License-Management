import React, { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";

export default function Settings()
{
    // Navigation State
    const [activeTab, setActiveTab] = useState("general");

    // Master Data (The "Database" state)
    const [masterData, setMasterData] = useState({
        general: { orgName: "CRM.io Global", region: "North America", email: "admin@crm.io", website: "https://crm.io" },
        security: { twoFactor: true, dataEncryption: true, sessionTimeout: "30 mins" },
        notifications: { emailAlerts: true, pushNotifications: false, weeklyDigest: true },
    });

    // Current Working State (What the user sees/edits)
    const [formData, setFormData] = useState(JSON.parse(JSON.stringify(masterData)));

    // UI Status States
    const [isSaving, setIsSaving] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "" });

    // Handle Input Changes
    const handleInputChange = (section, field, value) =>
    {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    // Toast Helper
    const triggerToast = (msg, type = "success") =>
    {
        setToast({ show: true, message: msg, type });
        setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
    };

    // Functionality: Save Changes
    const handleSave = () =>
    {
        setIsSaving(true);
        // Simulate API Call
        setTimeout(() =>
        {
            setMasterData(JSON.parse(JSON.stringify(formData))); // Commit changes
            setIsSaving(false);
            triggerToast("Changes saved successfully!");
        }, 800);
    };

    // Functionality: Cancel (Revert)
    const handleCancel = () =>
    {
        setFormData(JSON.parse(JSON.stringify(masterData))); // Revert to master data
        triggerToast("Changes discarded", "info");
    };

    return (
        <div className="relative min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-900">
            {/* SUCCESS/INFO TOAST */}
            {toast.show && (
                <div className={`fixed top-10 right-10 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-top-5 duration-300 ${toast.type === "success" ? "bg-emerald-500 text-white" : "bg-slate-800 text-white"
                    }`}>
                    <CheckCircleOutlineIcon />
                    <span className="font-bold text-sm">{toast.message}</span>
                </div>
            )}

            <div className="max-w-6xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-black tracking-tight text-slate-800">System Settings</h1>
                    <p className="text-slate-500 mt-2 font-medium">Configure and manage your organization workspace</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT SIDEBAR (The Back Three Buttons) */}
                    <nav className="lg:col-span-4 flex flex-col gap-3">
                        <NavButton
                            active={activeTab === "general"}
                            onClick={() => setActiveTab("general")}
                            icon={<CloudSyncIcon />}
                            label="General Information"
                            activeColor="bg-blue-600"
                        />
                        <NavButton
                            active={activeTab === "security"}
                            onClick={() => setActiveTab("security")}
                            icon={<SecurityIcon />}
                            label="Security & Privacy"
                            activeColor="bg-indigo-600"
                        />
                        <NavButton
                            active={activeTab === "notifications"}
                            onClick={() => setActiveTab("notifications")}
                            icon={<NotificationsIcon />}
                            label="Notification Prefs"
                            activeColor="bg-orange-500"
                        />
                    </nav>

                    {/* RIGHT SIDE CUSTOMIZATION BOXES */}
                    <main className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-400 overflow-hidden flex flex-col min-h-[550px]">
                        <div className="p-8 md:p-12 flex-grow">
                            {activeTab === "general" && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <SectionHeader title="Organization Details" description="Update your company profile and regional localization." />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        <InputBox label="Organization Name" value={formData.general.orgName} onChange={(v) => handleInputChange("general", "orgName", v)} />
                                        <InputBox label="Region" value={formData.general.region} onChange={(v) => handleInputChange("general", "region", v)} />
                                        <InputBox label="Primary Admin Email" fullWidth value={formData.general.email} onChange={(v) => handleInputChange("general", "email", v)} />
                                        <InputBox label="Website URL" fullWidth value={formData.general.website} onChange={(v) => handleInputChange("general", "website", v)} />
                                    </div>
                                </div>
                            )}

                            {activeTab === "security" && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <SectionHeader title="Security Controls" description="Manage authentication protocols and data safety." />
                                    <div className="mt-8 space-y-4">
                                        <ToggleTile
                                            title="Two-Factor Authentication"
                                            desc="Require a mobile code for every login attempt."
                                            checked={formData.security.twoFactor}
                                            onChange={(v) => handleInputChange("security", "twoFactor", v)}
                                        />
                                        <ToggleTile
                                            title="End-to-End Encryption"
                                            desc="All database entries will be encrypted using AES-256."
                                            checked={formData.security.dataEncryption}
                                            onChange={(v) => handleInputChange("security", "dataEncryption", v)}
                                        />
                                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-400">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inactivity Timeout</label>
                                            <select
                                                value={formData.security.sessionTimeout}
                                                onChange={(e) => handleInputChange("security", "sessionTimeout", e.target.value)}
                                                className="w-full mt-2 bg-white border-none rounded-xl p-3 text-sm font-bold text-slate-700 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-500"
                                            >
                                                <option>15 mins</option>
                                                <option>30 mins</option>
                                                <option>1 hour</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "notifications" && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <SectionHeader title="Push & Email Prefs" description="Control how our system interacts with your team." />
                                    <div className="mt-8 space-y-4">
                                        <NotificationItem
                                            title="Email Notifications"
                                            desc="Send daily activity summaries to admin email."
                                            active={formData.notifications.emailAlerts}
                                            onClick={() => handleInputChange("notifications", "emailAlerts", !formData.notifications.emailAlerts)}
                                        />
                                        <NotificationItem
                                            title="Weekly Digest"
                                            desc="A comprehensive report sent every Monday morning."
                                            active={formData.notifications.weeklyDigest}
                                            onClick={() => handleInputChange("notifications", "weeklyDigest", !formData.notifications.weeklyDigest)}
                                        />
                                        <NotificationItem
                                            title="Desktop Alerts"
                                            desc="Real-time browser notifications for mentions."
                                            active={formData.notifications.pushNotifications}
                                            onClick={() => handleInputChange("notifications", "pushNotifications", !formData.notifications.pushNotifications)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ACTION FOOTER */}
                        <div className="p-8 bg-slate-50/50 border-t border-slate-400 flex items-center gap-4">
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="flex items-center justify-center gap-2 bg-[#0a1334] text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                            >
                                {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <SaveIcon fontSize="small" />}
                                {isSaving ? "Saving..." : "Save Changes"}
                            </button>

                            <button
                                onClick={handleCancel}
                                className="flex items-center gap-2 text-slate-400 border border-slate-300 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-600 transition-all  hover:border-slate-400"
                            >
                                <RestartAltIcon fontSize="small" />
                                Cancel
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

// SUB-COMPONENTS FOR CLEANER CODE

const NavButton = ({ active, onClick, icon, label, activeColor }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-4 p-5 rounded-3xl transition-all duration-300 group ${active ? `${activeColor} text-white shadow-xl scale-[1.03]` : "bg-white text-slate-400 hover:bg-slate-200 hover:text-slate-600 border border-slate-300"
            }`}
    >
        <div className={active ? "text-white" : "text-slate-300 group-hover:text-slate-500"}>{icon}</div>
        <span className="font-bold text-sm tracking-tight">{label}</span>
    </button>
);

const SectionHeader = ({ title, description }) => (
    <div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h2>
        <p className="text-slate-400 text-sm font-medium mt-1">{description}</p>
    </div>
);

const InputBox = ({ label, value, onChange, fullWidth = false }) => (
    <div className={`space-y-2 ${fullWidth ? "md:col-span-2" : ""}`}>
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 text-slate-700 font-bold outline-none transition-all focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5"
        />
    </div>
);

const ToggleTile = ({ title, desc, checked, onChange }) => (
    <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-400 hover:border-indigo-100 transition-all">
        <div>
            <h4 className="font-bold text-slate-800">{title}</h4>
            <p className="text-xs text-slate-400 font-medium">{desc}</p>
        </div>
        <button
            onClick={() => onChange(!checked)}
            className={`w-14 h-8 rounded-full relative transition-all duration-300 ${checked ? 'bg-indigo-600' : 'bg-slate-300'}`}
        >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-sm ${checked ? 'left-7' : 'left-1'}`} />
        </button>
    </div>
);

const NotificationItem = ({ title, desc, active, onClick }) => (
    <div
        onClick={onClick}
        className={`cursor-pointer flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${active ? 'bg-orange-50/50 border-orange-200' : 'bg-white border-slate-100 hover:border-slate-400'
            }`}
    >
        <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${active ? 'bg-orange-500 animate-pulse' : 'bg-slate-200'}`} />
            <div>
                <h4 className={`font-bold ${active ? 'text-orange-900' : 'text-slate-800'}`}>{title}</h4>
                <p className="text-xs text-slate-400 font-medium">{desc}</p>
            </div>
        </div>
        <input type="checkbox" checked={active} readOnly className="w-5 h-5 accent-orange-500" />
    </div>
);