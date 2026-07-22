'use client'

import { useState } from "react";
import { Search, Filter, Download, AlertCircle, CheckCircle, MapPin, Upload, FileText, ExternalLink } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const tooltipStyle = {
  borderRadius: '8px',
  border: '1px solid #E2E8F0',
  background: '#FFFFFF',
  fontSize: '12px',
  fontWeight: 600,
  color: '#0F172A',
} as const;

const tableData = [
  { id: 1, item: "Laptop Core i7 16GB", satuan: "Unit", qty: 492, propUnit: 25.4, ekatUnit: 16.8, propTotal: "Rp 12.496.800.000", ekatTotal: "Rp 8.265.600.000", diff: "+51%", daerah: "Kab. Bandung, Jabar", tahun: "2026", status: "ANOMALI" },
  { id: 2, item: "Beton K-350", satuan: "m³", qty: 2500, propUnit: 1.15, ekatUnit: 1.1, propTotal: "Rp 2.875.000.000", ekatTotal: "Rp 2.750.000.000", diff: "+4.5%", daerah: "Kota Semarang, Jateng", tahun: "2026", status: "NORMAL" },
  { id: 3, item: "Aspal Hotmix AC-WC", satuan: "Ton", qty: 850, propUnit: 2.1, ekatUnit: 1.45, propTotal: "Rp 1.785.000.000", ekatTotal: "Rp 1.232.500.000", diff: "+44%", daerah: "Kab. Bogor, Jabar", tahun: "2026", status: "ANOMALI" },
  { id: 4, item: "ATK Kantor Set", satuan: "Set", qty: 120, propUnit: 0.45, ekatUnit: 0.42, propTotal: "Rp 54.000.000", ekatTotal: "Rp 50.400.000", diff: "+7%", daerah: "Kota Surabaya, Jatim", tahun: "2025", status: "NORMAL" },
  { id: 5, item: "Sewa Bus Medium", satuan: "Unit/Hari", qty: 30, propUnit: 3.5, ekatUnit: 2.2, propTotal: "Rp 105.000.000", ekatTotal: "Rp 66.000.000", diff: "+59%", daerah: "Prov. DKI Jakarta", tahun: "2026", status: "ANOMALI" },
  { id: 6, item: "Printer Multifungsi A3", satuan: "Unit", qty: 75, propUnit: 8.9, ekatUnit: 6.2, propTotal: "Rp 667.500.000", ekatTotal: "Rp 465.000.000", diff: "+43%", daerah: "Kab. Tangerang, Banten", tahun: "2026", status: "ANOMALI" },
  { id: 7, item: "Meja Kerja 1/2 Biro", satuan: "Unit", qty: 200, propUnit: 1.8, ekatUnit: 1.65, propTotal: "Rp 360.000.000", ekatTotal: "Rp 330.000.000", diff: "+9%", daerah: "Kota Medan, Sumut", tahun: "2025", status: "NORMAL" },
];

