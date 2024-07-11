import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Alert from '../../common/alert';
import Link from 'next/link';
import { Routes } from '@/app/routes/routes';
import { login } from '@/app/services/authService';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info'>('error'); // [1
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const showAlertMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'error') => {
    setShowAlert(true);
    setAlertType(type);
    setAlertMessage(message);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await login({
        email,
        password
      });

      if (response) {
        showAlertMessage('Login berhasil', 'success');
        setTimeout(() => {
          router.replace(Routes.DASHBOARD);
        }, 1500);
      }

    } catch (error: any) {
      showAlertMessage(error, 'error');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showAlertMessage('Email tidak valid');
      return false;
    }
    if (password.length < 8) {
      showAlertMessage('Password harus minimal 8 karakter');
      return false;
    }
    return true;
  }

  return (
    <>
      {showAlert && <Alert type={alertType} message={alertMessage} />}
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          {!loading && <button className="btn btn-primary" type="submit">Masuk</button>}
          {loading && <button className="btn btn-primary" type="submit" disabled><span className="loading loading-spinner loading-sm"></span></button>}
        </div>
        <div className="divider">Belum punya akun?</div>
        <div className="form-control">
          <Link href="/register" className="btn btn-outline btn-primary">Daftar</Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
