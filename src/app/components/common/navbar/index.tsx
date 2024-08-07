import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Alert from '../alert';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Routes } from '@/app/routes/routes';
import { getUserRole } from '@/app/utils/cookies';
import { Role } from '@/app/models/role';

interface NavbarProps {
    toggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => {
    const [modal, setModal]: any = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info'>('error');
    const [alertMessage, setAlertMessage] = useState('');
    const router = useRouter();
    const [role, setRole] = useState<string>();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setRole(getUserRole());
        setIsMounted(true);
    }, []);

    const showAlertMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'error') => {
        setShowAlert(true);
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleLogout = () => {
        modal.showModal()
    }
    const logout = () => {
        modal.close();
        handleLogout();
        showAlertMessage('Logout berhasil', 'success');
        setTimeout(() => {
            router.replace(Routes.LOGIN);
        }, 1500);
    }


    useEffect(() => {
        setModal(document.getElementById('my_modal'));
    }, [])

    return (<>
        {showAlert && <Alert type={alertType} message={alertMessage} />}
        <dialog id="my_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Logout</h3>
                <p className="py-4">Apakah Anda yakin ingin keluar dari akun Anda?</p>
                <div className="modal-action">
                    <form method="dialog" className='space-x-4'>
                        <button className="btn px-8">Batal</button>
                        <button className="btn btn-error px-6" onClick={logout}>Keluar</button>
                    </form>
                </div>
            </div>
        </dialog>
        <div className="navbar bg-base-100 w-full">
            <div className="navbar-start">
                <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button" onClick={toggleDrawer}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
            </div>
            <div className="navbar-end">

                <span className={`badge badge-l ${role == Role.ADMIN ? 'badge-info' : 'badge-warning'} center p-2.5`}>
                    {isMounted ? role : <div className="loading loading-bars loading-sm"></div>}
                </span>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Tailwind CSS Navbar component"
                                width={40}
                                height={40}
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link href="/profile">Profile</Link></li>
                        <li><a className='text-error' onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;
