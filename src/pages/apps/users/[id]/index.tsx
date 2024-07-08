import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import dummyData from "@/app/utils/dummyData";
import withAuth from "@/app/utils/withAuth";

function UserDetailPage() {
    return (
        <main>
            <Layout title="User Detail">
                <UserProfile user={dummyData[0]} />
            </Layout>
        </main>
    );
}

export default withAuth(UserDetailPage);