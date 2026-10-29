import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { fetchRegistrationsByEmail } from '../lib/supabasePanel';

const routeLabel = {
  reguler: 'Reguler (D-3 Farmasi)',
  rpl: 'RPL TTK (Alih Jenjang)',
};

const statusConfig = {
  payment: {
    pending: { label: 'Menunggu Bayar', color: 'bg-surface-container-high text-on-surface', icon: 'hourglass_top' },
    paid: { label: 'Lunas', color: 'bg-secondary-fixed text-on-secondary-fixed', icon: 'payments' },
    failed: { label: 'Gagal', color: 'bg-error text-on-error', icon: 'error' },
  },
  document: {
    pending: { label: 'Menunggu Verifikasi', color: 'bg-surface-container-high text-on-surface', icon: 'hourglass_top' },
    verified: { label: 'Terverifikasi', color: 'bg-tertiary-fixed text-on-tertiary-fixed', icon: 'done_all' },
    revision: { label: 'Revisi', color: 'bg-error-container text-on-error-container', icon: 'warning' },
    rejected: { label: 'Ditolak', color: 'bg-error-container text-on-error-container', icon: 'warning' },
  },
  admission: {
    pending_admission: { label: 'Belum Diloloskan', color: 'bg-surface-container-high text-on-surface', icon: 'schedule' },
    accepted: { label: 'Lolos Seleksi', color: 'bg-secondary-fixed text-on-secondary-fixed', icon: 'check_circle' },
    rejected: { label: 'Tidak Diterima', color: 'bg-error text-on-error', icon: 'cancel' },
    registered: { label: 'Terdaftar', color: 'bg-primary text-on-primary', icon: 'badge' },
  },
};

const StudentDashboard = () => {
  const { user, signOut } = useAuth();
  const [registration, setRegistration] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadRegistration = async () => {
      if (!user) return;

      setIsLoading(true);
      setError('');

      try {
        const { data, error: dataError } = await fetchRegistrationsByEmail(user.email);

        if (dataError) throw dataError;

        if (data && data.length > 0) {
          setRegistration(data[0]);
        } else {
          setRegistration(null);
        }
      } catch (err) {
        setError(err.message || 'Gagal memuat data pendaftaran');
      } finally {
        setIsLoading(false);
      }
    };

    loadRegistration();
  }, [user]);

  const handleLogout = async () => {
    const { error: logoutError } = await signOut();
    if (logoutError) {
      alert('Gagal logout: ' + logoutError.message);
    } else {
      navigate('/login', { replace: true });
    }
  };

  const getPaymentBadge = (status) => {
    const cfg = statusConfig.payment[status] || statusConfig.payment.pending;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm ${cfg.color}`}>
        <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
        {cfg.label}
      </span>
    );
  };

  const getDocumentBadge = (status) => {
    const cfg = statusConfig.document[status] || statusConfig.document.pending;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm ${cfg.color}`}>
        <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
        {cfg.label}
      </span>
    );
  };

  const getAdmissionBadge = (status) => {
    const cfg = statusConfig.admission[status] || statusConfig.admission.pending_admission;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-label-sm ${cfg.color}`}>
        <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
        {cfg.label}
      </span>
    );
  };

  const billingFormatted = (amount) => {
    if (!amount) return '-';
    return `Rp ${Number(amount).toLocaleString('id-ID')}`;
  };

  const dateFormatted = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Portal Mahasiswa SPMB
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Selamat datang, {user?.email || 'Mahasiswa'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high font-label-md text-label-md text-on-surface transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span>Logout</span>
          </button>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-12 text-on-surface-variant">
            <span className="material-symbols-outlined animate-spin text-[24px] mr-3">sync</span>
            <span>Memuat data pendaftaran...</span>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-error-container/10 text-error flex items-center gap-2">
            <span className="material-symbols-outlined">error</span>
            <span>{error}</span>
          </div>
        )}

        {!isLoading && !registration && (
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-8 text-center">
            <div className="flex justify-center mb-6">
              <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
                inbox_empty
              </span>
            </div>
            <h2 className="font-title-lg text-title-lg text-on-surface mb-3">
              Belum Ada Pendaftaran
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-lg mx-auto">
              Anda belum memiliki pendaftaran SPMB. Klik tombol di bawah untuk mengisi
              formulir pendaftaran calon mahasiswa baru.
            </p>
            <Link
              to="/#formulir-section"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 font-label-md text-label-md text-on-primary transition-all shadow-[0_4px_14px_rgba(0,97,91,0.2)]"
            >
              <span>Daftar Sekarang</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        )}

        {!isLoading && registration && (
          <div className="space-y-6">
            {/* Header Card dengan Status Ringkas */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-label-lg font-bold">
                    {registration.full_name
                      ? registration.full_name
                          .split(' ')
                          .map((w) => w[0])
                          .join('')
                          .toUpperCase()
                          .slice(0, 2)
                      : 'MM'}
                  </div>
                  <div>
                    <h2 className="font-title-lg text-title-lg text-on-surface">
                      {registration.full_name || '-'}
                    </h2>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                      No. Registrasi: {registration.registration_number || '-'}
                    </p>
                  </div>
                </div>
                {registration.nim ? (
                  <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md font-semibold">
                    NIM: {registration.nim}
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md">
                    Calon Mahasiswa
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-surface-container-low rounded-xl p-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Status Pembayaran
                  </span>
                  <div className="mt-2">{getPaymentBadge(registration.payment_status)}</div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Status Dokumen
                  </span>
                  <div className="mt-2">{getDocumentBadge(registration.document_status)}</div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Status Admisi
                  </span>
                  <div className="mt-2">{getAdmissionBadge(registration.admission_status)}</div>
                </div>
              </div>
            </div>

            {/* Detail Card */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6">
              <h3 className="font-title-md text-title-md text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                Detail Pendaftaran
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Jalur</span>
                    <p className="font-body-md text-body-md text-on-surface mt-0.5">
                      {routeLabel[registration.route] || registration.route || '-'}
                    </p>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">NIK</span>
                    <p className="font-body-md text-body-md text-on-surface mt-0.5">{registration.nik || '-'}</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">No. HP / WhatsApp</span>
                    <p className="font-body-md text-body-md text-on-surface mt-0.5">{registration.whatsapp || '-'}</p>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Tanggal Pendaftaran</span>
                    <p className="font-body-md text-body-md text-on-surface mt-0.5">{dateFormatted(registration.created_at)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Tagihan</span>
                    <p className="font-body-md text-body-md text-primary font-semibold mt-0.5">
                      {billingFormatted(registration.billing_amount)}
                    </p>
                  </div>
                  {registration.route === 'reguler' && registration.school_name && (
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Asal Sekolah</span>
                      <p className="font-body-md text-body-md text-on-surface mt-0.5">{registration.school_name}</p>
                    </div>
                  )}
                  {registration.route === 'rpl' && registration.workplace_institution && (
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Tempat Kerja</span>
                      <p className="font-body-md text-body-md text-on-surface mt-0.5">
                        {registration.workplace_institution}
                      </p>
                    </div>
                  )}
                  {registration.exam_schedule && (
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Jadwal Ujian</span>
                      <p className="font-body-md text-body-md text-on-surface mt-0.5">
                        {registration.exam_schedule}
                        {registration.exam_room && ` • ${registration.exam_room}`}
                      </p>
                    </div>
                  )}
                  {registration.class_assignment && (
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Kelas / Dosen PA</span>
                      <p className="font-body-md text-body-md text-on-surface mt-0.5">
                        {registration.class_assignment}
                        {registration.academic_advisor && ` • ${registration.academic_advisor}`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
