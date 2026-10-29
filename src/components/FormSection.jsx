import React from 'react';
import supabase from '../lib/supabaseClient';
import { useAuth } from '../lib/AuthContext';
import { SmartBillingCard, ExamCard, ResultCard } from './Cards';

const FormSection = () => {
  const [activeTab, setActiveTab] = React.useState('reguler');
  const [billingAmount, setBillingAmount] = React.useState('250.000');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { user } = useAuth();

  const [formData, setFormData] = React.useState({
    nik: '',
    family_card_number: '',
    full_name: '',
    mother_name: '',
    whatsapp: '',
    school_origin: 'SMA',
    gpa: '',
    school_name: '',
    school_city: '',
    workplace_institution: '',
    work_experience_years: '',
    job_title: 'Asisten Tenaga Kefarmasian',
    previous_institution: '',
  });

  const [files, setFiles] = React.useState({
    ijazah: null,
    photo: null,
    portfolio: null,
  });

  const switchFormTab = (type) => {
    setActiveTab(type);
    if (type === 'reguler') {
      setBillingAmount('250.000');
    } else {
      setBillingAmount('450.000');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileObjs } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: fileObjs ? fileObjs[0] : null,
    }));
  };

  const uploadFile = async (file, pathPrefix) => {
    if (!file) return null;
    const fileName = `${pathPrefix}_${Date.now()}_${file.name}`;
    const { error } = await supabase.storage
      .from('spmb-documents')
      .upload(fileName, file);
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage
      .from('spmb-documents')
      .getPublicUrl(fileName);
    return publicUrl;
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const paktaChecked = document.getElementById('paktaCheck').checked;
    if (!paktaChecked) {
      alert('Harap centang pernyataan bahwa data yang diisi absah dan sesuai dokumen negara.');
      return;
    }

    setIsSubmitting(true);

    try {
      const billingNumeric = activeTab === 'reguler' ? 250000 : 450000;

      const { data: regNumData, error: regNumError } = await supabase.rpc(
        'generate_registration_number',
        { p_route: activeTab === 'reguler' ? 'reguler' : 'rpl' }
      );

      if (regNumError) throw regNumError;

      let ijazahPath = null;
      let photoPath = null;
      let portfolioPath = null;

      try {
        ijazahPath = await uploadFile(files.ijazah, 'ijazah');
      } catch (err) {
        console.error('Failed to upload ijazah:', err);
      }
      try {
        photoPath = await uploadFile(files.photo, 'photo');
      } catch (err) {
        console.error('Failed to upload photo:', err);
      }
      if (activeTab === 'rpl') {
        try {
          portfolioPath = await uploadFile(files.portfolio, 'portfolio');
        } catch (err) {
          console.error('Failed to upload portfolio:', err);
        }
      }

      const insertData = {
        registration_number: regNumData,
        route: activeTab === 'reguler' ? 'reguler' : 'rpl',
        email: user?.email || null,
        nik: formData.nik || null,
        family_card_number: formData.family_card_number || null,
        full_name: formData.full_name || null,
        mother_name: formData.mother_name || null,
        whatsapp: formData.whatsapp || null,
        billing_amount: billingNumeric,
        payment_status: 'pending',
        document_status: 'pending',
        ...(activeTab === 'reguler' && {
          school_origin: formData.school_origin || null,
          gpa: formData.gpa ? parseFloat(formData.gpa) : null,
          school_name: formData.school_name || null,
          school_city: formData.school_city || null,
        }),
        ...(activeTab === 'rpl' && {
          workplace_institution: formData.workplace_institution || null,
          work_experience_years: formData.work_experience_years ? parseInt(formData.work_experience_years, 10) : null,
          job_title: formData.job_title || null,
          previous_institution: formData.previous_institution || null,
        }),
        document_ijazah_path: ijazahPath,
        document_photo_path: photoPath,
        ...(activeTab === 'rpl' && {
          document_portfolio_path: portfolioPath,
        }),
      };

      const { error: insertError } = await supabase
        .from('registrations')
        .insert(insertData);

      if (insertError) throw insertError;

      alert(
        `Pendaftaran berhasil! No. Registrasi: ${regNumData}\n\nSilakan periksa SMS dan WhatsApp Anda untuk kode Virtual Account Bank BSI / Mandiri.`
      );
      setFormData({
        nik: '',
        family_card_number: '',
        full_name: '',
        mother_name: '',
        whatsapp: '',
        school_origin: 'SMA',
        gpa: '',
        school_name: '',
        school_city: '',
        workplace_institution: '',
        work_experience_years: '',
        job_title: 'Asisten Tenaga Kefarmasian',
        previous_institution: '',
      });
      setFiles({ ijazah: null, photo: null, portfolio: null });
    } catch (err) {
      console.error('Submission error:', err);
      alert('Gagal mengirim formulir: ' + (err.message || 'Terjadi kesalahan'));
    } finally {
      setIsSubmitting(false);
    }
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
    reguler: 'Riwayat Sekolah & Nilai Rapor',
    rpl: 'Riwayat Tempat Kerja & Portofolio Farmasi',
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
                  Identitas Diri & Kependudukan
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
                      name="nik"
                      value={formData.nik}
                      onChange={handleInputChange}
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
                      name="family_card_number"
                      value={formData.family_card_number}
                      onChange={handleInputChange}
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
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
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
                      name="mother_name"
                      value={formData.mother_name}
                      onChange={handleInputChange}
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
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
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
                    <select
                      className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface font-body-md"
                      name="school_origin"
                      value={formData.school_origin}
                      onChange={handleInputChange}
                    >
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
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Nama Sekolah Asal & Kota*
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      placeholder="Misal: SMAN 1 Makassar / SMF Yamasi"
                      type="text"
                      name="school_name"
                      value={formData.school_name}
                      onChange={handleInputChange}
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
                      name="workplace_institution"
                      value={formData.workplace_institution}
                      onChange={handleInputChange}
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
                      name="work_experience_years"
                      value={formData.work_experience_years}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1">
                      Jabatan / Peran Klinis*
                    </label>
                    <select
                      className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleInputChange}
                    >
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
                      name="previous_institution"
                      value={formData.previous_institution}
                      onChange={handleInputChange}
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
                  <label className="p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                    <input
                      type="file"
                      name="ijazah"
                      accept=".pdf,.jpg,.jpeg"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <span className="material-symbols-outlined text-secondary text-[28px] mb-1">
                      upload_file
                    </span>
                    <span className="font-label-md text-on-surface">Scan Ijazah Asli / SKL</span>
                    <span className="font-body-sm text-on-surface-variant text-[11px]">PDF atau JPEG resmi sekolah</span>
                  </label>
                  <label className="p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                    <input
                      type="file"
                      name="photo"
                      accept=".jpg,.jpeg"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <span className="material-symbols-outlined text-secondary text-[28px] mb-1">
                      add_a_photo
                    </span>
                    <span className="font-label-md text-on-surface">Pasfoto 3x4 (Latar Merah)</span>
                    <span className="font-body-sm text-on-surface-variant text-[11px]">Pakaian kemeja formal rapi</span>
                  </label>
                  <label
                    className={`p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all ${
                      activeTab === 'rpl' ? 'sm:col-span-2 block' : 'hidden'
                    }`}
                    id="dropzonePorto"
                  >
                    <input
                      type="file"
                      name="portfolio"
                      accept=".pdf,.jpg,.jpeg"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <span className="material-symbols-outlined text-tertiary text-[28px] mb-1">
                      work_history
                    </span>
                    <span className="font-label-md text-on-surface">Dokumen Portofolio Kerja & SK Bekerja</span>
                    <span className="font-body-sm text-on-surface-variant text-[11px]">
                      Surat keterangan kerja dari pimpinan apotek/RS + logbook kegiatan kefarmasian
                    </span>
                  </label>
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
                  className="w-full sm:w-auto px-7 py-3 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-primary transition-all shadow-md shrink-0 disabled:opacity-60"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
                      <span>Menyimpan...</span>
                    </span>
                  ) : (
                    'Kirim Formulir & Buka Smart Billing'
                  )}
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
