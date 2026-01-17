import React, { useState, useEffect } from "react";
// Layout
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
// Pages
import Dashboard from "./components/pages/Dashboard";
import LicenseForm from "./components/pages/LicenseForm";
import LogPage from "./components/pages/LogPage";
import UserManual from "./components/pages/UserManual";
import PinnedItems from "./components/pages/PinnedItems";
import EntityConfiguration from "./components/pages/EntityConfiguration";
import Settings from "./components/pages/Settings";

export default function App()
{
  // 1. Navigation State
  const [activeTab, setActiveTab] = useState("Home");

  // 2. Data State with LocalStorage Persistence
  const [logs, setLogs] = useState(() =>
  {
    const saved = localStorage.getItem("crm_logs_master");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        firstName: "MOD",
        lastName: "Administrator",
        email: "admin@crm.io",
        crmUrl: "https://org.crm.dynamics.com",
        organization: "HQ Systems",
        submittedAt: new Date().toISOString()
      }
    ];
  });

  // 3. UI Feedback States
  const [showModal, setShowModal] = useState(false);
  const [lastEntry, setLastEntry] = useState(null);

  // Sync logs to localStorage whenever they change
  useEffect(() =>
  {
    localStorage.setItem("crm_logs_master", JSON.stringify(logs));
  }, [logs]);

  // 4. LOGIC: When License is activated
  const handleActivation = (formData) =>
  {
    const newLog = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };

    setLogs([newLog, ...logs]); // Update the master log list
    setLastEntry(newLog);       // Prepare the success modal data
    setShowModal(true);         // Open the modal
  };

  // 5. LOGIC: Page Router Mapper
  const renderPage = () =>
  {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {(() =>
        {
          switch (activeTab)
          {
            case "Home":
              return <Dashboard />;
            case "License Configuration":
              return <LicenseForm onActivate={handleActivation} />;
            case "Logs":
              return <LogPage logs={logs} onDelete={setLogs} />;
            case "User Manual":
              return <UserManual />;
            case "Pinned":
              return <PinnedItems />;
            case "Entity Configuration":
              return <EntityConfiguration />;
            case "Settings":
              return <Settings />;
            case "Recent":
              // We can show the same LogPage but filtered for "Today"
              return <LogPage logs={logs.slice(0, 3)} onDelete={setLogs} />;
            default:
              return <Dashboard />;
          }
        })()}
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full bg-[#f8faff] text-slate-800 font-sans overflow-hidden">

      {/* SIDEBAR: Controls activeTab */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col relative overflow-hidden">

        {/* NAVBAR: Dynamic header */}
        <Navbar setActiveTab={setActiveTab} />
        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>

      {/* SUCCESS MODAL POPUP */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-black text-center text-slate-800 mb-2">Activation Successful</h2>
            <p className="text-slate-500 text-center text-sm mb-8">
              License for <span className="font-bold text-slate-700">{lastEntry?.firstName}</span> has been provisioned and logged.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => { setShowModal(false); setActiveTab("Logs"); }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                View in Logs
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-slate-100 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}