import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1WssRz43UrDf-9w7Hp-tr_SBieJRhO-8mCENIjQqDNEy-DdA5mea9m8peDpkIcLrU71N3GW2Jf8k33ZYEjHtkBYdbg0oLPUnto_4Dr4Ov_Iksjc0S3fqV2_IRjfMiwG8cXUUo_Dpww4KcKTDgm-SMT-F3oZd1nSTLnX8MUcg2Cl_yd8qr4ERX1jIvchptGjZVf0056aEIL1VZ9Tc5s6vU3ykBdz8fHk1L0wZbOdsFnQs3fmXdAtLt-sbxg';

const HeaderActions = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (!error) navigate('/login', { replace: true });
  };

  if (user) {
    let portalLink = '/portal-mahasiswa';
    let portalLabel = 'Portal Mahasiswa';
    if (isAdmin) {
      portalLink = '/panitia-akademik';
      portalLabel = 'Panel Admin';
    }

    return (
      <>
        <Link
          to={portalLink}
          className="hidden sm:inline-flex items-center px-space-md py-2.5 rounded-lg font-label-md text-label-md text-primary bg-secondary-container hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all"
        >
          {portalLabel}
        </Link>
        <button
          onClick={handleLogout}
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-all"
          title="Logout"
        >
          <span className="material-symbols-outlined text-on-primary text-[18px]">
            logout
          </span>
        </button>
      </>
    );
  }

  return (
    <>
      <Link
        to="/login"
        className="hidden sm:inline-flex items-center px-space-md py-2.5 rounded-lg font-label-md text-label-md text-primary bg-secondary-container hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all"
      >
        Masuk
      </Link>
      <a
        className="inline-flex items-center px-space-lg py-2.5 rounded-lg font-label-md text-label-md bg-primary-container text-on-primary hover:bg-primary transition-all shadow-[0_4px_14px_rgba(40,122,116,0.2)]"
        href="#daftar"
      >
        Daftar Sekarang
      </a>
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,97,91,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <img alt="Logo Akfar Yamasi Makassar" className="h-8 w-auto object-contain" src={logoUrl} />
          <div className="flex flex-col">
            <span className="font-title-lg text-title-lg text-primary tracking-tight">AKFAR YAMASI</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Sistem Penerimaan Mahasiswa Baru
            </span>
          </div>
        </div>
        <nav
          className="hidden xl:flex items-center gap-space-sm p-1 bg-surface-container-low rounded-xl"
          data-active-classes="bg-primary-container text-on-primary font-label-lg rounded-lg"
        >
          <a
            aria-current="page"
            className="px-space-md py-space-sm transition-all bg-primary-container text-on-primary font-label-lg rounded-lg"
            data-path="portal-spmb"
            href="#"
          >
            Beranda
          </a>
          <a
            className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
            data-path="jalur-pendaftaran"
            href="#jalur"
          >
            Jalur Pendaftaran
          </a>
          <a
            className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
            data-path="syarat-dan-alur"
            href="#syarat"
          >
            Syarat &amp; Alur
          </a>
          <a
            className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
            data-path="simulasi-biaya"
            href="#biaya"
          >
            Simulasi Biaya
          </a>
          <a
            className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
            data-path="cek-kelulusan"
            href="#kelulusan"
          >
            Cek Kelulusan
          </a>
        </nav>
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
