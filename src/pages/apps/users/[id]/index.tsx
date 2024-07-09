import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import { Role } from "@/app/models/role";
import { Routes } from "@/app/routes/routes";
import { deleteUserById, getUserById } from "@/app/services/userService";
import { getUserRole } from "@/app/utils/cookies";
import dummyData from "@/app/utils/dummyData";
import withAuth from "@/app/utils/withAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UserDetailPage() {
    const role = getUserRole();
    const router = useRouter();
    const [user, setUser] = useState(dummyData[0]);
    const [loading, setLoading] = useState(false);
    const [loadingRemove, setLoadingRemove] = useState(false);
    const id = router.query.id as string;

    useEffect(() => {
        if (role !== Role.ADMIN) {
            router.replace(Routes.DASHBOARD);
        }
    }, [role, router]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getUserById(id);
            if (response) {
                setUser(response);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    };

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

    useEffect(() => {
        fetchData();
    }, [fetchData()]);

    return (
        <main>
            <Layout title="User Detail">
                {loading ? (
                    <span className="loading loading-bars loading-lg"></span>
                ) : (
                    <>
                        <UserProfile user={user} />
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
                    </>
                )}
            </Layout>
        </main>
    );
}

export default withAuth(UserDetailPage);