export default function PriceOracleScreen() {
  const [data, setData] = useState(tableData);
  const [selectedRow, setSelectedRow] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const selected = data.find(r => r.id === selectedRow) ?? data[0];
  const isAnomaliSelected = selected.status === "ANOMALI";

  const chartData = [
    { name: "Diajukan", value: selected.propUnit },
    { name: "e-Katalog", value: selected.ekatUnit },
  ];

  const filteredData = data.filter(r =>
    r.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.daerah.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    setUploadStep("Membaca berkas RKA APBD...");

    setTimeout(() => {
      setUploadProgress(30);
      setUploadStep("Hierarchical Parent-Child Chunking...");
    }, 600);

    setTimeout(() => {
      setUploadProgress(65);
      setUploadStep("Pencocokan RAG Dual-Path (Gemini + BM25)...");
    }, 1200);

    setTimeout(() => {
      setUploadProgress(100);
      setUploadStep("Analisis selesai! 2 item anomali ditemukan.");

      const newItem = {
        id: Date.now(),
        item: "Pengadaan Tablet Edukasi Sekolah",
        satuan: "Unit",
        qty: 300,
        propUnit: 8.5,
        ekatUnit: 4.2,
        propTotal: "Rp 2.550.000.000",
        ekatTotal: "Rp 1.260.000.000",
        diff: "+102%",
        daerah: "Kab. Bandung (Dokumen Baru)",
        tahun: "2026",
        status: "ANOMALI",
      };

      setData([newItem, ...tableData]);
      setSelectedRow(newItem.id);

      setTimeout(() => {
        setIsUploading(false);
      }, 1000);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-full pb-20">
      {/* Header & Upload CTA */}
      <div className="gov-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">AI Price Oracle — Data e-Katalog</h2>
          <p className="text-xs text-slate-600 font-medium mt-1">
            Pencocokan Otomatis RKA APBD terhadap Database e-Katalog LKPP & Standar Biaya Masukan (SBM)
          </p>
        </div>
        <div>
          <button
            onClick={handleSimulatedUpload}
            disabled={isUploading}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-sm transition-all disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            <span>{isUploading ? "Memproses..." : "Unggah Dokumen APBD (PDF/Excel)"}</span>
          </button>
        </div>
      </div>

      {/* Upload Processing Overlay */}
      {isUploading && (
        <div className="gov-card p-6 bg-red-50/50 border-red-200 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold text-red-900">{uploadStep}</span>
            <span className="text-xs font-bold text-red-700 font-mono">{uploadProgress}%</span>
          </div>
          <div className="w-full bg-red-200/60 h-2.5 rounded-full overflow-hidden">
            <div className="bg-red-600 h-full rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
          </div>
        </div>
      )}

      {/* Detail Analytics Side-by-Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Comparison Table */}
        <div className="lg:col-span-2 gov-card p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Hasil Pemindaian Satuan</h3>
            <div className="relative w-60">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari item/daerah..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
          </div>

          <div className="gov-table-wrapper">
            <table className="gov-table">
              <thead>
                <tr>
                  <th className="text-left">Item Pengadaan</th>
                  <th className="text-left">Daerah</th>
                  <th className="text-right">Harga APBD</th>
                  <th className="text-right">e-Katalog</th>
                  <th className="text-center">Deviasi</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredData.map((r) => {
                  const isSelected = r.id === selectedRow;
                  const isAnomali = r.status === "ANOMALI";
                  return (
                    <tr
                      key={r.id}
                      onClick={() => setSelectedRow(r.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-slate-100/90 font-bold"
                          : isAnomali
                          ? "row-markup-high"
                          : "row-markup-normal"
                      }`}
                    >
                      <td className="font-extrabold text-slate-900">{r.item}</td>
                      <td className="text-slate-600 text-xs font-medium">{r.daerah}</td>
                      <td className="text-right font-mono font-bold text-slate-900">Rp {r.propUnit}M</td>
                      <td className="text-right font-mono font-bold text-slate-900">Rp {r.ekatUnit}M</td>
                      <td className="text-center">
                        <span className={`font-mono font-black text-xs ${isAnomali ? "text-red-700" : "text-emerald-700"}`}>
                          {r.diff}
                        </span>
                      </td>
                      <td className="text-center">
                        {isAnomali ? (
                          <span className="badge-red">ANOMALI</span>
                        ) : (
                          <span className="badge-green">NORMAL</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Explainability & Bar Chart Card */}
        <div className="gov-card p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Rasionalitas Decision AI</span>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isAnomaliSelected ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"}`}>
                {selected.status}
              </span>
            </div>

            <h4 className="text-base font-black text-slate-900 leading-tight mb-1">{selected.item}</h4>
            <p className="text-xs text-slate-500 font-medium">{selected.daerah}</p>

            {/* Bar Chart Comparison */}
            <div className="h-44 my-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#64748B" fontSize={11} />
                  <YAxis stroke="#64748B" fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    <Cell fill={isAnomaliSelected ? "#DC2626" : "#2563EB"} />
                    <Cell fill="#059669" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Skor Gemini Embeddings:</span>
                <span className="font-mono font-bold text-slate-900">0.96 (Sangat Mirip)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Match Kata Kunci BM25:</span>
                <span className="font-mono font-bold text-slate-900">100% Match</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2">
                <span className="text-slate-700 font-bold">RRF Combined Accuracy:</span>
                <span className="font-mono font-black text-emerald-700">97.8%</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => alert(`Soft-Lock dikonfirmasi untuk item "${selected.item}". Dokumen ditandai di dasbor APIP.`)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              Konfirmasi Soft-Lock Anggaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
