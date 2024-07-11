import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import { getUserId } from "@/app/utils/cookies";
import withAuth from "@/app/utils/withAuth";
import { useState } from "react";

function ProfilePage() {
    const [id, setId] = useState<string>(getUserId() || '');
    return (
        <Layout title="Profile">
            <div className="min-h-standard">
                <UserProfile id={id} />
            </div>
        </Layout>
    );
}

export default withAuth(ProfilePage);