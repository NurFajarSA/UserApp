import Layout from "@/app/components/common/layout";
import UserTable from "@/app/components/user-tabel";
import { Role } from "@/app/models/Role";
import { getUserRole } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function UsersPage() {
    const role = getUserRole();
    const router = useRouter();
    useEffect(() => {
        if (role !== Role.ADMIN) {
            router.push("/dashboard");
        }
    }, [role, router]);

    return (
        <main>
            <Layout title="User Data">
                <div className="my-card min-h-standard" >
                    <UserTable />
                </div>
            </Layout>
        </main>
    );
}

export default withAuth(UsersPage);