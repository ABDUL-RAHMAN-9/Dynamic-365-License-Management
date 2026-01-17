import React, { useState, useEffect, useMemo } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SaveIcon from "@mui/icons-material/Save";

// 1. MOVE DATA DEFINITIONS OUTSIDE THE COMPONENT
const DATA_SETS = {
  Daily: {
    cases: [
      { name: "Mon", value: 35 },
      { name: "Tue", value: 85 },
      { name: "Wed", value: 45 },
      { name: "Thu", value: 75 },
    ],
    csat: { min: 40, target: 70, peak: 92 }
  },
  Monthly: {
    cases: [
      { name: "W1", value: 90 },
      { name: "W2", value: 40 },
      { name: "W3", value: 65 },
      { name: "W4", value: 20 },
    ],
    csat: { min: 20, target: 55, peak: 85 }
  }
};

export default function Dashboard()
{
  const [filter, setFilter] = useState("Daily");
  const [requests, setRequests] = useState(1284);
  const [teamLoad, setTeamLoad] = useState(82);

  // 2. Now useMemo only needs [filter] as a dependency
  const activeData = useMemo(() => DATA_SETS[filter], [filter]);

  // 4. Live Jitter Animation Logic
  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      // Fluctuate Requests
      setRequests(prev => prev + Math.floor(Math.random() * 11) - 5);

      // Fluctuate Team Load (keep between 60% and 98%)
      setTeamLoad(prev =>
      {
        const move = Math.random() > 0.5 ? 1 : -1;
        const next = prev + move;
        return next > 98 ? 97 : next < 60 ? 61 : next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 p-4 lg:p-8 bg-[#fcfcfd]">

      {/* HEADER WITH TOGGLE */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">System Overview</h1>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">
            Real-time Operations • <span className="text-blue-600">{filter} Analytics</span>
          </p>
        </div>

        <div className="flex gap-1 bg-white p-1.5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
          {["Daily", "Monthly"].map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`px-8 py-2.5 rounded-xl text-xs font-black transition-all duration-300 ${filter === mode
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* GRAPH 1: ACTIVE CASES */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[380px] hover:translate-y-[-4px] transition-all duration-500">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Active Cases / Agent</h3>
              <p className="text-lg font-bold text-slate-800 mt-1">Workload Distribution</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100">
              <TrendingUpIcon />
            </div>
          </div>

          <div className="flex items-end h-48 gap-4 px-2">
            {activeData.cases.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full justify-end">
                <div
                  className="w-full bg-blue-600 rounded-2xl transition-all duration-1000 ease-out shadow-lg shadow-blue-100 group relative cursor-pointer hover:bg-blue-700"
                  style={{ height: `${item.value}%` }}
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 whitespace-nowrap z-50 shadow-2xl">
                    {item.value} ACTIVE
                  </div>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GRAPH 2: CSAT SCALING */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[380px] hover:translate-y-[-4px] transition-all duration-500">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Resolved Cases CSAT</h3>
            <AssessmentIcon className="text-slate-200" />
          </div>
          <div className="flex items-end h-48 gap-4 px-2">
            <div style={{ height: `${activeData.csat.min}%` }} className="flex-1 bg-orange-400 rounded-2xl shadow-lg shadow-orange-100 transition-all duration-1000"></div>
            <div style={{ height: `${activeData.csat.target}%` }} className="flex-1 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-100 transition-all duration-1000"></div>
            <div style={{ height: `${activeData.csat.peak}%` }} className="flex-1 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-100 transition-all duration-1000"></div>
          </div>
          <div className="mt-8 flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span className="bg-slate-50 px-2 py-1 rounded">Min</span>
            <span className="bg-slate-50 px-2 py-1 rounded">Target</span>
            <span className="bg-slate-50 px-2 py-1 rounded">Peak</span>
          </div>
        </div>

        {/* GRAPH 3: TEAM UTILIZATION */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[380px] flex flex-col items-center justify-center group hover:translate-y-[-4px] transition-all duration-500">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] self-start mb-10">System Load</h3>
          <div className="relative flex items-center justify-center">
            {/* Background Track */}
            <svg className="w-48 h-48 transform -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-50" />
              <circle
                cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent"
                strokeDasharray={502}
                strokeDashoffset={502 - (502 * teamLoad) / 100}
                className="text-blue-600 transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-5xl font-black text-slate-800 tracking-tighter tabular-nums">{teamLoad}%</span>
              <span className="text-[10px] text-blue-500 font-black uppercase mt-1 tracking-widest animate-pulse">Processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* API PULSE */}
        <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden relative group">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-[0.2em]">Live API Pulse</h3>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-[10px] font-black border border-emerald-100">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
              SYSTEM OPERATIONAL
            </div>
          </div>

          <div className="flex items-center gap-12 mb-10 relative z-10">
            <div>
              <span className="text-6xl font-black text-slate-800 tracking-tighter tabular-nums">{requests.toLocaleString()}</span>
              <p className="text-[10px] text-slate-400 uppercase font-black mt-2 tracking-widest">Packets / Sec</p>
            </div>
            <div className="h-14 w-[2px] bg-slate-100"></div>
            <div>
              <span className="text-6xl font-black text-indigo-600 tracking-tighter">99.9<span className="text-2xl text-indigo-300">%</span></span>
              <p className="text-[10px] text-slate-400 uppercase font-black mt-2 tracking-widest">Uptime Score</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 opacity-40">
            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path d="M0 80 Q 50 20, 100 80 T 200 80 T 300 80 T 400 80 V 100 H 0 Z" fill="url(#blueGradient)" />
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-[#0a1334] p-10 rounded-[3rem] shadow-2xl text-white border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <h3 className="text-xs font-black text-blue-300 uppercase tracking-[0.2em] mb-10">Critical Event Log</h3>
          <div className="space-y-4 relative z-10">
            {[
              { label: "License Validation Node 04", time: "2m ago", status: "success" },
              { label: "CRM Sync Hook: Microsoft D365", time: "5m ago", status: "success" },
              { label: "API Rate Limit Adjusted", time: "14m ago", status: "warning" },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-[1.5rem] hover:bg-white/10 transition-all border border-white/5 group/item">
                <div className="flex items-center gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${log.status === 'success' ? 'bg-blue-500 shadow-[0_0_12px_#3b82f6]' : 'bg-amber-500 shadow-[0_0_12px_#f59e0b]'}`}></div>
                  <span className="text-xs font-bold text-slate-200 group-hover/item:text-white transition-colors">{log.label}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}