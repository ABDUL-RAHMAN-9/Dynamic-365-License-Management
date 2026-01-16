import React, { useState } from "react";
// Layout Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
// Page Components
import Dashboard from "./components/pages/Dashboard";
import LicenseForm from "./components/pages/LicenseForm";
import LogPage from "./components/pages/LogPage";
import UserManual from "./components/pages/UserManual";
import PinnedItems from "./components/pages/PinnedItems";
import EntityConfiguration from "./components/pages/EntityConfiguration";
import Settings from "./components/pages/Settings";
import Placeholder from "./components/pages/Placeholder";
// UI Components
import SuccessModal from "./components/ui/SuccessModal";

export default function App()
{
  // Navigation State - Matches Sidebar 'name' properties exactly
  const [activeTab, setActiveTab] = useState("Home");

  // Data State
  const [showModal, setShowModal] = useState(false);
  const [lastEntry, setLastEntry] = useState(null);
  const [logs, setLogs] = useState([
    {
      id: 1,
      firstName: "Admin",
      lastName: "User",
      companyName: "CRM.io HQ",
      email: "admin@crm.io",
      crmUrl: "org.crm.dynamics.com",
      organization: "Global",
      interval: "month",
      submittedAt: new Date().toISOString()
    }
  ]);

  // Logic: When License is activated
  const handleActivation = (formData) =>
  {
    const newLog = { ...formData, id: Date.now() };
    setLogs([newLog, ...logs]); // Adds new data to the top of logs
    setLastEntry(newLog);       // Sets data for the Success Modal
    setShowModal(true);         // Triggers the popup
  };

  // Logic: Page Router
  const renderPage = () =>
  {
    // We wrap every page in a div with an animation class for a "smooth entry"
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              return <Placeholder title="Recent Activities" setActiveTab={setActiveTab} />;
            default:
              return <Dashboard />;
          }
        })()}
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full bg-[#f8faff] text-gray-800 font-sans overflow-hidden">

      {/* 1. LEFT SIDEBAR: Fixed width, Dark Navy CRM Style */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. RIGHT CONTENT AREA: Navbar + Main Scrollable Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">

        {/* TOP NAVBAR: Glassmorphism Effect */}
        <Navbar />

        {/* MAIN PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="max-w-[1600px] mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>

      {/* 3. MODALS & OVERLAYS */}
      {showModal && (
        <SuccessModal
          data={lastEntry}
          onClose={() => setShowModal(false)}
          onGoToLogs={() =>
          {
            setShowModal(false);
            setActiveTab("Logs"); // Switches tab automatically
          }}
        />
      )}
    </div>
  );
}