import React from 'react';

const facilities = [
  {
    title: 'Lab Farmakologi Klinis',
    desc: 'Uji bioaktivitas obat, pengamatan respon in-vivo & in-vitro, serta simulasi farmakokinetik modern.',
    badge: 'Lab Spesialis',
    badgeClass: 'text-primary',
    icon: 'biotech',
    iconColor: 'text-secondary',
    capacity: 'Kapasitas 35 Kursi',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBil798li9bgEkZo8ScFtO1tDwyMQyzct8DKkuzft9xGlX0Z23O6BnZ_VvTAvVb0SzKQiFkXnl0yweZO6l58ypdKnehX3JaFwuuPMIEkwH5iyiR6ZaR3RgzzT3xJzWcwQVVFIxJ3FfOMmubl-QpADQ67L5YoONMqebik1-znsdq4DdWE0nbrtvBExNmYVhkL649g0I-T1fmMHpcem_4G94JCGjygX4hbVdTZvyfESSIcWSmk9MCbktG',
    alt: 'Modern pharmacology laboratory setting inside a prestigious health academy in Indonesia, clean stainless steel workbenches, microscopes, pipette instruments, and teal medical aesthetic under bright pristine lighting.',
  },
  {
    title: 'Lab Kimia Farmasi & Kualitatif',
    desc: 'Analisis kadar bahan aktif obat, titrasi instrumental, spektrofotometri UV-Vis, dan uji stabilitas sediaan.',
    badge: 'Lab Analisis',
    badgeClass: 'text-primary',
    icon: 'science',
    iconColor: 'text-secondary',
    capacity: 'Peralatan Instrument Terpadu',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBykA_pvyDnUqVnhNJ9tTmdreF9pb6S6Tk1m3J0CIXWeXwk8tZi_tYnv5UEP-2rIvbm8sm3BEuJoLabTMJdZTgJ6LCe0OZk-BnqrjlWJ5HDyZi6c5JgCYiWPJh-BbKMgF3W0LWGFCfn8ckkIY4xmzYwbfkFPfEPtC1qF658sgr4C5FOmW7bMqIBPjWR3NX-5k0fAw6Fp1zS1B534jlko3mt452r-GyHbL94JeBCCPxZbqMe9upYrZtt',
    alt: 'Pharmaceutical chemistry laboratory with glassware, burettes, spectrophotometer devices, and students wearing sterile white lab coats in Indonesia, clean high-tech scientific environment.',
  },
  {
    title: 'Apotek Pendidikan Simulasi',
    desc: 'Praktik penyiapan resep, peracikan obat puyer/kapsul/sirup, dan konseling informasi obat (KIO) kepada pasien.',
    badge: 'Simulasi Pelayanan',
    badgeClass: 'text-primary',
    icon: 'local_pharmacy',
    iconColor: 'text-secondary',
    capacity: 'Dilengkapi Software Apotek',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7T6HK0WfwP3wVpyFijbijb2mUl5ewENcXwSIzFFTNaoC6tKMXdv17hgpnfKngiWSMj0DwTzq_SJTjiyPk8yBHogyekcqPE_j7VYY6Uuq1ni0Rr2feEdYfHrB9eas0bMpsDyNHxMEVuUHeI0jQ6eROfeKiqeHkuZEnNlOVFnJzQLqhjGykK28a_6ucbGQkCohfVb4vLEKjvPrEl6td_akw2XgPMV2vuDxuJ7bqsCdG4qgGoItDRfn',
    alt: 'A model community training pharmacy counter inside a pharmaceutical college in Makassar, displaying medication shelves, POS computer dispensary systems, and clinical counseling booth.',
  },
  {
    title: 'Kemitraan RSUD & Industri',
    desc: 'Kerja sama PKL di RSUP Dr. Wahidin, RSUD Daya, Apotek Kimia Farma, K-24, dan PBF terkemuka di Sulsel.',
    badge: 'PKL &amp; Magang Kerja',
    badgeClass: 'text-tertiary',
    icon: 'handshake',
    iconColor: 'text-secondary',
    capacity: '100% Penempatan Magang',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpwrpU15U6mQ39d-a46LhFSIEMo9lyTY6Nx466oKk3eZMm0JYD0UYAdOBCQtjFn8Vf1ZRqp4huxPA8SU0OA9rEc97HZGFLPvsXWvL1W5FOPALdQymyfu7dUNDgZk7bOezPAX25cKUiYmpScLL10tz08Nfcs2rWPtOD6GICldFYY49FJTnTOPVtHT5HQFD-LYGnI8V16sQw3vwtjg_cyZqvalXxsRU5oMI9BwQRSP08ZMn2XhGqc3ep',
    alt: 'Indonesian hospital pharmacy department with pharmacist in teal scrub uniforms consulting medical staff in a clean modern Makassar hospital corridor, professional healthcare teamwork.',
  },
];

const FacilitiesSection = () => {
  return (
    <section className="w-full py-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider">
              Lingkungan Akademis Terstandar
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
              Fasilitas Laboratorium &amp; Jejaring Praktik
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md">
            Didukung 14 laboratorium spesifik berstandar Good Laboratory Practice (GLP) dan kemitraan rumah sakit
            rujukan utama di Kota Makassar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-44 w-full relative overflow-hidden">
                <img className="w-full h-full object-cover" src={facility.img} alt={facility.alt} />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface/90 font-label-sm text-primary">
                  {facility.badge}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface mb-2">{facility.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{facility.desc}</p>
                </div>
                <div className={`mt-4 pt-3 flex items-center justify-between font-label-sm ${facility.iconColor}`}>
                  <span>{facility.capacity}</span>
                  <span className={`material-symbols-outlined text-[18px]`}>{facility.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
