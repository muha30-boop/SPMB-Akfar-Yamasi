import React from 'react';

const faqs = [
  {
    q: 'Apakah lulusan SMK Non-Kesehatan bisa mendaftar di Akfar Yamasi?',
    a: 'Bisa. Lulusan SMA/SMK semua jurusan (termasuk IPS dan SMK Teknik) dapat mendaftar melalui Jalur Reguler. Kampus menyediakan Program Matrikulasi Dasar Sains Farmasi (Kimia Dasar & Biologi Sel) sebelum perkuliahan semester 1 dimulai.',
  },
  {
    q: 'Bagaimana mekanisme pengakuan jam kerja pada Jalur RPL?',
    a: 'Calon mahasiswa Jalur RPL (Rekognisi Pembelajaran Lampau) menyertakan SK kerja, surat rekomendasi apoteker pengelola apotek (APA), dan portofolio peracikan. Tim asesor RPL Akfar Yamasi akan mengonversi pengalaman tersebut setara hingga 40-50 SKS, memangkas durasi kuliah menjadi sekitar 1.5 - 2 tahun saja.',
  },
  {
    q: 'Apakah pembayaran biaya kuliah dapat diangsur?',
    a: 'Ya, Akfar Yamasi Makassar memiliki skema Smart Billing dengan cicilan biaya Sumbangan Pembinaan Pendidikan (SPP) hingga 3 tahap per semester untuk meringankan beban orang tua/wali mahasiswa.',
  },
  {
    q: 'Apakah ada tes kesehatan dan bebas buta warna?',
    a: 'Calon mahasiswa wajib tidak buta warna (parsial maupun total). Surat keterangan bebas buta warna dapat diunggah dari Puskesmas, Rumah Sakit, atau diperiksa langsung di Klinik Kampus Yamasi saat tes fisik.',
  },
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-surface-container-low rounded-xl p-5">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="font-title-md text-title-md text-on-surface">{item.q}</span>
        <span
          className="material-symbols-outlined text-primary text-[22px] transition-transform"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </button>
      <div
        className={
          'text-body-sm text-on-surface-variant transition-all duration-300 overflow-hidden ' +
          (isOpen ? 'max-h-96 pt-3' : 'max-h-0')
        }
      >
        {item.a}
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="w-full py-16 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider">
            Tanya Jawab Admisi
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2 mb-2">
            Pertanyaan Umum Calon Mahasiswa
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Semua informasi penting seputar persyaratan, jadwal kuliah, dan legalitas ijazah D-3 Farmasi.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
