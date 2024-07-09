import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import { Role } from "@/app/models/Role";
import { Routes } from "@/app/routes/routes";
import { getUserRole } from "@/app/utils/cookies";
import dummyData from "@/app/utils/dummyData";
import withAuth from "@/app/utils/withAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function UserDetailPage() {
    const role = getUserRole();
    const router = useRouter();
    useEffect(() => {
        if (role !== Role.ADMIN) {
            router.replace(Routes.DASHBOARD);
        }
    }, [role, router]);

    return (
        <main>
            <Layout title="User Detail">
                <UserProfile user={dummyData[0]} />
            </Layout>
        </main>
    );
}

export default withAuth(UserDetailPage);