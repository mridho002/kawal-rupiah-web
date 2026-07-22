'use client'

import { useState } from "react";
import { Fingerprint, Lock, ShieldCheck, CheckCircle2, Search, Filter } from "lucide-react";

export default function AuditTrailScreen() {
  const [searchTerm, setSearchTerm] = useState("");

  const auditLogs = [
    { id: "LOG-9921", time: "22 Jul 2026, 18:40:12", actor: "AI Price Oracle (FastAPI)", action: "SOFT-LOCK ANOMALI MARKUP", detail: "Laptop Core i7 16GB (+51%) — RKA APBD Kab. Bandung", hash: "0x8f2a9b...7c1e", status: "VERIFIED" },
    { id: "LOG-9920", time: "22 Jul 2026, 17:15:00", actor: "Citizen Verifier (Andi)", action: "UPLOAD MISI LAPANGAN", detail: "Foto Fisik Aspal Jl. Diponegoro (GPS & Timestamp Locked)", hash: "0x3c4d1e...9f8a", status: "VERIFIED" },
    { id: "LOG-9919", time: "22 Jul 2026, 15:30:22", actor: "Auditor APIP (Dita Pratiwi)", action: "KONFIRMASI EVALUASI SBM", detail: "Persetujuan Rekomendasi SBM e-Katalog LKPP", hash: "0x7a6b5c...4d3e", status: "VERIFIED" },
    { id: "LOG-9918", time: "22 Jul 2026, 12:10:05", actor: "System Escrow (BPD Callback)", action: "ESCROW CALLBACK INSTRUCTION", detail: "Pembekuan Termin SP2D Sesuai UU No. 1/2004", hash: "0x1f2e3d...4c5b", status: "VERIFIED" },
  ];

  const filteredLogs = auditLogs.filter(l =>
    l.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.detail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-full pb-20">
      <div className="gov-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            Riwayat Audit (Audit Log)
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold border border-emerald-200">
              Tamper-Evident SHA-256
            </span>
          </h2>
          <p className="text-xs text-slate-600 font-medium mt-1">Catatan Transaksi & Evaluasi Sistem Pengawasan APBD Terenkripsi</p>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari log audit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20"
          />
        </div>
      </div>

      <div className="gov-card p-6">
        <div className="gov-table-wrapper">
          <table className="gov-table">
            <thead>
              <tr>
                <th className="text-left">ID Log</th>
                <th className="text-left">Waktu (WIB)</th>
                <th className="text-left">Aktor / Subjek</th>
                <th className="text-left">Aksi Sistem</th>
                <th className="text-left">Detail Catatan</th>
                <th className="text-center">Hash Kriptografi</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                  <td className="font-mono font-extrabold text-slate-900">{log.id}</td>
                  <td className="text-slate-600 text-xs font-medium whitespace-nowrap">{log.time}</td>
                  <td className="font-bold text-slate-900">{log.actor}</td>
                  <td className="font-extrabold text-red-700">{log.action}</td>
                  <td className="text-slate-700 font-medium">{log.detail}</td>
                  <td className="text-center font-mono text-xs text-slate-500">{log.hash}</td>
                  <td className="text-center">
                    <span className="badge-green">{log.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
