import React, { useState, useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import BoltIcon from "@mui/icons-material/Bolt";

export default function Dashboard()
{
  // 1. Data Definitions
  const dailyData = [
    { name: "A01", value: 35 },
    { name: "A02", value: 85 },
    { name: "A03", value: 25 },
    { name: "A04", value: 75 },
  ];

  const monthlyData = [
    { name: "A01", value: 100 },
    { name: "A02", value: 40 },
    { name: "A03", value: 60 },
    { name: "A04", value: 10 },
  ];

  // 2. States
  const [filter, setFilter] = useState("Daily");
  const [activeData, setActiveData] = useState(dailyData);
  const [requests, setRequests] = useState(1284);
  const [teamLoad, setTeamLoad] = useState(89);

  // 3. Switch data when filter changes
  useEffect(() =>
  {
    if (filter === "Daily")
    {
      setActiveData(dailyData);
    } else
    {
      setActiveData(monthlyData);
    }
  }, [filter]);

  // 4. Live Jitter Animation
  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      setRequests(prev => prev + Math.floor(Math.random() * 10) - 5);
      setTeamLoad(prev =>
      {
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return next > 100 ? 99 : next < 80 ? 81 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-1000 p-2">

      {/* HEADER WITH TOGGLE */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight">System Overview</h1>
          <p className="text-sm text-gray-400 font-medium italic tracking-wide">Manager Dashboard • {filter} View</p>
        </div>

        {/* Shadow added to Toggle Container */}
        <div className="flex gap-2 bg-white p-1.5 rounded-2xl shadow-lg border border-gray-200">
          <button
            onClick={() => setFilter("Daily")}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 ${filter === "Daily" ? "bg-blue-600 text-white shadow-md shadow-blue-300" : "text-gray-400 hover:bg-gray-50"
              }`}
          >
            Daily
          </button>
          <button
            onClick={() => setFilter("Monthly")}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 ${filter === "Monthly" ? "bg-blue-600 text-white shadow-md shadow-blue-300" : "text-gray-400 hover:bg-gray-50"
              }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* GRAPH 1: ACTIVE CASES (Shadow XL added) */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-200 min-h-[350px] hover:shadow-2xl transition-all duration-500">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Active Cases / Agent</h3>
              <p className="text-[10px] text-blue-500 font-bold mt-1 uppercase italic tracking-tighter">{filter} Load</p>
            </div>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100">
              <TrendingUpIcon fontSize="small" />
            </div>
          </div>

          <div className="flex items-end h-44 gap-4 px-2 overflow-hidden">
            {activeData.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                <div
                  className="w-full bg-blue-500 rounded-2xl transition-all duration-700 ease-out shadow-md group relative cursor-pointer hover:bg-blue-600"
                  style={{ height: `${item.value}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-lg">
                    {item.value} Cases
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-black">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GRAPH 2: CSAT (Shadow XL added) */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-200 min-h-[350px] hover:shadow-2xl transition-all duration-500">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-10">Resolved Cases CSAT</h3>
          <div className="flex items-end h-44 gap-4 px-2">
            <div className="flex-1 bg-orange-400 h-[35%] rounded-2xl shadow-sm"></div>
            <div className="flex-1 bg-purple-500 h-[75%] rounded-2xl shadow-sm"></div>
            <div className="flex-1 bg-green-500 h-[100%] rounded-2xl shadow-sm"></div>
          </div>
          <div className="mt-6 flex justify-between text-[10px] font-black text-gray-300 uppercase tracking-tighter">
            <span>Minimum</span>
            <span>Target</span>
            <span>Peak</span>
          </div>
        </div>

        {/* GRAPH 3: TEAM UTILIZATION (Shadow XL added) */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-200 min-h-[350px] flex flex-col items-center justify-center group hover:shadow-2xl transition-all duration-500">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest self-start mb-10">System Load</h3>
          <div className="relative flex items-center justify-center">
            <div className="w-44 h-44 rounded-full border-[18px] border-gray-100 shadow-inner"></div>
            <div
              className="absolute w-44 h-44 rounded-full border-[18px] border-blue-500 border-l-transparent animate-spin-slow"
              style={{ opacity: teamLoad / 100 }}
            ></div>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black text-blue-900 tracking-tighter tabular-nums">{teamLoad}%</span>
              <span className="text-[10px] text-gray-400 font-black uppercase mt-1 tracking-widest">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER BIG BOXES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BIG BOX 1: WHITE BOX (Shadow XL added) */}
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-200 overflow-hidden relative group hover:shadow-2xl transition-all duration-500">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest">Live API Pulse</h3>
            <div className="bg-green-100 text-green-600 px-4 py-2 rounded-2xl text-[10px] font-black animate-pulse border border-green-200">LIVE DATA</div>
          </div>
          <div className="flex items-center gap-12 mb-8">
            <div>
              <span className="text-5xl font-black text-blue-600 tracking-tighter tabular-nums">{requests.toLocaleString()}</span>
              <p className="text-[10px] text-gray-400 uppercase font-black mt-1">Packets / Sec</p>
            </div>
            <div className="h-10 w-[1px] bg-gray-200"></div>
            <div>
              <span className="text-5xl font-black text-purple-600 tracking-tighter">99.9%</span>
              <p className="text-[10px] text-gray-400 uppercase font-black mt-1">Uptime</p>
            </div>
          </div>
          <div className="h-32 w-full mt-6 scale-110">
            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path d="M0 50 Q 50 20, 100 50 T 200 50 T 300 50 T 400 50 V 100 H 0 Z" fill="url(#gradient)" className="animate-wave" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 50 Q 50 20, 100 50 T 200 50 T 300 50 T 400 50" fill="none" stroke="#3b82f6" strokeWidth="4" className="animate-wave-line" />
            </svg>
          </div>
        </div>

        {/* BIG BOX 2: DARK BOX (Already has 2xl, added extra glow) */}
        <div className="bg-[#0a1334] p-10 rounded-[3rem] shadow-2xl text-white border border-white/10 group hover:shadow-blue-900/40 transition-all duration-500">
          <h3 className="text-sm font-black text-blue-300 uppercase tracking-widest mb-8">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 shadow-inner">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                  <span className="text-xs font-bold tracking-tight">System Synchronized Node {i + 1}</span>
                </div>
                <span className="text-[10px] text-gray-500 italic font-medium">{i + 2}m ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}