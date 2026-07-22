'use client'

import { useState } from "react";
import { BarChart2, PieChart, TrendingUp, Filter, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const tooltipStyle = {
  borderRadius: '8px',
  border: '1px solid #E2E8F0',
  background: '#FFFFFF',
  fontSize: '12px',
  fontWeight: 600,
  color: '#0F172A',
} as const;

export default function AnalisisDataScreen() {
  const analysisData = [
    { sektor: "Infrastruktur", apbd: 450, ekatalog: 310, efisiensi: 140 },
    { sektor: "Pendidikan (TIK)", apbd: 320, ekatalog: 210, efisiensi: 110 },
    { sektor: "Kesehatan", apbd: 280, ekatalog: 240, efisiensi: 40 },
    { sektor: "Transportasi", apbd: 190, ekatalog: 120, efisiensi: 70 },
    { sektor: "Pertanian", apbd: 150, ekatalog: 135, efisiensi: 15 },
  ];

  return (
    <div className="space-y-6 max-w-full pb-20">
      <div className="gov-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Analisis APBD Lintas Sektor</h2>
          <p className="text-xs text-slate-600 font-medium mt-1">Metrik Perbandingan Alokasi Anggaran Daerah vs Harga Acuan Pasar e-Katalog</p>
        </div>
        <a
          href="/Proposal_Final_Kawal_Rupiah.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-xs"
        >
          <Download className="w-3.5 h-3.5 text-slate-500" />
          <span>Ekspor Analisis (PDF)</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="gov-card p-6 space-y-4">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Potensi Efisiensi per Sektor (Miliar Rp)</h3>
          <div className="h-72 my-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analysisData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="sektor" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="apbd" name="Usulan APBD" fill="#DC2626" radius={[4, 4, 0, 0]} />
                <Bar dataKey="ekatalog" name="Acuan e-Katalog" fill="#059669" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="gov-card p-6 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Ringkasan Efisiensi Fiskal</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Sektor Paling Anomali:</span>
                  <span className="text-sm font-black text-slate-900">Infrastruktur & TIK Sekolah</span>
                </div>
                <span className="text-xs font-black text-red-600 bg-red-100 border border-red-200 px-2.5 py-1 rounded-full">
                  +45% Markup
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Tingkat Penghematan Tertinggi:</span>
                  <span className="text-sm font-black text-slate-900">Transportasi & Pengadaan Kendaraan</span>
                </div>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Rp 70M Efisiensi
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 space-y-1">
            <span className="font-bold block">💡 Rekomendasi Audit APIP:</span>
            <p className="leading-relaxed">
              Prioritaskan evaluasi fisik pada 350 unit Laptop Administrasi di Kab. Bandung dan Proyek Aspal Hotmix di Kab. Bogor sebelum penerbitan SP2D termin akhir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
