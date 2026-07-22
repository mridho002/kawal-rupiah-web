'use client'

import { useState } from "react";
import { Search, Bell, Download, ChevronDown, FileText, ExternalLink, Calendar, LogOut, Info, AlertTriangle, ShieldCheck } from "lucide-react";

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
      riskLevel: "yellow",
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
      riskLevel: "amber",
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
      riskLevel: "amber",
    },
  ];

  return (
    <div className="space-y-6 max-w-full pb-20">
      {/* Top Bar: Search, Notifications, User Info (Matches Image 1 Proposal Sample) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search reports, entities..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
          />
        </div>

        {/* User Pill & Notifications */}
        <div className="flex items-center justify-between md:justify-end gap-5">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 overflow-hidden flex items-center justify-center font-bold text-slate-700">
              DP
            </div>
            <div className="text-left leading-tight">
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-900 text-sm">Dita Pratiwi</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <span className="text-[11px] text-slate-500 block">Auditor Senior</span>
              <span className="text-[10px] text-slate-400 font-mono block">ID: 19851024</span>
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors ml-1">
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
          <p className="text-xs text-slate-500 mt-1">Sistem Evaluasi Pengadaan Barang & Jasa Daerah Berbasis AI Price Oracle</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Dropdowns */}
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{activePeriod}</span>
          </button>
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs">
            <span>{activeMonth}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {/* Unduh Laporan Button */}
          <a
            href="/Proposal_Final_Kawal_Rupiah.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-xs"
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
          <span className="text-xs font-semibold text-slate-500 block">Total Anggaran APBD</span>
          <p className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2">Rp 12.8 T</p>
        </div>

        {/* Card 2: Total Realisasi */}
        <div className="gov-card p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-500">Total Realisasi</span>
            <span className="text-[10px] text-slate-400 font-mono">in</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <p className="text-2xl lg:text-3xl font-extrabold text-slate-900">Rp 7.4 T</p>
            <span className="text-xs font-bold text-blue-600">57.8%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: '57.8%' }} />
          </div>
        </div>

        {/* Card 3: Potensi Penghematan */}
        <div className="gov-card p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-500">Potensi Penghematan</span>
            <span className="text-[10px] text-slate-400 font-mono">↻</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <p className="text-2xl lg:text-3xl font-extrabold text-slate-900">Rp 298.4 M</p>
            <span className="text-xs font-bold text-emerald-600">74%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '74%' }} />
          </div>
        </div>

        {/* Card 4: Tingkat Risiko Deviasi (Speedometer Gauge) */}
        <div className="gov-card p-5 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Tingkat Risiko Deviasi</span>
              <p className="text-xl font-black text-amber-500 mt-1 leading-none">
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
            <span className="absolute text-[11px] font-bold text-slate-700 font-mono">68%</span>
          </div>
        </div>
      </div>

      {/* Main Data Table Section (Matches Image 1 Sample Exactly) */}
      <div className="gov-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-bold text-slate-900">
            &apos;Perbandingan Harga Satuan APBD Q3 2024&apos;
          </h3>
          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors">
            <span>Batin satuan</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 font-extrabold text-slate-700 uppercase tracking-wider bg-slate-50/50">
                <th className="py-3 px-3">ID</th>
                <th className="py-3 px-3">Deskripsi Item</th>
                <th className="py-3 px-3">Spesifikasi</th>
                <th className="py-3 px-3">Satuan</th>
                <th className="py-3 px-3 text-center">Vol</th>
                <th className="py-3 px-3">Harga APBD (Unit)</th>
                <th className="py-3 px-3">Total APBD</th>
                <th className="py-3 px-3">Harga e-Katalog (Unit)</th>
                <th className="py-3 px-3 text-center">Selisih (%)</th>
                <th className="py-3 px-3 text-center">Status Risiko</th>
                <th className="py-3 px-3 text-center">Catatan Auditor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 font-medium">
              {tableItems.map((item, idx) => {
                let rowBgClass = "";
                let badgeClass = "";

                if (item.riskLevel === "red") {
                  rowBgClass = "gov-table-row-red";
                  badgeClass = "badge-markup-high";
                } else if (item.riskLevel === "yellow") {
                  rowBgClass = "gov-table-row-yellow";
                  badgeClass = "badge-markup-medium";
                } else if (item.riskLevel === "green") {
                  rowBgClass = "gov-table-row-green";
                  badgeClass = "badge-markup-normal";
                } else {
                  rowBgClass = "gov-table-row-yellow";
                  badgeClass = "badge-potensi-markup";
                }

                return (
                  <tr key={idx} className={`${rowBgClass} transition-colors`}>
                    <td className="py-3.5 px-3 font-mono font-bold text-slate-900">{item.id}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-900">{item.description}</td>
                    <td className="py-3.5 px-3 text-slate-600">{item.spec}</td>
                    <td className="py-3.5 px-3 text-slate-600">{item.unit}</td>
                    <td className="py-3.5 px-3 text-center font-bold text-slate-900">{item.vol}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-900">{item.apbdUnit}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-900">{item.apbdTotal}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-900">{item.eKatalogUnit}</td>
                    <td className="py-3.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full font-bold text-[11px] ${
                          item.riskLevel === "red"
                            ? "bg-red-600 text-white"
                            : item.riskLevel === "yellow"
                            ? "bg-amber-500 text-white"
                            : "bg-emerald-600 text-white"
                        }`}
                      >
                        {item.diff}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span className={badgeClass}>{item.riskStatus}</span>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setActiveTab("price_oracle")}
                          className="flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-red-600 bg-white border border-slate-300 px-2 py-1 rounded shadow-2xs"
                        >
                          <FileText className="w-3 h-3" />
                          <span>Notes</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("price_oracle")}
                          className="flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-red-600 bg-white border border-slate-300 px-2 py-1 rounded shadow-2xs"
                        >
                          <ExternalLink className="w-3 h-3" />
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
