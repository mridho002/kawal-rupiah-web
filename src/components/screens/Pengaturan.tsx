'use client'

import { useState } from "react";
import { Settings, Shield, Key, Database, Bell, Lock } from "lucide-react";

export default function PengaturanScreen() {
  return (
    <div className="space-y-6 max-w-full pb-20">
      <div className="gov-card p-6">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Pengaturan Sistem e-Audit</h2>
        <p className="text-xs text-slate-600 font-medium mt-1">Konfigurasi Parameter AI Price Oracle, Kepatuhan Regulasi, & Akses APIP</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Parameter Threshold AI */}
        <div className="gov-card p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Shield className="w-5 h-5 text-red-600" />
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Batas Anomali (Soft-Lock Threshold)</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-600 font-bold block mb-1">Toleransi Deviasi Harga (%):</label>
              <input
                type="number"
                defaultValue={25}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-bold font-mono focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Otomatis soft-lock jika deviasi RKA APBD vs e-Katalog &gt; 25%</span>
            </div>

            <div>
              <label className="text-slate-600 font-bold block mb-1">Minimal Konsensus Citizen Mining:</label>
              <input
                type="number"
                defaultValue={5}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-bold font-mono focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Jumlah verifikasi foto warga independen sebelum status valid</span>
            </div>
          </div>
        </div>

        {/* Integration Status */}
        <div className="gov-card p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Database className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Status Integrasi Regulasi & BPD</h3>
          </div>
          <div className="space-y-3 text-xs font-semibold">
            <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span>Escrow SP2D BPD (UU No. 1/2004)</span>
              <span className="badge-green">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span>Closed-Loop Voucher (PBI 23/6/PBI/2021)</span>
              <span className="badge-green">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span>P3DN 40% KPI Tracker (Kemenkeu DAU)</span>
              <span className="badge-green">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
