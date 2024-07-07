import Layout from "@/app/components/common/layout";
import withAuth from "@/app/utils/withAuth";

function DashboardPage() {
    return (
        <main>
            <Layout title="Dashboard">
                <div className="min-h-standard bg-white shadow-md rounded-md" />
            </Layout>
        </main>
    );
}

export default withAuth(DashboardPage);