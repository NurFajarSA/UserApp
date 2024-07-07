import Layout from "@/app/components/common/layout";
import UserTable from "@/app/components/user-tabel";
import withAuth from "@/app/utils/withAuth";

function UsersPage() {
    return (
        <main>
            <Layout title="User Data">
                <div className="min-h-standard bg-white shadow-md rounded-md p-6" >
                    <UserTable />
                </div>
            </Layout>
        </main>
    );
}

export default withAuth(UsersPage);