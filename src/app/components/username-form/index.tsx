import { updateUsername } from "@/app/services/userService";
import { useEffect, useState } from "react";
import Alert from "../common/alert";
import { useRouter } from "next/router";
import { getUsername, setUsername } from "@/app/utils/cookies";

interface UsernameFormProps {
    id: string;
}

const UsernameForm: React.FC<UsernameFormProps> = ({ id }) => {
    const [newUsername, setNewUsername] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info'>('error');
    const [alertMessage, setAlertMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        setLoading(false);
    }, []);

    const showAlertMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'error') => {
        setShowAlert(true);
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => {
            setShowAlert(false)
            setAlertType('error');
            setAlertMessage('');
        } , 3000);
    };

    const handleUpdateUsername = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (!newUsername) {
            showAlertMessage('Username tidak boleh kosong');
            setLoading(false);
            return;
        }
        try {
            const response = await updateUsername(newUsername, id);
            if (response) {
                showAlertMessage('Username berhasil diubah', 'success');
                setNewUsername(response.username);
                setUsername(response.username);
                setLoading(false);
                router.reload();
            }
        } catch (error: any) {
            showAlertMessage(error);
        } finally {
            setLoading(false);
        }
    };

    return (<>
        {showAlert && <Alert type={alertType} message={alertMessage} />}
        <div className="flex flex-col gap-4 my-card">
            <div className="text-md font-medium">Ubah Username</div>
            <form className="flex justify-between" onSubmit={handleUpdateUsername}>
                <label className="input input-bordered flex items-center gap-2 w-3/4 mr-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Username"
                        value={newUsername}
                        onChange={(e) => {
                            setNewUsername(e.target.value);
                        }}
                    />
                </label>
                {!loading && newUsername !== "" &&(<button className="btn btn-primary w-1/4" type="submit">Ubah</button>)}
                {loading && <button className="btn btn-primary w-1/4" type="button" disabled><span className="loading loading-spinner loading-md"></span></button>}
                {!loading && newUsername === "" && <button className="btn btn-primary w-1/4" type="button" disabled>Ubah</button>}
            </form>
        </div>
    </>
    );
}

export default UsernameForm;