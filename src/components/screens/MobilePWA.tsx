'use client'

import { useState } from "react";
import { Search, MapPin, Camera, Bell, Wallet, Home, Target, Plus, Activity, User, ChevronRight, CheckCircle2, ShieldCheck, ArrowLeft, RefreshCw, X, Award, Check, Image as ImageIcon, Send } from "lucide-react";

export function CitizenMobileApp() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'misi' | 'lapor' | 'aktivitas' | 'profil'>('beranda');
  const [activeMissionDetail, setActiveMissionDetail] = useState<any | null>(null);
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [showNewReportModal, setShowNewReportModal] = useState(false);

  // Dynamic user state
  const [userPoints, setUserPoints] = useState(4750);
  const [userVoucher, setUserVoucher] = useState(125000);
  const [notificationsCount, setNotificationsCount] = useState(2);

  // New report form state
  const [reportTitle, setReportTitle] = useState("");
  const [reportCategory, setReportCategory] = useState("Jalan Rusak");
  const [reportDesc, setReportDesc] = useState("");
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);

  // Activity list
  const [activities, setActivities] = useState([
    { id: 1, title: "Verifikasi Bansos BPNT RT 05", date: "22 Jul 2026, 14:20", pts: "+350 Pts", status: "VERIFIED", hash: "0x8f2a9...7c1e" },
    { id: 2, title: "Pelaporan Drainase Tersumbat", date: "20 Jul 2026, 09:15", pts: "+500 Pts", status: "VERIFIED", hash: "0x3c4d1...9f8a" },
  ]);

  const missions = [
    {
      id: 1,
      type: "Pelaporan Jalan Rusak",
      location: "Jl. Diponegoro",
      distance: "2.4 km",
      rewardPts: 500,
      rewardRp: "Rp 15k",
      statusPercent: 45,
      img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80",
      category: "Jalan Rusak",
      desc: "Lakukan pemotretan kondisi retak dan lubang jalan di sepanjang Jl. Diponegoro KM 2.4 dengan geotagging GPS aktif."
    },
    {
      id: 2,
      type: "Verifikasi Bantuan Sosial (BPNT)",
      subtitle: "Laporan Penyaluran RT 05",
      location: "RT 05 / RW 02, Bandung",
      isActive: true,
      distance: "1.2 km",
      rewardPts: 350,
      rewardRp: "Rp 10k",
      statusPercent: 72,
      img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80",
      category: "Bansos BPNT",
      desc: "Verifikasi kesesuaian jumlah paket sembako BPNT yang diterima lansia di RT 05."
    },
  ];

  const handleCompleteMission = (mission: any) => {
    setUserPoints(prev => prev + mission.rewardPts);
    setActivities(prev => [
      {
        id: Date.now(),
        title: `${mission.type} (${mission.location || mission.subtitle})`,
        date: "Baru saja",
        pts: `+${mission.rewardPts} Pts`,
        status: "VERIFIED",
        hash: `0x${Math.random().toString(16).substr(2, 8)}...`
      },
      ...prev
    ]);
    setActiveMissionDetail(null);
    alert(`🎉 Misi Berhasil Diselesaikan! +${mission.rewardPts} Pts ditambahkan ke saldo dompet Anda.`);
  };

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportTitle) return;
    setIsSubmittingReport(true);
    setTimeout(() => {
      setUserPoints(prev => prev + 500);
      setActivities(prev => [
        {
          id: Date.now(),
          title: `Laporan: ${reportTitle}`,
          date: "Baru saja",
          pts: "+500 Pts",
          status: "VERIFIED",
          hash: `0x${Math.random().toString(16).substr(2, 8)}...`
        },
        ...prev
      ]);
      setIsSubmittingReport(false);
      setShowNewReportModal(false);
      setReportTitle("");
      setReportDesc("");
      alert("✅ Laporan Citizen Mining Berhasil Dikirim! +500 Pts ditambahkan ke dompet Anda.");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-0 sm:p-4 font-sans text-slate-800">
      {/* Mobile Outer Container Simulation */}
      <div className="w-full max-w-md bg-white min-h-screen sm:min-h-[844px] sm:max-h-[844px] sm:rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border border-slate-200">
        
        {/* Top Floating User & Wallet Bar */}
        <div className="p-5 pt-8 bg-slate-50 border-b border-slate-200 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-200 border-2 border-white shadow-xs flex items-center justify-center font-bold text-slate-800">
                <User className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-semibold block">Halo,</span>
                <h2 className="text-base font-black text-slate-900 leading-tight">Andi Pratama</h2>
              </div>
            </div>

            {/* Wallet Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xs space-y-1 min-w-[170px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Wallet className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] text-slate-500 font-bold">Points:</span>
                </div>
                <span className="text-xs font-black text-slate-900 font-mono">{userPoints.toLocaleString()} Pts</span>
                <div className="relative">
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                  {notificationsCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                <div className="leading-tight">
                  <span className="text-[9px] text-slate-400 block font-semibold">Voucher Koperasi:</span>
                  <span className="text-xs font-black text-slate-900 font-mono">Rp {userVoucher.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => setShowVoucherModal(true)}
                  className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[9px] font-bold shadow-2xs"
                >
                  Beli Voucher
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Main Body Content */}
        <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-6 bg-slate-50/50">
          
          {/* TAB 1: BERANDA */}
          {activeTab === 'beranda' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-slate-900 tracking-tight">Misi Sekitar Lapangan</h3>
                <button onClick={() => setActiveTab('misi')} className="text-xs font-bold text-blue-600 flex items-center gap-1">
                  Lihat Semua <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {missions.map((mission) => (
                <div key={mission.id} className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs space-y-3 relative">
                  <div className="flex gap-3">
                    <img src={mission.img} alt={mission.type} className="w-24 h-24 rounded-2xl object-cover border border-slate-100 shrink-0" />
                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">Mission</span>
                      <h4 className="text-sm font-black text-slate-900 leading-snug line-clamp-2">{mission.type}: {mission.location || mission.subtitle}</h4>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{mission.distance}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-black text-slate-900">
                        <span className="w-4 h-4 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center text-[10px] font-bold">P</span>
                        <span>{mission.rewardPts} Pts / {mission.rewardRp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                        <span>Progress</span>
                        <span>{mission.statusPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full" style={{ width: `${mission.statusPercent}%` }} />
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveMissionDetail(mission)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs shrink-0"
                    >
                      {mission.isActive ? "Lihat Detail" : "Kerjakan Misi"}
                    </button>
                  </div>
                </div>
              ))}

              {/* Inclusive Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-2xl shadow-xs space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white inline-block">Inklusi Digital Lansia</span>
                <h4 className="text-xs font-bold">Peer Verification Tetangga</h4>
                <p className="text-[11px] text-blue-100 leading-relaxed">
                  Bantu tetangga lansia memverifikasi bansos dan dapatkan bonus poin bersama.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: MISI */}
          {activeTab === 'misi' && (
            <div className="space-y-4">
              <h3 className="text-base font-black text-slate-900">Daftar Misi Aktif</h3>
              <div className="space-y-3">
                {missions.map(m => (
                  <div key={m.id} className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                    <h4 className="font-extrabold text-slate-900 text-xs">{m.type}</h4>
                    <p className="text-[11px] text-slate-600">{m.desc}</p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs font-black text-emerald-700">+{m.rewardPts} Pts</span>
                      <button
                        onClick={() => setActiveMissionDetail(m)}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold"
                      >
                        Buka Misi
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: AKTIVITAS */}
          {activeTab === 'aktivitas' && (
            <div className="space-y-4">
              <h3 className="text-base font-black text-slate-900">Riwayat Aktivitas & Poin</h3>
              <div className="space-y-3">
                {activities.map(act => (
                  <div key={act.id} className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-900 text-xs">{act.title}</h4>
                      <span className="text-xs font-black text-emerald-700">{act.pts}</span>
                    </div>
                    <p className="text-[10px] text-slate-400">{act.date}</p>
                    <div className="flex justify-between items-center pt-1 text-[9px] text-slate-500 font-mono">
                      <span>Hash: {act.hash}</span>
                      <span className="badge-green">{act.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROFIL */}
          {activeTab === 'profil' && (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-200 text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-slate-300 mx-auto flex items-center justify-center font-black text-slate-700 text-xl">
                  AP
                </div>
                <h3 className="text-base font-black text-slate-900">Andi Pratama</h3>
                <p className="text-xs text-slate-500">Citizen Verifier ID: #ID-884920</p>
                <div className="pt-3 border-t border-slate-100 flex justify-around">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Total Poin</span>
                    <span className="text-sm font-black text-slate-900 font-mono">{userPoints.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Voucher Koperasi</span>
                    <span className="text-sm font-black text-slate-900 font-mono">Rp {userVoucher.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* MODAL 1: MISSION DETAIL MODAL */}
        {activeMissionDetail && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-sm p-5 space-y-4 border border-slate-200">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h4 className="font-black text-slate-900 text-sm">{activeMissionDetail.type}</h4>
                <button onClick={() => setActiveMissionDetail(null)} className="p-1 text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <img src={activeMissionDetail.img} className="w-full h-36 rounded-2xl object-cover" />

              <p className="text-xs text-slate-600 leading-relaxed font-medium">{activeMissionDetail.desc}</p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Lokasi Target:</span>
                  <span className="font-bold text-slate-900">{activeMissionDetail.location || activeMissionDetail.subtitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Imbalan Poin:</span>
                  <span className="font-black text-emerald-700 font-mono">+{activeMissionDetail.rewardPts} Pts</span>
                </div>
              </div>

              <button
                onClick={() => handleCompleteMission(activeMissionDetail)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Kirim Foto Verifikasi Lapangan (+{activeMissionDetail.rewardPts} Pts)
              </button>
            </div>
          </div>
        )}

        {/* MODAL 2: FORM LAPOR BARU */}
        {showNewReportModal && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-sm p-5 space-y-4 border border-slate-200">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h4 className="font-black text-slate-900 text-sm">Buat Laporan Citizen Mining Baru</h4>
                <button onClick={() => setShowNewReportModal(false)} className="p-1 text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateReport} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Judul Laporan / Isu:</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Jalan Rusak Parah RT 02"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Kategori APBD:</label>
                  <select
                    value={reportCategory}
                    onChange={(e) => setReportCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium bg-white"
                  >
                    <option value="Jalan Rusak">Infrastruktur / Jalan Rusak</option>
                    <option value="Bansos BPNT">Bantuan Sosial BPNT</option>
                    <option value="Fasilitas Sekolah">Fasilitas TIK Sekolah</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Deskripsi Tambahan:</label>
                  <textarea
                    rows={3}
                    placeholder="Jelaskan kondisi fisik lapangan..."
                    value={reportDesc}
                    onChange={(e) => setReportDesc(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium"
                  />
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-[10px] text-blue-900 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Geotagging GPS & Timestamp otomatis terkunci pada foto.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingReport}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md"
                >
                  {isSubmittingReport ? "Mengirim Laporan..." : "Kirim Laporan Lapangan (+500 Pts)"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 3: VOUCHER REDEEM MODAL */}
        {showVoucherModal && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-sm p-5 space-y-4 border border-slate-200 text-center">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h4 className="font-black text-slate-900 text-sm">Voucher Koperasi Merah Putih</h4>
                <button onClick={() => setShowVoucherModal(false)} className="p-1 text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Nominal Voucher Aktif</span>
                <p className="text-2xl font-black text-slate-900 font-mono">Rp {userVoucher.toLocaleString()}</p>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  🟢 Status: Active (PBI 23/6/PBI/2021)
                </span>
              </div>

              <p className="text-xs text-slate-500 leading-snug">
                Tunjukkan QR Code ini di Koperasi Merah Putih terdekat untuk menukarkan bahan pokok sembako.
              </p>

              <button
                onClick={() => {
                  alert("Voucher Berhasil Dikonfirmasi! Kode QR siap dipindai di Koperasi mitra.");
                  setShowVoucherModal(false);
                }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Gunakan Voucher Sekarang
              </button>
            </div>
          </div>
        )}

        {/* Floating Bottom Navigation Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-between z-30 shadow-lg">
          {/* Beranda */}
          <button
            onClick={() => setActiveTab('beranda')}
            className={`flex flex-col items-center gap-1 relative ${activeTab === 'beranda' ? 'text-red-600' : 'text-slate-400 hover:text-slate-700'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold">Beranda</span>
            {activeTab === 'beranda' && <div className="w-6 h-0.5 bg-red-600 rounded-full absolute -top-2" />}
          </button>

          {/* Misi */}
          <button
            onClick={() => setActiveTab('misi')}
            className={`flex flex-col items-center gap-1 relative ${activeTab === 'misi' ? 'text-red-600' : 'text-slate-400 hover:text-slate-700'}`}
          >
            <Target className="w-5 h-5" />
            <span className="text-[10px] font-bold">Misi</span>
            {activeTab === 'misi' && <div className="w-6 h-0.5 bg-red-600 rounded-full absolute -top-2" />}
          </button>

          {/* Floating Center '+' Button */}
          <div className="-mt-6">
            <button
              onClick={() => setShowNewReportModal(true)}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 border-4 border-white hover:scale-105 transition-transform"
            >
              <Plus className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Aktivitas */}
          <button
            onClick={() => setActiveTab('aktivitas')}
            className={`flex flex-col items-center gap-1 relative ${activeTab === 'aktivitas' ? 'text-red-600' : 'text-slate-400 hover:text-slate-700'}`}
          >
            <Activity className="w-5 h-5" />
            <span className="text-[10px] font-bold">Aktivitas</span>
            {activeTab === 'aktivitas' && <div className="w-6 h-0.5 bg-red-600 rounded-full absolute -top-2" />}
          </button>

          {/* Profil */}
          <button
            onClick={() => setActiveTab('profil')}
            className={`flex flex-col items-center gap-1 relative ${activeTab === 'profil' ? 'text-red-600' : 'text-slate-400 hover:text-slate-700'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold">Profil</span>
            {activeTab === 'profil' && <div className="w-6 h-0.5 bg-red-600 rounded-full absolute -top-2" />}
          </button>
        </div>

      </div>
    </div>
  );
}

export default CitizenMobileApp;
