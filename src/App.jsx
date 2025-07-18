import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import LicenseForm from "./components/LicenseForm";
import SuccessModal from "./components/SuccessModal";
import LogPage from "./components/LogPage";

export default function App()
{
  // Load logs from localStorage initially or default to empty array
  const [logs, setLogs] = useState(() =>
  {
    const savedLogs = localStorage.getItem("licenseLogs");
    return savedLogs ? JSON.parse(savedLogs) : [];
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Administration");
  const [activeItem, setActiveItem] = useState("License Configuration");

  // Whenever logs change, save to localStorage
  useEffect(() =>
  {
    localStorage.setItem("licenseLogs", JSON.stringify(logs));
  }, [logs]);

  const handleAddLog = (data) =>
  {
    setLogs((prev) => [data, ...prev]);
    setModalOpen(true);
    setActiveSection("Analysis");
    setActiveItem("Logs");
  };
  const handleDeleteLog = (index) =>
  {
    setLogs((prevLogs) => prevLogs.filter((_, i) => i !== index));
  };


  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 overflow-hidden bg-gray-100">
          <Sidebar
            open={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            logs={logs}
            activeSection={activeSection}
            activeItem={activeItem}
            setActiveSection={setActiveSection}
            setActiveItem={setActiveItem}
          />

          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/license" />} />
              <Route path="/license" element={<LicenseForm onSubmitSuccess={handleAddLog} />} />
              <Route path="/logs" element={<LogPage logs={logs} onDeleteLog={handleDeleteLog} />} />
              <Route path="*" element={<div className="flex items-center justify-center h-full">
                <span className="text-red-500 text-xl font-semibold">Page not found</span>
              </div>} />
            </Routes>
          </main>
        </div>

        <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </Router>
  );
}
