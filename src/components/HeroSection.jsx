import React from 'react';

const TrustBadge = ({ icon, label, className = '' }) => {
  return (
    <span
      className={
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-sm ' +
        className
      }
    >
      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
        {icon}
      </span>
      {label}
    </span>
  );
};

const TrustBadgeAlt = ({ icon, label, className = '' }) => {
  return (
    <span
      className={
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-sm ' +
        className
      }
    >
      <span className={`material-symbols-outlined text-[16px]`}>{icon}</span>
      {label}
    </span>
  );
};

const QuickTrackBox = () => {
  const [query, setQuery] = React.useState('');
  const [result, setResult] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);

  const handleQuickCheck = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setIsSearching(true);
    setShowResult(true);
    setResult(null);

    setTimeout(() => {
      setIsSearching(false);
      setResult({
        name: 'Annisa Rahmadani Putri',
        jalur: 'Reguler Gelombang 1',
        reg: 'PMB2025-0812',
        status: 'Siap Ikuti Ujian CBT',
      });
    }, 600);
  };

  const handleDownloadMockCard = () => {
    alert('Mengunduh Kartu Peserta Ujian Seleksi Masuk D-3 Farmasi Akfar Yamasi (PDF Ber-Barcode Resmi)...');
  };

  return (
    <div className="w-full max-w-xl bg-surface-container-lowest p-4 rounded-xl shadow-md mb-8" id="quick-track">
      <div className="flex items-center justify-between mb-2">
        <span className="font-label-md text-primary flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px]">manage_search</span>
          Quick Track Status &amp; Cetak Kartu Ujian
        </span>
        <span className="text-label-sm text-on-surface-variant">Real-time SPMB Sync</span>
      </div>
      <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleQuickCheck}>
        <div className="relative flex-grow">
          <input
            className="w-full h-11 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface font-body-md placeholder:text-outline text-label-md focus:outline-none focus:bg-surface-container-lowest"
            id="quickSearchInput"
            maxLength="16"
            placeholder="Masukkan 16 Digit NIK atau No. Pendaftaran"
            required
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[20px]">
            badge
          </span>
        </div>
        <button
          className="h-11 px-5 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-primary transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
          type="submit"
        >
          <span>Lacak Berkas</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </form>
      <div
        className={`mt-3 p-3 rounded-lg bg-surface-container-low text-body-sm text-on-surface-variant ${showResult ? 'block' : 'hidden'}`}
        id="quickSearchResult"
      >
        {isSearching && (
          <div className="flex items-center gap-2 text-primary font-label-md">
            <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
            <span>Mencari data pendaftar &quot;{query}&quot; di server admisi...</span>
          </div>
        )}
        {result && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-on-surface font-semibold">Ditemukan: {result.name}</span>
              <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[11px] font-bold">
                TERVERIFIKASI
              </span>
            </div>
            <p className="text-[12px] text-on-surface-variant">
              Jalur: {result.jalur} | No. Reg: {result.reg} | Status: {result.status}
            </p>
            <div className="flex gap-2 pt-1">
              <button
                className="px-3 py-1 rounded bg-primary-container text-on-primary text-[12px] font-label-md hover:bg-primary"
                onClick={handleDownloadMockCard}
                type="button"
              >
                Unduh Kartu Ujian
              </button>
              <a
                className="px-3 py-1 rounded bg-surface-container text-on-surface text-[12px] font-label-md hover:bg-surface-container-high"
                href="#kelulusan"
              >
                Lihat Detail Akun
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface py-12 lg:py-16">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <TrustBadge icon="verified" label="Akreditasi Baik Sekali (LAM-PTKes)" className="text-primary" />
              <TrustBadgeAlt icon="medical_services" label="Pusat Uji Kompetensi Tenaga Vokasi" className="text-on-surface-variant" />
              <TrustBadgeAlt icon="credit_card" label="Smart Billing VA" className="bg-tertiary-fixed text-on-tertiary-fixed" />
            </div>
            <h1 className="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-surface tracking-tight mb-4">
              Wujudkan Karier Tenaga Teknis Kefarmasian{' '}
              <span className="text-primary underline decoration-secondary-fixed-dim">Profesional &amp; Unggul</span>{' '}
              di Indonesia Timur
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              Penerimaan Mahasiswa Baru Tahun Akademik 2025/2026 Diploma III (D-3) Farmasi Akfar Yamasi Makassar.
              Tersedia Jalur Reguler (lulusan baru) dan Rekognisi Pembelajaran Lampau (RPL untuk praktisi asisten
              apoteker).
            </p>
            <QuickTrackBox />
            <div className="grid grid-cols-3 gap-6 pt-2">
              <div>
                <p className="font-headline-md text-headline-md text-primary font-bold">96.8%</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Lulus Uji Kompetensi</p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary font-bold">1 Bulan</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Rata-rata Waktu Tunggu Kerja</p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary font-bold">14+ Lab</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Fasilitas Farmasi Khusus</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container/30 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm">
                  Lulusan SMA / SMK / MA
                </span>
                <span className="font-label-sm text-on-surface-variant">Kuota: 80 Kursi</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-title-lg text-title-lg text-on-surface">Jalur Reguler SPMB</h3>
                <span className="font-label-lg text-primary font-bold">Rp 250.000</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Pilihan ideal untuk lulusan baru IPA/SMK Farmasi/Kesehatan. Seleksi berbasis nilai rapor semester 1-5,
                asesmen berkas, dan tes Computer Based Test (CBT) mandiri.
              </p>
              <ul className="space-y-2 mb-5 font-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  Nilai Rapor rata-rata minimal 75.00
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  Bebas tes buta warna parsial/total (Wajib)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  CBT Online atau offline di Lab Komputer Kampus
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <a
                  className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-center hover:bg-primary transition-colors shadow-sm flex items-center justify-center gap-2"
                  href="#formulir-section"
                >
                  <span>Pilih Jalur Reguler</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                </a>
              </div>
            </div>
            <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed/40 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm font-semibold">
                  Praktisi &amp; Tenaga Asisten Apoteker
                </span>
                <span className="font-label-sm text-on-surface-variant">Kuota: 40 Kursi</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-title-lg text-title-lg text-on-surface">Jalur RPL (Tipe A)</h3>
                <span className="font-label-lg text-tertiary font-bold">Rp 450.000</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Konversi pengalaman kerja lapangan di Apotek, IFRS, Puskesmas, atau PBF menjadi SKS perkuliahan
                resmi. Kuliah lebih singkat (hingga 3-4 semester saja).
              </p>
              <ul className="space-y-2 mb-5 font-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                  Penyetaraan portofolio kerja min. 2 tahun
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                  Transfer SKS dari D-1/D-2/Institusi sebelumnya
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                  Asesmen lisan oleh Asesor RPL Bersertifikat
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <a
                  className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-center hover:bg-surface-container-high transition-colors shadow-sm flex items-center justify-center gap-2"
                  href="#formulir-section"
                >
                  <span>Pilih Jalur RPL</span>
                  <span className="material-symbols-outlined text-[16px]">badge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
