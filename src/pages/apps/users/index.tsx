import Layout from "@/app/components/common/layout";
import withAuth from "@/app/utils/withAuth";

function UsersPage() {
    return (
        <main>
            <Layout title="User Data">
                <div className="min-h-standard bg-white shadow-md rounded-md" />
            </Layout>
        </main>
    );
}

export default withAuth(UsersPage);