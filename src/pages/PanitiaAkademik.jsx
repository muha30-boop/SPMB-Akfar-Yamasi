import React from 'react';
import { Link } from 'react-router-dom';

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1WssRz43UrDf-9w7Hp-tr_SBieJRhO-8mCENIjQqDNEy-DdA5mea9m8peDpkIcLrU71N3GW2Jf8k33ZYEjHtkBYdbg0oLPUnto_4Dr4Ov_Iksjc0S3fqV2_IRjfMiwG8cXUUo_Dpww4KcKTDgm-SMT-F3oZd1nSTLnX8MUcg2Cl_yd8qr4ERX1jIvchptGjZVf0056aEIL1VZ9Tc5s6vU3ykBdz8fHk1L0wZbOdsFnQs3fmXdAtLt-sbxg';

const PanitiaAkademik = () => {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
      <aside className="fixed left-0 top-0 h-full w-72 bg-primary-container z-50 flex flex-col justify-between py-6 px-4 shadow-[2px_0_12px_rgba(40,122,116,0.12)]">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-md px-3 pb-6 border-b border-primary/40">
            <img alt="Logo Akfar Yamasi Makassar" className="h-8 w-auto object-contain bg-surface-container-lowest rounded-lg p-1" src={logoUrl} />
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-on-primary tracking-tight">PANEL ADMISI</span>
              <span className="font-label-sm text-label-sm text-tertiary-fixed">AKFAR Yamasi Makassar</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="px-3 mb-2 font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed opacity-75">
              Menu Panitia &amp; Akademik
            </p>
            <nav className="flex flex-col gap-1.5" data-active-classes="bg-surface-container-lowest text-primary font-label-lg rounded-xl shadow-sm">
              <a aria-current="page" className="flex items-center gap-3 px-3.5 py-3 transition-all bg-surface-container-lowest text-primary font-label-lg rounded-xl shadow-sm" data-path="panel-pmb" href="#">
                <span className="material-symbols-outlined text-[20px]">space_dashboard</span>
                <span>Dashboard Ringkasan</span>
              </a>
              <a className="flex items-center gap-3 px-3.5 py-3 rounded-xl font-label-md text-label-md text-on-primary hover:bg-primary hover:text-on-primary transition-all" data-path="verifikasi-berkas" href="#">
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Verifikasi Berkas</span>
              </a>
              <a className="flex items-center gap-3 px-3.5 py-3 rounded-xl font-label-md text-label-md text-on-primary hover:bg-primary hover:text-on-primary transition-all" data-path="asesmen-portofolio-rpl" href="#">
                <span className="material-symbols-outlined text-[20px]">assignment_ind</span>
                <span>Asesmen Portofolio RPL</span>
              </a>
              <a className="flex items-center gap-3 px-3.5 py-3 rounded-xl font-label-md text-label-md text-on-primary hover:bg-primary hover:text-on-primary transition-all" data-path="manajemen-ujian-masuk" href="#">
                <span className="material-symbols-outlined text-[20px]">quiz</span>
                <span>Manajemen Ujian Masuk</span>
              </a>
              <a className="flex items-center gap-3 px-3.5 py-3 rounded-xl font-label-md text-label-md text-on-primary hover:bg-primary hover:text-on-primary transition-all" data-path="admisi-dan-penetapan" href="#">
                <span className="material-symbols-outlined text-[20px]">badge</span>
                <span>Admisi &amp; Penetapan NIM</span>
              </a>
              <a className="flex items-center gap-3 px-3.5 py-3 rounded-xl font-label-md text-label-md text-on-primary hover:bg-primary hover:text-on-primary transition-all" data-path="export-pddikti-siakad" href="#">
                <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                <span>Export PDDIKTI / SIAKAD</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="pt-4 border-t border-primary/40 px-2">
          <Link className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg font-label-sm text-label-sm text-on-primary bg-primary hover:bg-primary-container transition-all" data-path="portal-spmb" to="/">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Kembali ke Portal Publik</span>
          </Link>
        </div>
      </aside>

      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,97,91,0.05)] z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img alt="Logo Akfar Yamasi Makassar" className="h-8 w-auto object-contain" src={logoUrl} />
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">search</span>
              <input className="w-96 pl-10 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="Cari nomor pendaftaran, nama calon mahasiswa, NIK..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <button className="relative p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-3 pl-2">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-label-md text-label-md text-on-surface">Panitia SPMB 2025</span>
                <span className="font-label-sm text-label-sm text-secondary">Staf Verifikator Akademik</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 w-full px-8 pb-12 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            {/* Top Command & Action Bar */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg mb-space-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-sm mb-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-primary/10 text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                    Tahun Ajaran 2025/2026
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[14px]">cloud_sync</span>
                    Sinkronisasi SIAKAD &amp; PDDIKTI Terhubung
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Panel Panitia &amp; Admisi SPMB
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Pusat verifikasi berkas, asesmen RPL Tenaga Teknis Kefarmasian, dan admisi terintegrasi D-3 Farmasi Yamasi.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <select className="appearance-none bg-surface-container-lowest font-label-md text-label-md text-on-surface px-4 py-2.5 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
                    <option>Gelombang 1 (2025/2026) - Aktif</option>
                    <option>Gelombang 2 (2025/2026) - Terjadwal</option>
                    <option>Jalur RPL Khusus Nakes Semester Ganjil</option>
                    <option>Arsip SPMB 2024/2025</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant text-[20px]">expand_more</span>
                </div>
                <button className="flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container font-label-md text-label-md text-primary px-4 py-2.5 rounded-xl shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Verifikasi Masuk</span>
                  <span className="px-2 py-0.5 rounded-full bg-error text-on-error text-label-sm font-label-sm ml-0.5">8 Baru</span>
                </button>
                <button className="flex items-center gap-2 bg-tertiary-fixed hover:bg-tertiary-fixed-dim font-label-md text-label-md text-on-tertiary-fixed px-4 py-2.5 rounded-xl shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[18px]">file_download</span>
                  <span>Export PDDIKTI / SIAKAD</span>
                </button>
                <button className="flex items-center gap-2 bg-primary-container hover:bg-primary font-label-md text-label-md text-on-primary px-4 py-2.5 rounded-xl shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[18px]">person_add</span>
                  <span>+ Tambah Pendaftar</span>
                </button>
              </div>
            </div>

            {/* Key Metrics Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
              {/* Card 1: Total Pendaftar */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Registrasi</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface leading-none">482</span>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center font-semibold">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>+18%
                      </span>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">groups</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                  <span>Kapasitas Target: 500 Maba</span>
                  <span className="font-label-md text-label-md text-primary font-semibold">96.4%</span>
                </div>
                <div className="w-full bg-surface-container-low h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: '96.4%' }}></div>
                </div>
              </div>

              {/* Card 2: Pembayaran Registrasi */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Pembayaran Lunas</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display-lg text-display-lg text-primary leading-none">395</span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">/ 482</span>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mt-4 pt-3 text-center">
                  <div className="bg-surface-container-low rounded-lg p-1.5">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Verifikasi</p>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">28</p>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-1.5">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Belum</p>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">45</p>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-1.5">
                    <p className="font-label-sm text-label-sm text-error">Gagal</p>
                    <p className="font-label-md text-label-md text-error font-semibold">14</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Berkas & Seleksi Admisi */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Lolos Administrasi</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface leading-none">310</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                        260 Diterima
                      </span>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mt-4 pt-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                    Asesmen RPL: 35
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-error"></span>
                    Revisi: 18
                  </span>
                </div>
                <div className="w-full bg-surface-container-low h-1.5 rounded-full mt-1.5 overflow-hidden flex">
                  <div className="bg-primary-container h-full" style={{ width: '65%' }}></div>
                  <div className="bg-tertiary-container h-full" style={{ width: '15%' }}></div>
                  <div className="bg-error h-full" style={{ width: '8%' }}></div>
                </div>
              </div>

              {/* Card 4: Distribusi Jalur */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Distribusi Jalur</span>
                    <div className="flex items-center gap-3 mt-1.5">
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Reguler (SMA/SMK)</p>
                        <p className="font-title-lg text-title-lg text-on-surface font-semibold">362</p>
                      </div>
                      <div className="w-px h-8 bg-surface-container-high"></div>
                      <div>
                        <p className="font-label-sm text-label-sm text-primary font-semibold">Jalur RPL TTK</p>
                        <p className="font-title-lg text-title-lg text-primary font-semibold">120</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">medication</span>
                  </div>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface-variant">Asesmen Portofolio Selesai</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">85 / 120 (71%)</span>
                </div>
              </div>
            </div>

            {/* Operational Tabs Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-md bg-surface-container-low p-1.5 rounded-xl">
              <div className="flex flex-wrap items-center gap-1.5">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">table_rows</span>
                  <span>Semua Data Pendaftar</span>
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">482</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-variance hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Verifikasi Berkas &amp; RPL (Split Screen)</span>
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-error text-on-error text-label-sm font-label-sm">42 Antrian</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                  <span>Manajemen Ruang CBT &amp; Wawancara</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                  <span>Admisi, NIM &amp; Dosen PA</span>
                </button>
              </div>

              <div className="flex items-center gap-2 px-2">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">tune</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Tampilkan:</span>
                <select className="bg-surface-container-lowest font-label-sm text-label-sm text-on-surface rounded-lg px-2.5 py-1.5 shadow-sm focus:outline-none">
                  <option>Semua Status Berkas</option>
                  <option>Menunggu Verifikasi</option>
                  <option>Proses Asesmen RPL</option>
                  <option>Lolos Ujian / Diterima</option>
                </select>
              </div>
            </div>

            {/* Main Table Section */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-space-xl">
              {/* Table Header Controls & Search Filter */}
              <div className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container-lowest">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative w-80">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">person_search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all" placeholder="Ketik Nama, NIK, atau ID Pendaftaran..." type="text" />
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="bg-surface-container-low font-body-sm text-body-sm text-on-surface rounded-lg px-3 py-2 focus:outline-none">
                      <option>Semua Jalur (Reguler &amp; RPL)</option>
                      <option>Reguler (SMA / SMK)</option>
                      <option>RPL (Tenaga Teknis Farmasi)</option>
                    </select>
                    <select className="bg-surface-container-low font-body-sm text-body-sm text-on-surface rounded-lg px-3 py-2 focus:outline-none">
                      <option>Status Bayar: Semua</option>
                      <option>Lunas</option>
                      <option>Menunggu Verifikasi</option>
                      <option>Belum Bayar</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end lg:self-auto">
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-all">
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>Cetak Presensi Tes</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-all">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    <span>Unduh CSV</span>
                  </button>
                </div>
              </div>

              {/* Data Table Container */}
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[1300px]">
                  <thead>
                    <tr className="bg-surface-container-low text-primary font-label-md text-label-md uppercase tracking-wider">
                      <th className="py-3.5 px-4 w-12 text-center">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </th>
                      <th className="py-3.5 px-4">No / ID &amp; Tgl</th>
                      <th className="py-3.5 px-4">Identitas Calon Mahasiswa</th>
                      <th className="py-3.5 px-4">Asal Sekolah &amp; Kontak</th>
                      <th className="py-3.5 px-4">Jalur &amp; Tagihan</th>
                      <th className="py-3.5 px-4">Status Bayar</th>
                      <th className="py-3.5 px-4">Status Berkas &amp; Rapor</th>
                      <th className="py-3.5 px-4">Ujian &amp; NIM Admisi</th>
                      <th className="py-3.5 px-4 text-center">Aksi Cepat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container text-body-md font-body-md text-on-surface">
                    {/* Row 1: Reguler - Diterima & Ber-NIM */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-4 text-center">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-label-md text-label-md text-primary font-bold">PMB25-0102</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">14 Mei 2025, 09:30</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-md shrink-0">NA</div>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-semibold">Nurul Aisyah Maharani</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">NIK: 7371124508050001</p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">Makassar, 12 Ags 2006 • Islam</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-body-sm text-body-sm font-medium">SMK Farmasi Yamasi Makassar</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">0812-4211-9870</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">nurul.aisyah@gmail.com</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-on-surface font-medium">Reguler (D-3 Farmasi)</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-mono">Rp 250.000</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Lunas
                        </span>
                        <button className="block mt-1 text-label-sm font-label-sm text-primary hover:underline">Struk Bayar (BSI)</button>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                          <span className="material-symbols-outlined text-[14px]">done_all</span> Diterima
                        </span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Rata Rapor: <span className="font-semibold text-on-surface">88.50</span></p>
                        <div className="flex gap-1.5 mt-1 text-primary">
                          <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-secondary" title="Ijazah / SKL Ada">description</span>
                          <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-secondary" title="Pasfoto 3x4 Ada">account_box</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-label-md text-label-md font-mono text-primary font-bold block">2501001</span>
                        <p className="font-label-sm text-label-sm text-on-surface font-medium">Kelas: Reguler A</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">PA: apt. Nurfadilah, M.Farm.</p>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 rounded-lg text-primary hover:bg-surface-container transition-all" title="Cetak Kartu Ujian/Admisi">
                            <span className="material-symbols-outlined text-[18px]">badge</span>
                          </button>
                          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" title="Detail Data Mahasiswa">
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                          </button>
                          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" title="Edit Biodata">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2: Jalur RPL TTK - Proses Asesmen */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-4 text-center">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-label-md text-label-md text-primary font-bold">RPL25-0044</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">15 Mei 2025, 14:10</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-label-md shrink-0">AR</div>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-semibold">Ahmad Rizal Fahrezi</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">NIK: 7371081903960004</p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">Gowa, 19 Mar 1996 • Islam</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-body-sm text-body-sm font-medium">RSUD Syekh Yusuf Gowa (TTK)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">0852-9901-2234</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">rizal.ttk@rsudgowa.id</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm bg-primary-container text-on-primary font-medium">RPL TTK (Alih Jenjang)</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-mono">Rp 450.000</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Lunas
                        </span>
                        <button className="block mt-1 text-label-sm font-label-sm text-primary hover:underline">Struk Bayar (Mandiri)</button>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                          <span className="material-symbols-outlined text-[14px]">psychology</span> Proses Asesmen RPL
                        </span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Konversi Usulan: <span className="font-semibold text-primary">48 SKS</span></p>
                        <div className="flex gap-1.5 mt-1 text-primary">
                          <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-secondary" title="Transkrip D3 Lama">history_edu</span>
                          <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-secondary" title="STRK Aktif Terunggah">clinical_notes</span>
                          <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-secondary" title="Portofolio Logbook Pelayanan">folder_shared</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-body-sm text-body-sm text-on-surface-variant italic">Menunggu Sidang Asesor</span>
                        <p className="font-label-sm text-label-sm text-on-surface">Tes Wawancara: 20 Mei 2025</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Rencana Kelas: RPL Sore</p>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm hover:bg-primary transition-all">Asesmen SKS</button>
                          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all">
                            <span className="material-symbols-outlined text-[18px]">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3: Menunggu Verifikasi Berkas (New) */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/30">
                      <td className="py-3.5 px-4 text-center">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-label-md text-label-md text-primary font-bold">PMB25-0158</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Hari ini, 08:15</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md shrink-0">FT</div>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-semibold">Fathir Tri Wicaksono</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">NIK: 7371101101060002</p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">Maros, 11 Jan 2007 • Islam</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-body-sm text-body-sm font-medium">SMA Negeri 1 Maros (IPA)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">0821-8876-1102</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">fathir.wicaksono@yahoo.com</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-on-surface font-medium">Reguler (D-3 Farmasi)</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-mono">Rp 250.000</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Lunas
                        </span>
                        <button className="block mt-1 text-label-sm font-label-sm text-primary hover:underline">Struk Bayar (BRI)</button>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface font-semibold">
                          <span className="material-symbols-outlined text-[14px]">hourglass_top</span> Menunggu Verifikasi
                        </span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Rata Rapor: <span className="font-semibold text-on-surface">84.20</span></p>
                        <div className="flex gap-1.5 mt-1 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px] text-primary" title="Ijazah/SKL Terunggah">description</span>
                          <span className="material-symbols-outlined text-[16px] text-primary" title="Pasfoto Terunggah">account_box</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Tes CBT Gel. 1</span>
                        <p className="font-label-sm text-label-sm text-on-surface">Lab Komputer Yamasi B</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">22 Mei 2025 • 08:30 WITA</p>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button className="px-3 py-1 rounded-lg bg-primary font-label-sm text-label-sm text-on-primary hover:bg-primary-container shadow-sm transition-all">Verifikasi</button>
                          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all">
                            <span className="material-symbols-outlined text-[18px]">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4: Berkas Revisi */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-4 text-center">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-label-md text-label-md text-primary font-bold">PMB25-0089</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">12 Mei 2025, 11:22</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold text-label-md shrink-0">GM</div>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-semibold">Gracia Maria Tumewu</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">NIK: 7371146205060003</p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">Makassar, 22 Mei 2006 • Kristen</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-body-sm text-body-sm font-medium">SMA Katolik Rajawali</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">0813-5590-4411</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">gracia.tumewu@gmail.com</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-on-surface font-medium">Reguler (D-3 Farmasi)</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-mono">Rp 250.000</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Lunas
                        </span>
                        <button className="block mt-1 text-label-sm font-label-sm text-primary hover:underline">Struk Bayar (BNI)</button>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-error-container text-on-error-container font-semibold">
                          <span className="material-symbols-outlined text-[14px]">warning</span> Revisi Dokumen
                        </span>
                        <p className="font-label-sm text-label-sm text-error mt-1">Scan SKL Buram / Terpotong</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Jadwal Tertunda</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Menunggu Berkas Valid</p>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 rounded-lg text-primary hover:bg-surface-container transition-all" title="Kirim Notifikasi WA Pengingat Revisi">
                            <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                          </button>
                          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination & Bulk Execution Bar */}
              <div className="p-4 bg-surface-container-low/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Menampilkan 1 - 4 dari 482 calon mahasiswa</span>
                  <div className="h-4 w-px bg-surface-container-high hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Baris per halaman:</span>
                    <select className="bg-surface-container-lowest font-label-sm text-label-sm text-on-surface px-2 py-1 rounded focus:outline-none">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container disabled:opacity-40" disabled>
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button className="px-3 py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm">1</button>
                  <button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container">2</button>
                  <button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container">3</button>
                  <span className="px-1 text-on-surface-variant">...</span>
                  <button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container">48</button>
                  <button className="p-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Admisi & Penetapan Akademik Workflow Box */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
              {/* Panel 1: Auto-Generate NIM & Penomoran */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">badge</span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface">Auto-Penetapan NIM</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                      Format: 25-01-XXX
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    Penomoran otomatis untuk 260 calon mahasiswa berstatus <span className="text-primary font-semibold">Lolos Ujian/Diterima</span> yang telah menyelesaikan registrasi ulang.
                  </p>
                  <div className="bg-surface-container-low p-4 rounded-xl space-y-3 mb-4">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">NIM Terakhir Diterbitkan:</span>
                      <span className="font-mono font-semibold text-on-surface">2501064</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Antrian Siap Generate:</span>
                      <span className="font-semibold text-primary">196 Mahasiswa</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Prefix Prodi:</span>
                      <span className="font-semibold text-on-surface">01 (D-3 Farmasi)</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2.5 px-4 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary shadow-sm flex items-center justify-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-[18px]">flash_on</span>
                  <span>Jalankan Auto-Generate NIM Batch</span>
                </button>
              </div>

              {/* Panel 2: Pemetaan Kelas & Dosen PA */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">groups_3</span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface">Pemetaan Rombel &amp; PA</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-on-surface font-semibold">
                      3 Kelas Utama
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    Alokasi kuota mahasiswa ke dalam rombongan belajar dan pembagian Pembimbing Akademik otomatis merata.
                  </p>
                  <div className="space-y-2.5 mb-4">
                    <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">Kelas Reguler A</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">PA: apt. Nurfadilah, M.Farm.</p>
                      </div>
                      <div className="text-right">
                        <span className="font-label-md text-label-md text-primary font-semibold">48 / 50</span>
                        <p className="font-label-sm text-label-sm text-secondary font-medium">Hampir Penuh</p>
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">Kelas Reguler B</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">PA: apt. Syamsuddin, M.Si.</p>
                      </div>
                      <div className="text-right">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">32 / 50</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Tersedia 18 Kursi</p>
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">Kelas RPL Karyawan TTK</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">PA: apt. Wahyuni S., M.Sc.</p>
                      </div>
                      <div className="text-right">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">40 / 45</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Tersedia 5 Kursi</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-primary flex items-center justify-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                  <span>Atur Alokasi Dosen &amp; Ruang Kuliah</span>
                </button>
              </div>

              {/* Panel 3: Integrasi Data PDDIKTI & Feeder SIAKAD */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface">Sinkronisasi SIAKAD</h3>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold">
                      Siap Export
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    Ekspor komprehensif data biodata, riwayat sekolah asal, status KIP-Kuliah/RPL langsung kompatibel dengan format Feeder PDDIKTI Kemendikbud.
                  </p>
                  <div className="bg-surface-container-low p-4 rounded-xl mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Validasi NIK Dukcapil: 99.2% Valid</span>
                    </div>
                    <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Data Ibu Kandung Terisi Lengkap</span>
                    </div>
                    <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">pending</span>
                      <span>2 Berkas menunggu penyesuaian NISN</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 px-3 rounded-xl bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-md text-label-md shadow-sm flex items-center justify-center gap-1.5 transition-all">
                    <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                    <span>Feeder CSV</span>
                  </button>
                  <button className="flex-1 py-2.5 px-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm flex items-center justify-center gap-1.5 transition-all">
                    <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                    <span>Push ke SIAKAD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PanitiaAkademik;
