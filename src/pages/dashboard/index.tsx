import Layout from "@/app/components/common/layout";
import withAuth from "@/app/utils/withAuth";

function DashboardPage() {
    return (
        <main>
            <Layout title="Dashboard">
                <div className="my-card min-h-standard" />
            </Layout>
        </main>
    );
}

export default withAuth(DashboardPage);