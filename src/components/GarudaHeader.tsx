'use client'

import React from 'react';
import Image from 'next/image';

export default function GarudaHeader() {
  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* High-Definition Protective Shield & Rupiah Emblem Logo */}
      <div className="relative w-11 h-11 shrink-0 rounded-xl overflow-hidden shadow-sm border border-amber-300/80 bg-white p-0.5 flex items-center justify-center">
        <Image
          src="/kawal_rupiah_logo.png"
          alt="Logo Kawal Rupiah - Shield & Rupiah Emblem"
          width={44}
          height={44}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Typography System */}
      <div className="leading-tight">
        <span className="text-[9.5px] font-black uppercase tracking-widest text-slate-500 block">
          REPUBLIK INDONESIA
        </span>
        <h1 className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span>e-Audit Nasional</span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-red-600 text-white font-extrabold shadow-2xs">
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
