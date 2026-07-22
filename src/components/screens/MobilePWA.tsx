'use client'

import { useState } from "react";
import { Search, MapPin, Camera, Bell, Wallet, Home, Target, Plus, Activity, User, ChevronRight, CheckCircle2, ShieldCheck, ArrowLeft, RefreshCw } from "lucide-react";

export function CitizenMobileApp() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'misi' | 'lapor' | 'aktivitas' | 'profil'>('beranda');
  const [activeMissionDetail, setActiveMissionDetail] = useState<number | null>(null);

  const missions = [
    {
      id: 1,
      type: "Pelaporan Jalan Rusak",
      location: "Jl. Diponegoro",
      distance: "2.4 km",
      rewardPts: "500 Pts",
      rewardRp: "Rp 15k",
      statusPercent: 45,
      img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80",
      category: "Jalan Rusak",
    },
    {
      id: 2,
      type: "Verifikasi Bantuan Sosial (BPNT)",
      subtitle: "Laporan Penyaluran RT 05",
      isActive: true,
      distance: "1.2 km",
      rewardPts: "350 Pts",
      rewardRp: "Rp 10k",
      statusPercent: 72,
      img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80",
      category: "Bansos BPNT",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-0 sm:p-4 font-sans text-slate-800">
      {/* Mobile Outer Container Simulation */}
      <div className="w-full max-w-md bg-white min-h-screen sm:min-h-[844px] sm:max-h-[844px] sm:rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border border-slate-200">
        {/* Top Floating User & Wallet Bar (Matches Image 2 Sample Exactly) */}
        <div className="p-5 pt-8 bg-slate-50 border-b border-slate-100 relative">
          <div className="flex items-center justify-between">
            {/* User Greeting */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center font-bold text-slate-700 text-lg">
                <User className="w-7 h-7 text-slate-500" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">Halo,</span>
                <h2 className="text-xl font-black text-slate-900 leading-tight">Andi!</h2>
              </div>
            </div>

            {/* Floating Points & E-Voucher Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 shadow-sm space-y-1 min-w-[170px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Wallet className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] text-slate-500 font-semibold">Points:</span>
                </div>
                <span className="text-xs font-black text-slate-900 font-mono">4,750 Pts</span>
                <div className="relative">
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                <div className="leading-tight">
                  <span className="text-[9px] text-slate-400 block font-medium">E-Voucher Koperasi:</span>
                  <span className="text-xs font-black text-slate-900 font-mono">Rp 125.000</span>
                </div>
                <button
                  onClick={() => alert("E-Voucher Koperasi Merah Putih aktif! Dapat ditukarkan di Koperasi mitra.")}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-[9px] font-bold border border-slate-300"
                >
                  Beli Voucher
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari Misi atau Lapor Isu..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-6 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Misi Sekitar</h3>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
              Lihat Semua <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Mission Cards (Matches Image 2 Proposal Sample Exactly) */}
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm relative overflow-hidden space-y-3"
            >
              {/* Red Corner Ribbon */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="bg-red-600 w-12 h-3 transform rotate-45 translate-x-3 -translate-y-1 shadow-xs" />
              </div>

              <div className="flex gap-3">
                <img
                  src={mission.img}
                  alt={mission.type}
                  className="w-24 h-24 rounded-2xl object-cover border border-slate-100 shrink-0"
                />
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                    Mission
                  </span>
                  <h4 className="text-sm font-black text-slate-900 leading-snug line-clamp-2">
                    {mission.type}: {mission.location || mission.subtitle}
                  </h4>

                  {mission.isActive && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      🟢 Active
                    </span>
                  )}

                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{mission.distance}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-black text-slate-900">
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-amber-900 flex items-center justify-center text-[10px] font-bold">
                      P
                    </span>
                    <span>{mission.rewardPts} / {mission.rewardRp}</span>
                  </div>
                </div>
              </div>

              {/* Progress & Action Button */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                    <span>{mission.isActive ? "Verifikasi" : "Status"}</span>
                    <span>{mission.statusPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${mission.statusPercent}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => alert(`Misi "${mission.type}" dibuka! Kamera & GPS Tagging aktif.`)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/20 shrink-0"
                >
                  {mission.isActive ? "Lihat Detail" : "Kerjakan Misi"}
                </button>
              </div>
            </div>
          ))}

          {/* Inclusive Peer Verification Banner for Elders */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-2xl shadow-sm space-y-1">
            <span className="text-[9px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white inline-block">
              Inklusi Digital Lansia
            </span>
            <h4 className="text-xs font-bold">Fitur Peer Verification Tetangga</h4>
            <p className="text-[11px] text-blue-100 leading-snug">
              Bantu lansia/kelompok buta aksara digital memverifikasi bansos di sekitar Anda dan dapatkan bonus poin bersama.
            </p>
          </div>
        </div>

        {/* Floating Bottom Navigation Bar (Matches Image 2 Sample Exactly) */}
        <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-between z-30 shadow-lg">
          {/* Beranda */}
          <button
            onClick={() => setActiveTab('beranda')}
            className="flex flex-col items-center gap-1 text-slate-900 relative"
          >
            <Home className="w-5 h-5 text-red-600" />
            <span className="text-[10px] font-bold text-slate-900">Beranda</span>
            <div className="w-6 h-0.5 bg-red-600 rounded-full absolute -top-2" />
          </button>

          {/* Misi */}
          <button
            onClick={() => setActiveTab('misi')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-700"
          >
            <Target className="w-5 h-5" />
            <span className="text-[10px] font-bold">Misi</span>
          </button>

          {/* Floating Center '+' Button */}
          <div className="-mt-6">
            <button
              onClick={() => alert("Form Pelaporan Isu Lapangan Baru / Citizen Mining Dibuat.")}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 border-4 border-white hover:scale-105 transition-transform"
            >
              <Plus className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Aktivitas */}
          <button
            onClick={() => setActiveTab('aktivitas')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-700"
          >
            <Activity className="w-5 h-5" />
            <span className="text-[10px] font-bold">Aktivitas</span>
          </button>

          {/* Profil */}
          <button
            onClick={() => setActiveTab('profil')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-700"
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CitizenMobileApp;
