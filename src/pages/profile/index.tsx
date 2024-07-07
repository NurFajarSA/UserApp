import Layout from "@/app/components/common/layout";
import ProfileDetailForm from "@/app/components/profile-form-detail";

export default function ProfilePage() {
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