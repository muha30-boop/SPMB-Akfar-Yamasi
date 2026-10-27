import React from 'react';

const SmartBillingCard = ({ billingAmount = '250.000' }) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between pb-3">
        <span className="font-label-sm text-primary uppercase tracking-wider font-semibold">Integrasi Smart Billing</span>
        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm">
          Otomatis Terverifikasi
        </span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Rincian Pembayaran Pendaftaran</h3>
      <p className="font-body-sm text-on-surface-variant mb-4">
        Sistem mengeluarkan nomor Virtual Account unik setelah formulir awal dikonfirmasi.
      </p>
      <div className="bg-surface-container-low p-4 rounded-xl space-y-3 mb-4">
        <div className="flex items-center justify-between font-body-sm">
          <span className="text-on-surface-variant">Nomor Virtual Account:</span>
          <span className="font-label-md text-primary font-mono select-all">988 2025 8812 0941</span>
        </div>
        <div className="flex items-center justify-between font-body-sm">
          <span className="text-on-surface-variant">Bank Penerima:</span>
          <span className="font-label-md text-on-surface">Bank Syariah Indonesia (BSI) / Mandiri</span>
        </div>
        <div className="flex items-center justify-between font-body-sm">
          <span className="text-on-surface-variant">Atas Nama:</span>
          <span className="font-label-md text-on-surface">SPMB AKFAR YAMASI [NAMA MHS]</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="font-label-md text-on-surface">Total Tagihan:</span>
            <span className="font-title-lg text-title-lg text-primary font-bold" id="billingAmountDisplay">
            Rp {billingAmount}
          </span>
        </div>
      </div>
      <div className="p-3 bg-surface-container rounded-lg flex items-center justify-between text-body-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">receipt_long</span>
          <span className="font-label-sm text-on-surface">Bayar via Teller / Non-VA?</span>
        </div>
        <button
          className="font-label-sm text-primary hover:underline"
          onClick={() =>
            alert('Unggah bukti bayar teller dapat dilakukan langsung setelah submit biodata di panel peserta.')
          }
          type="button"
        >
          Upload Struk
        </button>
      </div>
    </div>
  );
};

const ExamCard = () => {
  const [showDownloadAlert, setShowDownloadAlert] = React.useState(false);

  React.useEffect(() => {
    if (showDownloadAlert) {
      alert('Mengunduh Kartu Peserta Ujian Seleksi Masuk D-3 Farmasi Akfar Yamasi (PDF Ber-Barcode Resmi)...');
      setShowDownloadAlert(false);
    }
  }, [showDownloadAlert]);

  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-md relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
          <span className="font-label-md text-on-surface">Pratinjau Kartu Ujian CBT</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm">
          Siap Cetak
        </span>
      </div>
      <div className="p-4 rounded-xl bg-surface-container-low shadow-inner">
        <div className="flex items-center justify-between pb-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-bold">
              Y
            </div>
            <span className="font-label-sm font-bold text-primary">AKFAR YAMASI MAKASSAR</span>
          </div>
          <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface">
            TA 2025/2026
          </span>
        </div>
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-4 flex flex-col items-center">
            <img
              className="w-20 h-24 object-cover rounded-md shadow-sm mb-1"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3F2Gox-whWjafjSjbWzZFheFKB5PD43zQBMqO-CLeS3FGoMifF7jtDrNMUw6ajMksHIaIhhTgytyGvwzi8CDZYONjo9jLyNXwyVeriPdcEIvBYspviU2GyKyAf3bS1LYBMAbT1lzZL1WNQt35VVUYnrqiZHQ-v-6Ies8hE5f64FLxX2mmo_YUUgiiLxblM8PpHVxTSu03egIZKVuNVrtyzVo2QdAwckjAkZqZjjg_Dy15r5smWMo"
              alt="Portrait of an Indonesian female pharmacy candidate"
            />
            <span className="text-[10px] font-label-sm text-outline font-mono">NO: 25041088</span>
          </div>
          <div className="col-span-8 space-y-1 text-[12px]">
            <p className="font-label-md text-on-surface leading-tight">Annisa Rahmadani Putri</p>
            <p className="text-on-surface-variant text-[11px]">Jalur: Seleksi Reguler CBT</p>
            <p className="text-on-surface-variant text-[11px]">
              Ruang: <span className="font-semibold text-on-surface">Lab Komputer Lt. 2 Kampus</span>
            </p>
            <p className="text-on-surface-variant text-[11px]">Sesi: 09.00 - 11.30 WITA</p>
            <div className="pt-2 flex items-center gap-2">
              <div className="w-10 h-10 bg-surface-container-highest rounded p-1 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]">qr_code_2</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-outline uppercase font-mono">Verifikasi Pengawas</span>
                <span className="text-[10px] font-semibold text-secondary">VALID_PMB_2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className="w-full py-2 rounded-lg bg-surface-container text-on-surface font-label-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5"
          onClick={() => setShowDownloadAlert(true)}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">print</span>
          Simulasi Unduh PDF Kartu
        </button>
      </div>
    </div>
  );
};

const ResultCard = () => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-md relative overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          stars
        </span>
        <h4 className="font-label-md text-on-surface">Hasil Seleksi &amp; Onboarding Mahasiswa</h4>
      </div>
      <div className="p-4 rounded-xl bg-gradient-to-br from-secondary-container/40 via-surface-container-low to-tertiary-fixed/20 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">done_all</span>
            LOLOS SELEKSI UTAMA
          </span>
        </div>
        <p className="font-title-md text-on-surface font-bold">Selamat! Anda Dinyatakan Diterima</p>
        <p className="font-body-sm text-on-surface-variant text-[12px] mb-3">
          Program Studi D-3 Farmasi Akademi Farmasi Yamasi Makassar
        </p>
        <div className="space-y-1.5 pt-2 text-body-sm">
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-on-surface-variant">Nomor Induk Mahasiswa (NIM):</span>
            <span className="font-label-md text-primary font-mono font-bold">2025041088</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-on-surface-variant">Rombongan Belajar (Rombel):</span>
            <span className="font-label-md text-on-surface">Kelas Reguler A (Pagi)</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-on-surface-variant">Dosen Pembimbing Akademik:</span>
            <span className="font-label-md text-on-surface">apt. Nurwahida, M.Farm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SmartBillingCard, ExamCard, ResultCard };
