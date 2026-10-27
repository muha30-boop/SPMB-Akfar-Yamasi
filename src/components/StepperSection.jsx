import React from 'react';

const steps = [
  {
    number: '1',
    label: 'Tahap Awal',
    title: 'Pilih Jalur &amp; Buat Akun',
    desc: 'Tentukan jalur Reguler atau RPL. Masukkan NIK, nomor WhatsApp aktif, dan kata sandi portal.',
    color: 'bg-primary text-on-primary',
  },
  {
    number: '2',
    label: 'Pembayaran',
    title: 'Smart Billing VA',
    desc: 'Dapatkan kode Virtual Account (Bank BSI / Mandiri / BRI). Tagihan diverifikasi otomatis dalam 10 detik.',
    color: 'bg-primary-container text-on-primary',
  },
  {
    number: '3',
    label: 'Pemberkasan',
    title: 'Unggah Dokumen',
    desc: 'Upload Ijazah/SKL, rapor nilai, pasfoto resmi, dan berkas portofolio pengalaman kerja (khusus RPL).',
    color: 'bg-primary text-on-primary',
  },
  {
    number: '4',
    label: 'Ujian Seleksi',
    title: 'CBT &amp; Asesmen',
    desc: 'Unduh Kartu Peserta ber-QR Code. Ikuti ujian CBT materi IPA Terapan atau sesi wawancara portofolio RPL.',
    color: 'bg-primary text-on-primary',
  },
  {
    number: '5',
    label: 'Kelulusan',
    title: 'NIM &amp; Dosen PA',
    desc: 'Pengumuman hasil seleksi, penerbitan NIM resmi PDDIKTI, penetapan kelas, serta temu Dosen PA.',
    color: 'bg-tertiary-container text-on-tertiary-container',
  },
];

const StepperSection = () => {
  return (
    <section className="w-full py-16 bg-surface-container-lowest" id="alur-spmb">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider">
            Sistematis &amp; Transparan
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2 mb-3">5 Langkah Mudah Menjadi Farmasis Yamasi</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Seluruh tahapan seleksi dilakukan secara terpadu melalui platform SPMB digital dengan notifikasi otomatis
            WhatsApp &amp; Email.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors relative ${
                i === 4 ? 'bg-surface-container-high hover:bg-surface-container-highest' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-title-md font-bold mb-3 shadow-sm ${step.color}`}>
                {step.number}
              </div>
              <span className={`font-label-sm mb-1 ${i === 4 ? 'text-tertiary' : 'text-primary'}`}>
                {step.label}
              </span>
              <h4 className="font-title-md text-title-md text-on-surface mb-2" dangerouslySetInnerHTML={{ __html: step.title }} />
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepperSection;
