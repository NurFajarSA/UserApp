import { changePassword } from "@/app/services/userService";
import { useEffect, useState } from "react";
import Alert from "../common/alert";

const ChangePasswordForm: React.FC = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info'>('error'); 
    const [alertMessage, setAlertMessage] = useState('');

    const showAlertMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'error') => {
        setShowAlert(true);
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await changePassword(oldPassword, newPassword);
            if (response) {
                showAlertMessage('Password berhasil diubah', 'success');
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            }
        } catch (error: any) {
            showAlertMessage(error);
        } finally {
            setLoading(false);
        }
    }

    return (<>
        {showAlert && <Alert type={alertType} message={alertMessage} />}
        <div className="flex flex-col gap-4 my-card">
            <div className="text-md font-medium">Ubah Password</div>
            <form className="flex justify-between items-end" onSubmit={handleChangePassword}>
                <div className="flex flex-col gap-4 w-3/4 mr-6 ">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="password"
                            placeholder="Password Lama"
                            value={oldPassword}
                            onChange={(e) => {
                                setOldPassword(e.target.value);
                            }}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="password"
                            placeholder="Password Baru"
                            value={newPassword}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                            }}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="password"
                            placeholder="Konfirmasi Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </label>
                </div>
                {!loading && newPassword !== "" && confirmPassword !== "" && newPassword === confirmPassword && (
                    <button className="btn btn-primary w-1/4" type="submit">Ubah</button>
                )}
                {!loading && (newPassword === "" || confirmPassword === "" || newPassword !== confirmPassword) && (
                    <button className="btn btn-primary w-1/4" type="submit" disabled>Ubah</button>
                )}
                {loading && (
                    <button className="btn btn-primary w-1/4" type="button" disabled>
                        <span className="loading loading-spinner loading-md"></span>
                    </button>
                )}
            </form>
        </div>
    </>
    );
}

export default ChangePasswordForm;