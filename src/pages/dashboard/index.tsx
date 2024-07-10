import Layout from "@/app/components/common/layout";
import { getUserRole } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import { Role } from "@/app/models/role";
import UserDetailCard from "@/app/components/user-detail-card";
import UserTable from "@/app/components/user-table";
import { useEffect, useState } from "react";
import { getTotalAdmins, getTotalLoginAttempts, getTotalUsers } from "@/app/services/dashboardService";

function DashboardPage() {
    const userRole = getUserRole();
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
                    <UserDetailCard />
                </div>
            </Layout>
        );
    }


}

export default withAuth(DashboardPage);

const StatisticCard = () => {
    const [totalUser, setTotalUser] = useState(0);
    const [totalAdmin, setTotalAdmin] = useState(0);
    const [totalLoginAttempt, setTotalLoginAttempt] = useState(0);
    const [loading, setLoading] = useState(true);
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
                    <h3 className="text-md font-medium">Jumlah Pengguna</h3>
                    {loading ? <span className="loading loading-bars loading-lg"></span> : <p className="text-4xl font-bold text-gray-800">{totalUser}</p>}
                    {error && <p className="text-red-500">Gagal memuat data</p>}
                </div>
                <span className="material-icons-outlined text-4xl text-gray-800 mr-4">people</span>
            </div>
            <div className="my-card flex items-center justify-between">
                <div>
                    <h3 className="text-md font-medium">Jumlah Admin</h3>
                    {loading ? <span className="loading loading-bars loading-lg"></span> : <p className="text-4xl font-bold text-gray-800">{totalAdmin}</p>}
                    {error && <p className="text-red-500">Gagal memuat data</p>}
                </div>
                <span className="material-icons-outlined text-4xl text-gray-800 mr-4">admin_panel_settings</span>
            </div>
            <div className="my-card flex items-center justify-between">
                <div>
                    <h3 className="text-md font-medium">Total Percobaan Login</h3>
                    {loading ? <span className="loading loading-bars loading-lg"></span> : <p className="text-4xl font-bold text-gray-800">{totalLoginAttempt}</p>}
                    {error && <p className="text-red-500">Gagal memuat data</p>}
                </div>
                <span className="material-icons-outlined text-4xl text-gray-800 mr-4">login</span>
            </div>
        </>);
}