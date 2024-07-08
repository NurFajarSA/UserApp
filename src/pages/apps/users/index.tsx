import Layout from "@/app/components/common/layout";
import UserTable from "@/app/components/user-tabel";
import withAuth from "@/app/utils/withAuth";

function UsersPage() {
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