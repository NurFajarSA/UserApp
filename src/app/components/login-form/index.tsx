import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Alert from '../alert';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlertMessage = (message: string) => {
    setShowAlert(true);
    setAlertMessage(message);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('/dashboard');
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
      {showAlert && <Alert type="error" message={alertMessage} />}
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
          <button className="btn btn-primary" type="submit">Masuk</button>
        </div>
        <div className="divider">Belum punya akun?</div>
        <div className="form-control">
          <a href="/register" className="btn btn-outline btn-primary">Daftar</a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;