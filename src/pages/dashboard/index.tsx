import Layout from "@/app/components/common/layout";
import { getUserId, getUserRole } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import { Role } from "@/app/models/role";
import UserDetailCard from "@/app/components/user-detail-card";
import UserTable from "@/app/components/user-table";
import { useEffect, useState } from "react";
import { getTotalAdmins, getTotalLoginAttempts, getTotalUsers } from "@/app/services/dashboardService";

function DashboardPage() {
    const [userRole, setUserRole] = useState<string>();
    const [id, setId] = useState<string>(getUserId()||"");
    useEffect(() => {
        setUserRole(getUserRole());
    }, []);
    if (userRole === Role.ADMIN) {
        return (
            <Layout title="Dashboard">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 min-h-standard">
                    <StatisticCard />
                    <div className="my-card col-span-3">
                        <UserTable />
                    </div>
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout title="Dashboard">
                <div className="min-h-standard">
                    <UserDetailCard id={id||""} />
                </div>
            </Layout>
        );
    }


}

export default withAuth(DashboardPage);

const StatisticCard = () => {
    const [totalUser, setTotalUser] = useState();
    const [totalAdmin, setTotalAdmin] = useState();
    const [totalLoginAttempt, setTotalLoginAttempt] = useState();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const totalUser = await getTotalUsers();
            setTotalUser(totalUser);

            const totalAdmin = await getTotalAdmins();
            setTotalAdmin(totalAdmin);

            const totalLoginAttempt = await getTotalLoginAttempts();
            setTotalLoginAttempt(totalLoginAttempt);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="my-card flex items-center justify-between">
                <div>
                    <div className="text-md font-medium">Jumlah Pengguna</div>
                    {loading ? <span className="loading loading-bars loading-md"></span> : <p className="text-4xl font-bold text-gray-800">{totalUser}</p>}
                    {error && <p className="text-red-500">Gagal memuat data</p>}
                </div>
                <span className="material-icons-outlined text-4xl text-gray-800 mr-4">people</span>
            </div>
            <div className="my-card flex items-center justify-between">
                <div>
                    <div className="text-md font-medium">Jumlah Admin</div>
                    {loading ? <span className="loading loading-bars loading-md"></span> : <p className="text-4xl font-bold text-gray-800">{totalAdmin}</p>}
                    {error && <p className="text-red-500">Gagal memuat data</p>}
                </div>
                <div className="material-icons-outlined text-4xl text-gray-800 mr-4">admin_panel_settings</div>
            </div>
            <div className="my-card flex items-center justify-between">
                <div>
                    <div className="text-md font-medium">Total Percobaan Login</div>
                    {loading ? <span className="loading loading-bars loading-md"></span> : <p className="text-4xl font-bold text-gray-800">{totalLoginAttempt}</p>}
                    {error && <p className="text-red-500">Gagal memuat data</p>}
                </div>
                <span className="material-icons-outlined text-4xl text-gray-800 mr-4">login</span>
            </div>
        </>);
}