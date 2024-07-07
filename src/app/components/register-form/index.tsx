import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Alert from '../common/alert';
import Link from 'next/link';

const RegisterForm: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info'>('error'); // [1
    const [alertMessage, setAlertMessage] = useState('');

    const showAlertMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'error') => {
        setShowAlert(true);
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        showAlertMessage('Registrasi berhasil', 'success');
        setTimeout(() => {
            router.push('/login');
        }, 1500);
    };

    const validateForm = () => {
        if (username.length < 4) {
            showAlertMessage('Username harus minimal 4 karakter');
            return false;
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showAlertMessage('Email tidak valid');
            return false;
        }
        if (password.length < 8) {
            showAlertMessage('Password harus minimal 8 karakter');
            return false;
        }
        if (password !== confirmPassword) {
            showAlertMessage('Password dan konfirmasi password tidak sama');
            return false;
        }
        return true;
    };

    return (
        <>
            {showAlert && <Alert type={alertType} message={alertMessage} />}
            <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input-bordered"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
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
                        placeholder="Password"
                        className="input input-bordered"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Konfirmasi Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input input-bordered"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">Daftar</button>
                </div>
                <div className="divider">Sudah punya akun?</div>
                <div className="form-control">
                    <Link href="/login" className="btn btn-outline btn-primary">Masuk</Link>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
