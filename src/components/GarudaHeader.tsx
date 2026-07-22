'use client'

import React from 'react';
import Image from 'next/image';

export default function GarudaHeader() {
  return (
    <div className="flex items-center gap-3">
      {/* Garuda Coat of Arms Emblem (Official Gold Garuda RI) */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-11 h-11 text-amber-500 fill-current drop-shadow-sm">
          {/* Emblem representation of Garuda Pancasila */}
          <path d="M50 5 L58 20 L75 15 L70 32 L88 35 L78 50 L92 62 L75 68 L80 85 L62 80 L50 95 L38 80 L20 85 L25 68 L8 62 L22 50 L12 35 L30 32 L25 15 L42 20 Z" fill="#D97706" />
          <circle cx="50" cy="50" r="22" fill="#DC2626" />
          <path d="M50 30 L65 42 L60 62 L40 62 L35 42 Z" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="6" fill="#1E293B" />
        </svg>
      </div>
      <div className="leading-tight">
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
          REPUBLIK INDONESIA
        </span>
        <h1 className="text-base font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
          <span>e-Audit Nasional</span>
          <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold">Kawal Rupiah</span>
        </h1>
        <span className="text-[9px] text-slate-400 font-medium tracking-wide uppercase block">
          Sistem Monitoring & Evaluasi APBD
        </span>
      </div>
    </div>
  );
}
