import Layout from "@/app/components/common/layout";
import UserTable from "@/app/components/user-table";
import { Role } from "@/app/models/role";
import { Routes } from "@/app/routes/routes";
import { getUserRole } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UsersPage() {
    const [role, setRole] = useState<string>(getUserRole()||"");
    const router = useRouter();
    
    useEffect(() => {
        if (role !== Role.ADMIN) {
            router.replace(Routes.DASHBOARD);
        }
    }, []);

    return (
        <main>
            <Layout title="Data Pengguna">
                <div className="my-card min-h-standard" >
                    <UserTable />
                </div>
            </Layout>
        </main>
    );
}

export default withAuth(UsersPage);