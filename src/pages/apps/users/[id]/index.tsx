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
    const role = getUserRole();
    const router = useRouter();
    const [loadingRemove, setLoadingRemove] = useState(false);
    const id = router.query.id as string;

    useEffect(() => {
        if (role !== Role.ADMIN) {
            router.replace(Routes.DASHBOARD);
        }
    }, [role, router]);


    const handleRemoveUser = async () => {
        setLoadingRemove(true);
        try {
            const response = await deleteUserById(id);
            if (response) {
                router.replace(Routes.USERS);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingRemove(false);
        }

    }


    return (
        <main>
            <Layout title="User Detail">


                <UserProfile />
                {!loadingRemove && <div className="text-center">User not found</div>}
                {loadingRemove ? (
                    <button className="btn btn-error" disabled>
                        <span className="loading loading-spinner loading-sm"></span>
                    </button>
                ) : (
                    <button
                        className="btn btn-error"
                        onClick={handleRemoveUser}
                    >
                        Hapus Pengguna
                    </button>
                )}


            </Layout>
        </main>
    );
}

export default withAuth(UserDetailPage);