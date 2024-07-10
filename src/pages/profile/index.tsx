import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import withAuth from "@/app/utils/withAuth";

function ProfilePage() {
    return (
        <Layout title="Profile">
            <UserProfile />
        </Layout>
    );
}

export default withAuth(ProfilePage);