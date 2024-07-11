import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import { Role } from "@/app/models/role";
import { Routes } from "@/app/routes/routes";
import { deleteUserById } from "@/app/services/userService";
import { getUserRole } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UserDetailPage() {
    const [role, setRole] = useState<string>(getUserRole() || '');
    const router = useRouter();
    const [loadingRemove, setLoadingRemove] = useState(false);
    const [id, setId] = useState<string>();
    const [isMounted, setIsMounted] = useState(false);
    const [modal, setModal]: any = useState(null);

    useEffect(() => {
        if (!router.isReady) return; // Wait until the router is ready
        const { id } = router.query;
        if (id) {
            setId(id as string);
        }
        setIsMounted(true);
        if (role !== Role.ADMIN) {
            router.replace(Routes.DASHBOARD);
        }
    }, [router.isReady, router.query, role]);


    const handleRemoveUser = async () => {
        setLoadingRemove(true);
        try {
            const response = await deleteUserById(id||"");
            if (response) {
                router.replace(Routes.USERS);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingRemove(false);
        }

    }

    const showDialog = ()  => {
        modal.showModal()
    }

    useEffect(() => {
        setModal(document.getElementById('my_modal_2'));
    }, [])


    return (
        <main>
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hapus Pengguna</h3>
                <p className="py-4">Apakah Anda yakin ingin menghapus pengguna ini?</p>
                <div className="modal-action">
                    <form method="dialog" className='space-x-4'>
                        <button className="btn px-8">Batal</button>
                        <button className="btn btn-error px-6" onClick={handleRemoveUser}>Hapus</button>
                    </form>
                </div>
            </div>
        </dialog>
            <Layout title="User Detail">
                <div className="flex flex-col min-h-standard gap-4">

                {isMounted ? (
                    <UserProfile id={id||""} />
                ) : (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-spinner loading-md"></span>
                    </div>
                )}
                {loadingRemove ? (
                    <button className="btn btn-error" disabled>
                        <span className="loading loading-spinner loading-sm"></span>
                    </button>
                ) : (
                    <button
                    className="btn btn-error"
                    onClick={showDialog}
                    >
                        Hapus Pengguna
                    </button>
                )}

                </div>

            </Layout>
        </main>
    );
}

export default withAuth(UserDetailPage);