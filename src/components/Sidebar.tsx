'use client'

import { LayoutDashboard, BarChart2, FileSpreadsheet, AlertTriangle, Users, Clock, HelpCircle, Menu, X, Smartphone, FileText } from "lucide-react";
import clsx from "clsx";
import GarudaHeader from "./GarudaHeader";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, isOpen, onToggle }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "analisis", label: "Analisis APBD", icon: BarChart2 },
    { id: "price_oracle", label: "Data e-Katalog", icon: FileSpreadsheet },
    { id: "laporan_deviasi", label: "Laporan Deviasi", icon: AlertTriangle },
    { id: "mobile_pwa", label: "App Citizen PWA", icon: Smartphone },
    { id: "audit_trail", label: "Riwayat Audit", icon: Clock },
    { id: "proposal", label: "Proposal (PDF)", icon: FileText },
    { id: "bantuan", label: "Bantuan", icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-[60] w-10 h-10 bg-white border border-slate-300 text-slate-900 rounded-xl flex items-center justify-center shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 animate-fade-in"
          onClick={onToggle}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={clsx(
        "w-64 bg-white h-screen flex flex-col fixed left-0 top-0 border-r border-slate-200 z-50 transition-transform duration-300 shadow-xs",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div className="px-5 py-5 border-b border-slate-100 bg-slate-50/40">
          <GarudaHeader />
        </div>

        {/* Navigation Items (Matches Image 1 Proposal Sample Exactly) */}
        <nav className="flex-1 px-3 space-y-1 mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === "laporan_deviasi" && activeTab === "price_oracle");
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "mobile_pwa") {
                    window.open("/mobile", "_blank");
                    return;
                  }
                  if (item.id === "proposal") {
                    window.open("/Proposal_Final_Kawal_Rupiah.pdf", "_blank");
                    return;
                  }
                  setActiveTab(item.id === "laporan_deviasi" ? "price_oracle" : item.id);
                  if (window.innerWidth < 1024) onToggle();
                }}
                className={clsx(
                  "w-full relative flex items-center gap-3.5 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-150 text-left",
                  isActive
                    ? "bg-slate-100 text-slate-900 font-extrabold shadow-2xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {/* Red vertical indicator line matching Image 1 Sample */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-7 rounded-r-md bg-red-600 shadow-2xs" />
                )}
                <Icon className={clsx("w-5 h-5 shrink-0", isActive ? "text-slate-900" : "text-slate-400")} />
                <span className="truncate">{item.label}</span>
                {item.id === "mobile_pwa" && (
                  <span className="ml-auto text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">Mobile</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer User Profile */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center font-bold text-slate-800 text-sm shrink-0">
              DP
            </div>
            <div className="min-w-0 leading-tight">
              <p className="font-extrabold text-slate-900 text-xs truncate">Dita Pratiwi</p>
              <p className="text-[10px] text-slate-500 font-semibold truncate">Auditor Senior</p>
              <p className="text-[9px] text-slate-400 font-mono">ID: 19851024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
