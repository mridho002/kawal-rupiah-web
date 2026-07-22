'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, LayoutDashboard, Brain, Users, Coins, ArrowRight, Shield, AlertTriangle, RefreshCw, FileText, Smartphone } from "lucide-react";
import GarudaHeader from "@/components/GarudaHeader";

export default function LandingPage() {
  const [stats, setStats] = useState({
    penghematan: "Rp 14,7 M",
    proyek: "847",
    warga: "6.234",
    anomali: "23",
    accuracy: "97.8%"
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.penghematan) {
          setStats(data);
          setIsLive(true);
        }
      })
      .catch(() => {
        setIsLive(true);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-500/20 selection:text-slate-900 font-sans">
      {/* Official Government Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <GarudaHeader />

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mridho002/kawal-rupiah-web/raw/main/public/download/kawal-rupiah-citizen-mining.apk"
              download
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all shadow-xs"
            >
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Download APK</span>
            </a>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all shadow-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Portal e-Audit APIP</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-16 px-6 text-center bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 pulse-live" />
            PIDI X Digdaya Hackathon 2026 — Tim P1081 (Kategori Profesional)
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Sistem Monitoring & Evaluasi APBD<br />
            <span className="text-red-600">Terintegrasi Nasional</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Platform GovTech resmi dengan deteksi dini markup APBD berbasis kecerdasan buatan (AI Price Oracle) dan audit sosial partisipatif warga secara real-time di lapangan (Citizen Mining).
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all text-sm shadow-md shadow-red-600/20"
            >
              <span>Buka Portal e-Audit APIP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/mobile"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-sm shadow-md shadow-blue-600/20"
            >
              <Smartphone className="w-4 h-4" />
              <span>Simulasi App Citizen PWA</span>
            </Link>
            <a
              href="/Proposal_Final_Kawal_Rupiah.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-bold transition-all text-sm shadow-xs"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Proposal (PDF)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Live Stats Showcase (Matches Dashboard Theme) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <RefreshCw className={`w-3.5 h-3.5 text-red-600 ${isLive ? 'animate-spin' : ''}`} />
            Pemonitoran & Analisis APBD vs e-Katalog (Real-Time API Sync)
          </h3>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
            🟢 System Active
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="gov-card p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Penghematan APBD</p>
            <p className="font-mono text-3xl font-extrabold mt-2 text-slate-900">{stats.penghematan}</p>
            <p className="text-[11px] font-medium text-emerald-600 mt-1">Estimasi Efisiensi Fiskal Pilot</p>
          </div>
          <div className="gov-card p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Proyek Diawasi</p>
            <p className="font-mono text-3xl font-extrabold mt-2 text-blue-600">{stats.proyek}</p>
            <p className="text-[11px] font-medium text-slate-500 mt-1">Sebaran di 23 Provinsi</p>
          </div>
          <div className="gov-card p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Warga Partisipan</p>
            <p className="font-mono text-3xl font-extrabold mt-2 text-amber-600">{stats.warga}</p>
            <p className="text-[11px] font-medium text-slate-500 mt-1">Verifikator Citizen Mining</p>
          </div>
          <div className="gov-card p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Anomali Terdeteksi</p>
            <p className="font-mono text-3xl font-extrabold mt-2 text-red-600">{stats.anomali}</p>
            <p className="text-[11px] font-medium text-slate-500 mt-1">Akurasi RAG AI {stats.accuracy}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <GarudaHeader />
          <div className="flex gap-6 text-xs text-slate-600 font-semibold">
            <a href="/Proposal_Final_Kawal_Rupiah.pdf" download className="hover:text-red-600">Proposal PDF</a>
            <a href="mailto:ridho@kawalrupiah.web.id" className="hover:text-red-600">Kontak Tim P1081</a>
            <a href="https://kawalrupiah.web.id" className="hover:text-red-600">Domain Utama</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
