import React from 'react';
import { SmartBillingCard, ExamCard, ResultCard } from './Cards';

const FormSection = () => {
  const [activeTab, setActiveTab] = React.useState('reguler');
  const [billingAmount, setBillingAmount] = React.useState('250.000');

  const switchFormTab = (type) => {
    setActiveTab(type);
    if (type === 'reguler') {
      setBillingAmount('250.000');
    } else {
      setBillingAmount('450.000');
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    alert('Formulir pendaftaran berhasil dikirim! Silakan periksa SMS dan WhatsApp Anda untuk kode Virtual Account Bank BSI / Mandiri.');
  };

  const TabButtonReguler = ({ children, ...props }) => (
    <button
      id="tabBtnReguler"
      onClick={() => switchFormTab('reguler')}
      className={`px-4 py-1.5 rounded-md font-label-md text-label-md transition-all ${
        activeTab === 'reguler'
          ? 'bg-primary-container text-on-primary shadow-sm'
          : 'text-on-surface-variant hover:text-on-surface'
      }`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );

  const TabButtonRpl = ({ children, ...props }) => (
    <button
      id="tabBtnRpl"
      onClick={() => switchFormTab('rpl')}
      className={`px-4 py-1.5 rounded-md font-label-md text-label-md transition-all ${
        activeTab === 'rpl'
          ? 'bg-primary-container text-on-primary shadow-sm'
          : 'text-on-surface-variant hover:text-on-surface'
      }`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );

  const jalurBanner = {
    reguler: {
      title: 'Jalur Reguler (Lulusan SMA/SMK Sederajat)',
      desc: 'Biaya pendaftaran Rp 250.000. Wajib mengunggah Scan Rapor, Ijazah/SKL, dan Surat Keterangan Bebas Buta Warna.',
    },
    rpl: {
      title: 'Jalur RPL (Rekognisi Pembelajaran Lampau)',
      desc: 'Biaya pendaftaran Rp 450.000 (termasuk verifikasi asesor). Wajib melampirkan portofolio pengalaman kerja dan transkrip.',
    },
  };

  const section2Title = {
    reguler: 'Riwayat Sekolah &amp; Nilai Rapor',
    rpl: 'Riwayat Tempat Kerja &amp; Portofolio Farmasi',
  };

  return (
    <section className="w-full py-16 bg-surface" id="formulir-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-md">
            <div className="flex items-center justify-between pb-5">
              <div>
                <span className="font-label-sm uppercase tracking-wide text-primary">
                  Formulir Pendaftaran Terintegrasi
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Data Calon Mahasiswa Baru</h3>
              </div>
              <div className="inline-flex p-1 bg-surface-container rounded-lg">
                <TabButtonReguler>Reguler</TabButtonReguler>
                <TabButtonRpl>Jalur RPL</TabButtonRpl>
              </div>
            </div>
            <form className="space-y-6" id="spmbMainForm" onSubmit={handleFormSubmission}>
              <div className="p-3.5 rounded-lg bg-surface-container-low text-body-sm flex items-start gap-3" id="jalurInfoBanner">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span>
                <div>
                  <p className="font-label-md text-on-surface" id="jalurBannerTitle">
                    {activeTab === 'reguler' ? jalurBanner.reguler.title : jalurBanner.rpl.title}
                  </p>
                  <p className="text-on-surface-variant text-label-sm" id="jalurBannerDesc">
                    {activeTab === 'reguler' ? jalurBanner.reguler.desc : jalurBanner.rpl.desc}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container text-[12px] flex items-center justify-center font-bold">
                    1
                  </span>
                  Identitas Diri &amp; Kependudukan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nomor Induk Kependudukan (NIK)*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md focus:bg-surface-container-lowest"
                      maxLength="16"
                      placeholder="16 Digit Sesuai KTP/KK"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nomor Kartu Keluarga (KK)*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md focus:bg-surface-container-lowest"
                      maxLength="16"
                      placeholder="16 Digit No. KK"
                      required
                      type="text"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nama Lengkap (Sesuai Ijazah)*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md focus:bg-surface-container-lowest"
                      placeholder="Contoh: Rahmat Hidayat Saputra"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nama Lengkap Ibu Kandung*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md focus:bg-surface-container-lowest"
                      placeholder="Untuk validasi PDDIKTI"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nomor WhatsApp Aktif*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md focus:bg-surface-container-lowest"
                      placeholder="08xxxxxxxxxx"
                      required
                      type="tel"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container text-[12px] flex items-center justify-center font-bold">
                    2
                  </span>
                  <span
                    id="section2Title"
                    dangerouslySetInnerHTML={{ __html: section2Title[activeTab] }}
                  />
                </h4>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${activeTab === 'reguler' ? 'grid' : 'hidden'}`}
                  id="fieldsReguler"
                >
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Asal Jenjang Sekolah*
                    </label>
                    <select className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface font-body-md">
                      <option value="SMA">SMA - Jurusan IPA</option>
                      <option value="SMK_FAR">SMK Farmasi / Kesehatan</option>
                      <option value="MA">Madrasah Aliyah (MA) IPA</option>
                      <option value="SMA_IPS">SMA / SMK Jurusan Lain</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nilai Rata-rata Rapor (Skala 1-100)*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      max="100"
                      min="0"
                      placeholder="Misal: 84.50"
                      step="0.1"
                      type="number"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nama Sekolah Asal &amp; Kota*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      placeholder="Misal: SMAN 1 Makassar / SMF Yamasi"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${activeTab === 'rpl' ? 'grid' : 'hidden'}`}
                  id="fieldsRpl"
                >
                  <div className="sm:col-span-2">
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Institusi Tempat Kerja Saat Ini*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      placeholder="Misal: Apotek Sehat Farma / RS Wahidin Sudirohusodo"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Lama Pengalaman Kerja (Tahun)*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      max="25"
                      min="1"
                      placeholder="Misal: 3 Tahun"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Jabatan / Peran Klinis*
                    </label>
                    <select className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md">
                      <option>Asisten Tenaga Kefarmasian</option>
                      <option>Pengelola Gudang Farmasi / PBF</option>
                      <option>Staf Logistik Obat Puskesmas</option>
                      <option>Tenaga Peracik Resep Apotek</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Asal Kampus / Diploma Sebelumnya (Jika Ada)
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      placeholder="Untuk konversi SKS mata kuliah umum"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container text-[12px] flex items-center justify-center font-bold">
                    3
                  </span>
                  Unggah Berkas Pendukung (Format PDF/JPG maks. 2MB)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined text-secondary text-[28px] mb-1">
                      upload_file
                    </span>
                    <span className="font-label-md text-on-surface">Scan Ijazah Asli / SKL</span>
                    <span className="font-body-sm text-on-surface-variant text-[11px]">PDF atau JPEG resmi sekolah</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined text-secondary text-[28px] mb-1">
                      add_a_photo
                    </span>
                    <span className="font-label-md text-on-surface">Pasfoto 3x4 (Latar Merah)</span>
                    <span className="font-body-sm text-on-surface-variant text-[11px]">Pakaian kemeja formal rapi</span>
                  </div>
                  <div
                    className={`p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all ${
                      activeTab === 'rpl' ? 'sm:col-span-2 block' : 'hidden'
                    }`}
                    id="dropzonePorto"
                  >
                    <span className="material-symbols-outlined text-tertiary text-[28px] mb-1">
                      work_history
                    </span>
                    <span className="font-label-md text-on-surface">Dokumen Portofolio Kerja &amp; SK Bekerja</span>
                    <span className="font-body-sm text-on-surface-variant text-[11px]">
                      Surat keterangan kerja dari pimpinan apotek/RS + logbook kegiatan kefarmasian
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <input className="w-4 h-4 rounded text-primary" id="paktaCheck" required type="checkbox" />
                  <label className="text-label-sm text-on-surface-variant" htmlFor="paktaCheck">
                    Saya menyatakan seluruh data yang diisi adalah absah dan sesuai dokumen negara.
                  </label>
                </div>
                <button
                  className="w-full sm:w-auto px-7 py-3 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-primary transition-all shadow-md shrink-0"
                  type="submit"
                >
                  Kirim Formulir &amp; Buka Smart Billing
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SmartBillingCard billingAmount={billingAmount} />
            <ExamCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
