import Layout from "@/app/components/common/layout";
import { getUserRole } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import Profile from "../profile";
import UserProfile from "@/app/components/user-profile";
import dummyData from "@/app/utils/dummyData";
import { Role } from "@/app/models/Role";
import UserDetailCard from "@/app/components/user-detail-card";
import UserTable from "@/app/components/user-tabel";

function DashboardPage() {
    const userRole = getUserRole();

    if (userRole === Role.ADMIN) {
        return (
            <main>
                <Layout title="Dashboard">
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-4 min-h-standard">
                        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 className="text-md font-medium">Jumlah Pengguna</h3>
                                <p className="text-4xl font-bold text-gray-800">10</p>
                            </div>
                            <span className="material-icons-outlined text-4xl text-gray-800 mr-4">people</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 className="text-md font-medium">Jumlah Admin</h3>
                                <p className="text-4xl font-bold text-gray-800">10</p>
                            </div>
                            <span className="material-icons-outlined text-4xl text-gray-800 mr-4">admin_panel_settings</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 className="text-md font-medium">Total Percobaan Login</h3>
                                <p className="text-4xl font-bold text-gray-800">10</p>
                            </div>
                            <span className="material-icons-outlined text-4xl text-gray-800 mr-4">login</span>

                        </div>
                        <div className="my-card col-span-3">
                            <UserTable />
                        </div>
                    </div>
                </Layout>
            </main>
        );
    } else {
        return (
            <main>
                <Layout title="Dashboard">
                    <div className="min-h-standard">
                        <UserDetailCard user={dummyData[0]} />
                    </div>
                </Layout>
            </main>
        );
    }


}

export default withAuth(DashboardPage);