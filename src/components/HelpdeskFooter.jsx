import React from 'react';

const HelpdeskSection = () => {
  return (
    <section className="w-full py-12 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm uppercase">
              Layanan Konsultasi Pendaftaran
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-primary font-bold">
              Butuh Bantuan Pengisian Formulir atau Asesmen RPL?
            </h3>
            <p className="font-body-md text-on-primary-container max-w-xl">
              Staf admisi panitia SPMB Akfar Yamasi siap mendampingi Anda via WhatsApp setiap hari kerja (08.00 - 16.00
              WITA).
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="px-6 py-3.5 rounded-lg bg-surface-container-lowest text-primary font-label-lg hover:bg-surface-container-low transition-all shadow-md flex items-center gap-2"
              href="https://wa.me/6281245678901?text=Halo%20Panitia%20PMB%20Akfar%20Yamasi%2C%20saya%20ingin%20bertanya%20tentang%20pendaftaran"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat WhatsApp Admisi</span>
            </a>
            <a
              className="px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-lg hover:bg-secondary transition-all shadow-sm flex items-center gap-2"
              href="tel:0411891234"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>(0411) 891234</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1WssRz43UrDf-9w7Hp-tr_SBieJRhO-8mCENIjQqDNEy-DdA5mea9m8peDpkIcLrU71N3GW2Jf8k33ZYEjHtkBYdbg0oLPUnto_4Dr4Ov_Iksjc0S3fqV2_IRjfMiwG8cXUUo_Dpww4KcKTDgm-SMT-F3oZd1nSTLnX8MUcg2Cl_yd8qr4ERX1jIvchptGjZVf0056aEIL1VZ9Tc5s6vU3ykBdz8fHk1L0wZbOdsFnQs3fmXdAtLt-sbxg';

  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-2 space-y-space-md">
          <div className="flex items-center gap-space-md">
            <img alt="Logo Akfar Yamasi Makassar" className="h-8 w-auto object-contain" src={logoUrl} />
            <span className="font-title-lg text-title-lg text-primary">Akademi Farmasi Yamasi Makassar</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Pusat pendidikan tinggi tenaga kefarmasian profesional, berkarakter saintifik, dan berintegritas tinggi di
            Indonesia Timur. Terakreditasi LAM-PTKes dengan fasilitas laboratorium klinis dan farmasi modern.
          </p>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <span className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container">
              Terakreditasi Baik Sekali
            </span>
            <span className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">
              SK BAN-PT &amp; LAM-PTKes
            </span>
          </div>
        </div>
        <div className="space-y-space-sm">
          <h4 className="font-title-md text-title-md text-on-surface">Kampus &amp; Lokasi</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Jl. Yamasi No. 1, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
            Jam Layanan PMB: Senin - Jumat (08.00 - 16.00 WITA)
          </p>
        </div>
        <div className="space-y-space-sm">
          <h4 className="font-title-md text-title-md text-on-surface">Kontak &amp; Layanan SPMB</h4>
          <div className="space-y-space-xs">
            <p className="font-body-sm text-body-sm text-on-surface-variant">Hotline WhatsApp: +62 812-4567-8901</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Email Admisi: pmb@yamasi.ac.id</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Telepon: (0411) 891234</p>
          </div>
          <div className="flex items-center gap-space-md pt-space-sm">
            <a className="p-2 rounded-lg bg-surface-container hover:bg-secondary-container hover:text-on-secondary-container transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
            <a className="p-2 rounded-lg bg-surface-container hover:bg-secondary-container hover:text-on-secondary-container transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="p-2 rounded-lg bg-surface-container hover:bg-secondary-container hover:text-on-secondary-container transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-surface-container py-space-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <span>&copy; 2025 Panitia SPMB Akademi Farmasi Yamasi Makassar. Hak Cipta Dilindungi.</span>
          <span>Sistem Informasi Admisi Terintegrasi PDDIKTI</span>
        </div>
      </div>
    </footer>
  );
};

export { HelpdeskSection, Footer };
