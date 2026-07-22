'use client'

import { useState } from "react";
import { Search, Bell, Download, ChevronDown, FileText, ExternalLink, Calendar, LogOut, Info, RefreshCw } from "lucide-react";

export default function DashboardScreen({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [activePeriod, setActivePeriod] = useState("Q3 2024");
  const [activeMonth, setActiveMonth] = useState("Mar 2024");

  const tableItems = [
    {
      id: "AK304...8",
      description: "Laptop Administrasi",
      spec: "i7/16GB/512GB",
      unit: "Unit",
      vol: 350,
      apbdUnit: "Rp 16.5M",
      apbdTotal: "Rp 10.5M",
      eKatalogUnit: "Rp 10.85M",
      diff: "52%",
      riskStatus: "Markup Tinggi",
      riskLevel: "red",
    },
    {
      id: "AK304...8",
      description: "Kendaraan Dinas",
      spec: "SUV 2.5L, 32 Core...",
      unit: "Unit",
      vol: 15,
      apbdUnit: "Rp 13.8M",
      apbdTotal: "Rp 13.5M",
      eKatalogUnit: "Rp 10.3M",
      diff: "18%",
      riskStatus: "Sedang",
      riskLevel: "amber",
    },
    {
      id: "AK304...7",
      description: "Server Rak, dll",
      spec: "i7/16GB/32 Core...",
      unit: "Unit",
      vol: 10,
      apbdUnit: "Rp 10.3M",
      apbdTotal: "Rp 14.5M",
      eKatalogUnit: "Rp 10.8M",
      diff: "4%",
      riskStatus: "Normal",
      riskLevel: "green",
    },
    {
      id: "AK304...8",
      description: "Laptop Administrasi",
      spec: "SUV 2.5L, 32 Core...",
      unit: "Unit",
      vol: 10,
      apbdUnit: "Rp 15.3M",
      apbdTotal: "Rp 10.8M",
      eKatalogUnit: "Rp 10.2M",
      diff: "4%",
      riskStatus: "Potensi markup",
      riskLevel: "potensi",
    },
    {
      id: "AK304...9",
      description: "Kendaraan Dinas",
      spec: "i7/16GB/512GB, ...",
      unit: "Unit",
      vol: 10,
      apbdUnit: "Rp 16.5M",
      apbdTotal: "Rp 10.8M",
      eKatalogUnit: "Rp 10.2M",
      diff: "3%",
      riskStatus: "Potensi markup",
      riskLevel: "potensi",
    },
  ];

  return (
    <div className="space-y-6 max-w-full pb-20">
      {/* Top Bar: Search, Notifications, User Info (Matches Image 1 Proposal Sample Exactly) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search reports, entities..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-medium"
          />
        </div>

        {/* User Pill & Notifications */}
        <div className="flex items-center justify-between md:justify-end gap-5">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-black flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="w-9 h-9 rounded-full bg-slate-200 border border-slate-300 overflow-hidden flex items-center justify-center font-bold text-slate-800 text-xs">
              DP
            </div>
            <div className="text-left leading-tight">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-slate-900 text-xs">Dita Pratiwi</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <span className="text-[10px] text-slate-500 font-semibold block">Auditor Senior</span>
              <span className="text-[9px] text-slate-400 font-mono block">ID: 19851024</span>
            </div>
            <button className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors ml-1">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Title & Action Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            Pemonitoran & Analisis APBD vs e-Katalog
          </h2>
          <p className="text-xs font-medium text-slate-500 mt-1">Sistem Evaluasi Pengadaan Barang & Jasa Daerah Berbasis AI Price Oracle</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Dropdowns */}
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-extrabold text-slate-800 hover:bg-slate-50 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{activePeriod}</span>
          </button>
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-extrabold text-slate-800 hover:bg-slate-50 shadow-xs">
            <span>{activeMonth}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {/* Unduh Laporan Button */}
          <a
            href="/Proposal_Final_Kawal_Rupiah.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-extrabold text-slate-900 hover:bg-slate-50 shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>Unduh Laporan</span>
          </a>
        </div>
      </div>

      {/* Top 4 KPI Cards (Matches Image 1 Proposal Sample Exactly) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Anggaran APBD */}
        <div className="gov-card p-5">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">Total Anggaran APBD</span>
          <p className="text-2xl lg:text-3xl font-black text-slate-900 mt-2 font-data">Rp 12.8 T</p>
        </div>

        {/* Card 2: Total Realisasi */}
        <div className="gov-card p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Total Realisasi</span>
            <span className="text-[10px] text-slate-400 font-mono">in</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <p className="text-2xl lg:text-3xl font-black text-slate-900 font-data">Rp 7.4 T</p>
            <span className="text-xs font-extrabold text-blue-600 font-mono">57.8%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: '57.8%' }} />
          </div>
        </div>

        {/* Card 3: Potensi Penghematan */}
        <div className="gov-card p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Potensi Penghematan</span>
            <span className="text-[10px] text-slate-400 font-mono">↻</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <p className="text-2xl lg:text-3xl font-black text-slate-900 font-data">Rp 298.4 M</p>
            <span className="text-xs font-extrabold text-emerald-600 font-mono">74%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '74%' }} />
          </div>
        </div>

        {/* Card 4: Tingkat Risiko Deviasi (Speedometer Gauge) */}
        <div className="gov-card p-5 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">Tingkat Risiko Deviasi</span>
              <p className="text-xl font-black text-amber-500 mt-1 leading-tight">
                Medium-<br />High
              </p>
            </div>
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
          </div>

          {/* Semi-circle Gauge Arc (68%) */}
          <div className="absolute right-4 bottom-3 w-16 h-16 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="4"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="4"
                strokeDasharray="68, 100"
              />
            </svg>
            <span className="absolute text-[11px] font-black text-slate-800 font-mono">68%</span>
          </div>
        </div>
      </div>

      {/* Main Data Table Section (Matches Image 1 Proposal Sample Exactly) */}
      <div className="gov-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-black text-slate-900">
            &apos;Perbandingan Harga Satuan APBD Q3 2024&apos;
          </h3>
          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors">
            <span>Batin satuan</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* High-Contrast Table Wrapper */}
        <div className="gov-table-wrapper">
          <table className="gov-table">
            <thead>
              <tr>
                <th className="text-left">ID</th>
                <th className="text-left">Deskripsi Item</th>
                <th className="text-left">Spesifikasi</th>
                <th className="text-left">Satuan</th>
                <th className="text-center">Vol</th>
                <th className="text-left">Harga APBD (Unit)</th>
                <th className="text-left">Total APBD</th>
                <th className="text-left">Harga e-Katalog (Unit)</th>
                <th className="text-center">Selisih (%)</th>
                <th className="text-center">Status Risiko</th>
                <th className="text-center">Catatan Auditor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tableItems.map((item, idx) => {
                let rowClass = "";
                let badgeNode = null;

                if (item.riskLevel === "red") {
                  rowClass = "row-markup-high";
                  badgeNode = <span className="badge-red">{item.riskStatus}</span>;
                } else if (item.riskLevel === "amber") {
                  rowClass = "row-markup-medium";
                  badgeNode = <span className="badge-amber">{item.riskStatus}</span>;
                } else if (item.riskLevel === "green") {
                  rowClass = "row-markup-normal";
                  badgeNode = <span className="badge-green">{item.riskStatus}</span>;
                } else {
                  rowClass = "row-markup-medium";
                  badgeNode = <span className="badge-potensi">{item.riskStatus}</span>;
                }

                return (
                  <tr key={idx} className={`${rowClass} transition-colors`}>
                    <td className="font-mono font-extrabold text-slate-900">{item.id}</td>
                    <td className="font-extrabold text-slate-900">{item.description}</td>
                    <td className="text-slate-700 font-medium">{item.spec}</td>
                    <td className="text-slate-700 font-medium">{item.unit}</td>
                    <td className="text-center font-extrabold text-slate-900 font-mono">{item.vol}</td>
                    <td className="font-extrabold text-slate-900 font-mono">{item.apbdUnit}</td>
                    <td className="font-extrabold text-slate-900 font-mono">{item.apbdTotal}</td>
                    <td className="font-extrabold text-slate-900 font-mono">{item.eKatalogUnit}</td>
                    <td className="text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full font-black text-xs font-mono text-white ${
                          item.riskLevel === "red"
                            ? "bg-red-600 shadow-2xs"
                            : item.riskLevel === "amber"
                            ? "bg-amber-500 shadow-2xs"
                            : "bg-emerald-600 shadow-2xs"
                        }`}
                      >
                        {item.diff}
                      </span>
                    </td>
                    <td className="text-center">{badgeNode}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setActiveTab("price_oracle")}
                          className="flex items-center gap-1 text-[11px] font-extrabold text-slate-800 hover:text-red-700 bg-white hover:bg-slate-50 border border-slate-300 px-2.5 py-1 rounded-lg shadow-2xs transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-slate-500" />
                          <span>Notes</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("price_oracle")}
                          className="flex items-center gap-1 text-[11px] font-extrabold text-slate-800 hover:text-red-700 bg-white hover:bg-slate-50 border border-slate-300 px-2.5 py-1 rounded-lg shadow-2xs transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                          <span>Detail</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
