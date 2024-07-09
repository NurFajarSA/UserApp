import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import { Role } from "@/app/models/role";
import { Routes } from "@/app/routes/routes";
import { getUserById } from "@/app/services/userService";
import { getUserRole } from "@/app/utils/cookies";
import dummyData from "@/app/utils/dummyData";
import withAuth from "@/app/utils/withAuth";
import { get } from "http";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UserDetailPage() {
    const role = getUserRole();
    const router = useRouter();
    const [user, setUser] = useState(dummyData[0]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (role !== Role.ADMIN) {
            router.replace(Routes.DASHBOARD);
        }
    }, [role, router]);

    const fetchData = async () => {
        const id = router.query.id as string;
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <Layout title="User Detail">
                {loading ? (
                    <span className="loading loading-bars loading-lg"></span>
                ) : (
                    <UserProfile user={user} />
                )}
            </Layout>
        </main>
    );
}

export default withAuth(UserDetailPage);