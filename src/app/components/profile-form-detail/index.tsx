import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '../common/alert'; // Sesuaikan dengan path Alert component Anda
import Link from 'next/link';

const ProfileDetailForm: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('user123'); // Ganti dengan nilai username dari state atau props
    const [password, setPassword] = useState(''); // State untuk password baru
    const [confirmPassword, setConfirmPassword] = useState(''); // State untuk konfirmasi password baru
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info'>('error');
    const [alertMessage, setAlertMessage] = useState('');

    const showAlertMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'error') => {
        setShowAlert(true);
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleUsernameChange = () => {
        // Logika untuk mengirim perubahan username ke backend
        showAlertMessage('Username berhasil diubah', 'success');
    };

    const handlePasswordChange = () => {
        // Validasi password baru
        if (password.length < 8) {
            showAlertMessage('Password harus minimal 8 karakter');
            return;
        }
        if (password !== confirmPassword) {
            showAlertMessage('Password dan konfirmasi password tidak sama');
            return;
        }
        // Implementasi logika untuk mengirim perubahan password ke backend
        showAlertMessage('Password berhasil diubah', 'success');
    };

    const handleDeleteProfile = () => {
        // Konfirmasi penghapusan profil
        const confirmation = window.confirm('Apakah Anda yakin ingin menghapus profil Anda?');
        if (confirmation) {
            // Implementasi logika untuk menghapus profil
            showAlertMessage('Profil berhasil dihapus', 'success');
            setTimeout(() => {
                router.push('/'); // Ganti dengan halaman setelah profil dihapus
            }, 1500);
        }
    };

    return (<></>
    );
};

export default ProfileDetailForm;
