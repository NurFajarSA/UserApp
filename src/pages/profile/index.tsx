import Layout from "@/app/components/common/layout";
import ProfileDetailForm from "@/app/components/profile-form-detail";
import withAuth from "@/app/utils/withAuth";

function ProfilePage() {
    return (
        <main>
            <Layout title="Profile">
                <div className="min-h-standard bg-white shadow-md rounded-md">
                    <ProfileDetailForm />
                </div>

            </Layout>
        </main>
    );
}

export default withAuth(ProfilePage);