import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ADMIN_SECRET } from '../lib/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [adminSecret, setAdminSecret] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal harus 6 karakter');
      return;
    }

    let userRole = role;
    if (userRole === 'admin' && adminSecret !== ADMIN_SECRET) {
      setError('Kode Wujudkan Karier Tenaga Teknis Kefarmasian Profesional & Unggul di Indonesia Timur tidak valid');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { role: userRole },
        },
      });

      if (authError) {
        setError(authError.message);
        setIsLoading(false);
        return;
      }

      console.log('Registrasi berhasil:', data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat registrasi');
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    const dashboardLink = role === 'admin' ? '/panitia-akademik' : '/portal-mahasiswa';
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md">
          <div className="bg-surface-container-low rounded-3xl shadow-[0_8px_32px_rgba(0,97,91,0.12)] p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span className="material-symbols-outlined text-[48px] text-secondary">
                  mark_email_read
                </span>
              </div>
              <h1 className="font-display-lg text-title-lg text-on-surface">
                Verifikasi Email Diperlukan
              </h1>
            </div>

            <div className="text-center space-y-4 mb-8">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Akun berhasil didaftarkan! Kami telah mengirimkan link verifikasi ke:
              </p>
              <p className="font-label-md text-label-md text-primary font-semibold">
                {email}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Klik link verifikasi di email Anda untuk mengaktifkan akun, kemudian login untuk mengakses{' '}
                <span className="font-semibold">
                  {role === 'admin' ? 'Panel Admin SPMB' : 'Portal Mahasiswa'}
                </span>
                .
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate('/login')}
                className="w-full py-3 rounded-xl font-label-md text-label-md text-on-primary bg-primary hover:bg-primary/90 transition-all shadow-[0_4px_14px_rgba(0,97,91,0.2)]"
              >
                Kembali ke Login
              </button>
              <Link
                to={dashboardLink}
                className="block text-center font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all"
              >
                Buka {role === 'admin' ? 'Panel Admin' : 'Portal Mahasiswa'} (jika sudah diverifikasi)
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-surface-container-low rounded-3xl shadow-[0_8px_32px_rgba(0,97,91,0.12)] p-8">
          <div className="text-center mb-8">
            <h1 className="font-display-lg text-title-lg text-on-surface">
              Portal Admin SPMB
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block font-label-md text-label-md text-on-surface-variant mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-label-md text-label-md text-on-surface-variant mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-label-md text-label-md text-on-surface-variant mb-2"
              >
                Konfirmasi Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Konfirmasi password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div className="pt-2 border-t border-outline/20">
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === 'student'}
                    onChange={() => setRole('student')}
                    className="text-primary focus:ring-primary"
                  />
                  <span>Pendaftar (Calon Mahasiswa)</span>
                </label>
                <label className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={() => setRole('admin')}
                    className="text-primary focus:ring-primary"
                  />
                  <span>Admin (Panitia Akademik)</span>
                </label>
              </div>

              {role === 'admin' && (
                <div className="transition-all duration-200 ease-out">
                  <label
                    htmlFor="adminSecret"
                    className="block font-label-md text-label-md text-on-surface-variant mb-2"
                  >
                     Admin
                  </label>
                  <input
                    id="adminSecret"
                    type="password"
                    placeholder="Masukkan  admin"
                    value={adminSecret}
                    onChange={(e) => setAdminSecret(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-high text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                  <p className="font-body-xs text-body-xs text-on-surface-variant mt-1">
                    Hubungi koordinator SPMB untuk mendapatkan kode akses admin.
                  </p>
                </div>
              )}
            </div>

            {error && (
              <p className="text-error text-body-sm font-body-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-label-md text-label-md text-on-primary bg-primary hover:bg-primary/90 transition-all shadow-[0_4px_14px_rgba(0,97,91,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Memproses...' : 'Daftar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="font-label-md text-label-md text-primary hover:underline transition-all"
            >
              Sudah punya akun? Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
