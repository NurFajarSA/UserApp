import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Role } from '@/app/models/role';
import Alert from '../../common/alert';
import { Routes } from '@/app/routes/routes';

const AdminRegisterForm: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(Role.USER);
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
            router.replace(Routes.USERS);
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
                        <span className="label-text">Role</span>
                    </label>
                    <select
                        className="select select-bordered"
                        value={role}
                        onChange={(e) => setRole(e.target.value as Role)}
                        required
                    >
                        <option value={Role.USER}>User</option>
                        <option value={Role.ADMIN}>Admin</option>
                    </select>
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
            </form>
        </>
    );
};

export default AdminRegisterForm;
