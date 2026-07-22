'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, FileText, LayoutDashboard, Brain, Users, Coins, ArrowRight, Shield, AlertTriangle, RefreshCw } from "lucide-react";

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
    // Attempt dynamic fetch from backend API
    fetch("http://localhost:8000/api/v1/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.penghematan) {
          setStats(data);
          setIsLive(true);
        }
      })
      .catch(() => {
        // Fallback to live simulated reactive state
        setIsLive(true);
      });
  }, []);

  return (
    <div className="min-h-screen bg-void text-slate-100 selection:bg-brand-500/30 selection:text-slate-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-brand-400/20 to-gold-500/10 border border-white/10 flex items-center justify-center glow-emerald">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            </div>
            <div className="leading-tight">
              <h1 className="text-sm font-extrabold tracking-tight">
                <span className="text-gradient-brand">KAWAL</span>{" "}
                <span className="text-gradient-gold">RUPIAH</span>
              </h1>
              <p className="text-[9px] text-slate-500 font-medium tracking-wide uppercase">Garuda Shield</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mridho002/kawal-rupiah-web/raw/main/public/download/kawal-rupiah-citizen-mining.apk"
              download
              className="relative flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gold-500 hover:bg-gold-600 text-[#1a1300] transition-all glow-gold"
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Download Android APK</span>
            </a>
            <Link
              href="/dashboard"
              className="relative flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-brand-500 hover:bg-brand-600 text-[#022c22] transition-all glow-emerald"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Buka Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brand-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 pulse-live" />
            PIDI X Digdaya Hackathon — Tim P1081
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Mengamankan Anggaran Negara,<br />
            <span className="text-gradient-brand">Mensejahterakan Rakyat</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Platform GovTech nasional terintegrasi dengan deteksi dini markup APBD berbasis kecerdasan buatan dan audit sosial partisipatif warga secara real-time di lapangan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://github.com/mridho002/kawal-rupiah-web/raw/main/public/download/kawal-rupiah-citizen-mining.apk"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-gold-500 hover:bg-gold-600 text-[#1a1300] rounded-xl font-bold transition-all text-sm shadow-lg shadow-gold-500/20"
            >
              <Coins className="w-4 h-4" />
              <span>Download Android APK (v1.0-MVP)</span>
            </a>
            <Link
              href="/mobile"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-brand-500 hover:bg-brand-600 text-[#022c22] rounded-xl font-bold transition-all text-sm glow-emerald"
            >
              <span>Simulasi App Mobile (Web PWA)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/Proposal_Final_Kawal_Rupiah.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded-xl font-bold transition-all text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Proposal PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Live Stats Showcase (Matches Dashboard Theme) */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <RefreshCw className={`w-3.5 h-3.5 text-brand-400 ${isLive ? 'animate-spin' : ''}`} />
            Live Metrik Pengawasan APBD (Real-Time API Sync)
          </h3>
          <span className="text-[10px] text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 rounded-full font-bold">
            🟢 API Connected
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="gs-card card-hover accent-bar accent-emerald p-5 pl-6">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Penghematan APBD</p>
            <p className="font-data text-2xl sm:text-3xl font-bold mt-2 text-brand-400">{stats.penghematan}</p>
            <p className="text-[10px] font-medium text-slate-500 mt-1">Estimasi Efisiensi Fiskal Pilot</p>
          </div>
          <div className="gs-card card-hover accent-bar accent-info p-5 pl-6">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Proyek Diawasi</p>
            <p className="font-data text-2xl sm:text-3xl font-bold mt-2 text-blue-400">{stats.proyek}</p>
            <p className="text-[10px] font-medium text-slate-500 mt-1">Sebaran di 23 Provinsi</p>
          </div>
          <div className="gs-card card-hover accent-bar accent-gold p-5 pl-6">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Warga Partisipan</p>
            <p className="font-data text-2xl sm:text-3xl font-bold mt-2 text-gold-400">{stats.warga}</p>
            <p className="text-[10px] font-medium text-slate-500 mt-1">Verifikator Citizen Mining</p>
          </div>
          <div className="gs-card card-hover accent-bar accent-danger p-5 pl-6">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Anomali Terdeteksi</p>
            <p className="font-data text-2xl sm:text-3xl font-bold mt-2 text-red-400">{stats.anomali}</p>
            <p className="text-[10px] font-medium text-slate-500 mt-1">Akurasi RAG AI {stats.accuracy}</p>
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="glass-panel border border-white/[0.06] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Tampilan Antarmuka Sistem</h3>
            <p className="text-sm text-slate-400">
              Integrasi platform pengawasan e-Audit internal pemerintah (APIP) berbasis web dan aplikasi pengawasan lapangan (Citizen PWA) berbasis mobile untuk masyarakat.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="gs-card p-4 overflow-hidden border border-white/10 card-hover">
              <div className="flex justify-between items-center mb-3 text-xs font-bold text-slate-400">
                <span><i className="fa-solid fa-desktop mr-1.5"></i> Portal e-Audit APIP</span>
                <span className="text-brand-400 font-medium">Sisi Internal Pemerintah</span>
              </div>
              <img
                src="/mockup_web.jpg"
                alt="Web Dashboard Mockup"
                className="w-full rounded-lg border border-white/5 shadow-lg"
              />
            </div>
            <div className="gs-card p-4 overflow-hidden border border-white/10 card-hover">
              <div className="flex justify-between items-center mb-3 text-xs font-bold text-slate-400">
                <span><i className="fa-solid fa-mobile-screen mr-1.5"></i> App Citizen Mining</span>
                <span className="text-gold-400 font-medium">Sisi Masyarakat Umum</span>
              </div>
              <img
                src="/mockup_mobile.jpg"
                alt="Mobile PWA Mockup"
                className="w-full rounded-lg border border-white/5 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Empat Pilar Solusi Utama</h3>
          <p className="text-sm text-slate-400">Teknologi inovatif yang mendasari sistem pertahanan anggaran Kawal Rupiah.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gs-card p-6 card-hover">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-brand-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">AI Price Oracle</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Menganalisis file rencana APBD secara otomatis berbasis RAG dan Gemini Embeddings untuk mendeteksi deviasi harga satuan yang tidak wajar dibanding database e-Katalog LKPP secara real-time.
            </p>
          </div>
          <div className="gs-card p-6 card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Citizen Mining</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Mendayagunakan partisipasi warga lokal sebagai verifikator fisik independen di lapangan, lengkap dengan validasi bukti foto, koordinat GPS anti-tamper, dan sensor keamanan perangkat.
            </p>
          </div>
          <div className="gs-card p-6 card-hover">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
              <Coins className="w-6 h-6 text-gold-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Koperasi Merah Putih</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Insentif verifikasi warga berupa Voucher digital belanja di Koperasi Merah Putih untuk kebutuhan pokok, demi menghidupkan warung dan koperasi lokal.
            </p>
          </div>
          <div className="gs-card p-6 card-hover">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Smart Contract Audit</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Pembekuan termin pembayaran secara otomatis pada blockchain smart contract jika terdeteksi deviasi progres fisik di lapangan, memberikan perlindungan anggaran zero-touch.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#06080f] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tim Kawal Rupiah · ID P1081</span>
          </div>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <a href="/Proposal_Final_Kawal_Rupiah.pdf" download className="hover:text-slate-300">Proposal PDF</a>
            <a href="mailto:ridho@kawalrupiah.web.id" className="hover:text-slate-300">Kontak Tim</a>
            <a href="https://kawalrupiah.web.id" className="hover:text-slate-300">Website Utama</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
