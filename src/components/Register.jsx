import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    setIsLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
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
                Klik link verifikasi di email Anda untuk mengaktifkan akun, kemudian login.
              </p>
            </div>

            <button
              onClick={() => navigate('/login')}
              className="w-full py-3 rounded-xl font-label-md text-label-md text-on-primary bg-primary hover:bg-primary/90 transition-all shadow-[0_4px_14px_rgba(0,97,91,0.2)]"
            >
              Kembali ke Login
            </button>
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
