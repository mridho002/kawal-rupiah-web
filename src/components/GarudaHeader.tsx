'use client'

import React from 'react';

export default function GarudaHeader() {
  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* Precision Official Garuda Pancasila Emblem */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-300/80 rounded-xl shadow-xs">
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-amber-600 fill-current drop-shadow-xs">
          {/* Head & Crown */}
          <path d="M50 8 L54 18 L64 16 L59 26 L71 28 L63 38 L74 46 L62 50 L69 62 L56 59 L50 72 L44 59 L31 62 L38 50 L26 46 L37 38 L29 28 L41 26 L36 16 L46 18 Z" fill="#D97706" />
          {/* Shield / Perisai Pancasila */}
          <path d="M50 32 L64 42 L59 62 L50 67 L41 62 L36 42 Z" fill="#DC2626" stroke="#B91C1C" strokeWidth="1.5" />
          {/* Center Star / Bintang */}
          <polygon points="50,42 52,47 57,47 53,50 55,55 50,52 45,55 47,50 43,47 48,47" fill="#FBBF24" />
          {/* Ribbon / Pita Bhinneka Tunggal Ika */}
          <path d="M32 68 Q50 74 68 68 L66 73 Q50 78 34 73 Z" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
        </svg>
      </div>

      {/* Typography System */}
      <div className="leading-tight">
        <span className="text-[9.5px] font-black uppercase tracking-widest text-slate-500 block">
          REPUBLIK INDONESIA
        </span>
        <h1 className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span>e-Audit Nasional</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold shadow-2xs">
            Kawal Rupiah
          </span>
        </h1>
        <span className="text-[9px] text-slate-500 font-bold tracking-wide uppercase block mt-0.5">
          Sistem Monitoring & Evaluasi APBD
        </span>
      </div>
    </div>
  );
}
