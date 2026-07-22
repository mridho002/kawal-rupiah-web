'use client'

import React from 'react';
import Image from 'next/image';

export default function GarudaHeader() {
  return (
    <div className="flex items-center gap-3">
      {/* Garuda Coat of Arms Emblem */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-md shadow-amber-500/20 flex items-center justify-center">
          <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-amber-400 font-extrabold text-lg">
            🏛️
          </div>
        </div>
      </div>
      <div className="leading-tight">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
          REPUBLIK INDONESIA
        </span>
        <h1 className="text-base font-black tracking-tight text-white flex items-center gap-2">
          <span>e-Audit Nasional</span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-black uppercase tracking-wider shadow-sm shadow-red-600/30">
            Kawal Rupiah
          </span>
        </h1>
        <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block mt-0.5">
          Sistem Monitoring & Evaluasi APBD
        </span>
      </div>
    </div>
  );
}
