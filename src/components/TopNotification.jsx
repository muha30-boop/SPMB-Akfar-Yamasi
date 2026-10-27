import React from 'react';

const TopNotification = () => {
  return (
    <section className="w-full bg-secondary-container/40 py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-on-secondary-container text-body-sm font-body-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-on-primary text-[12px]">
            <span className="material-symbols-outlined text-[14px]">campaign</span>
          </span>
          <span className="font-label-md">Gelombang 1 Dibuka:</span>
          <span>Pendaftaran TA 2025/2026 s.d. 30 Juni 2025. Kuota Terbatas untuk 120 Calon Mahasiswa Baru.</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="underline decoration-primary font-label-md text-primary hover:text-on-secondary-fixed transition-colors"
            href="#quick-track"
          >
            Cek Status NIK
          </a>
          <span className="text-outline-variant">|</span>
          <a
            className="inline-flex items-center gap-1 font-label-md text-primary hover:opacity-80"
            href="https://wa.me/6281245678901"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            Helpdesk PMB
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopNotification;
