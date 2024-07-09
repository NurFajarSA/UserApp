import Layout from "@/app/components/common/layout";
import UserProfile from "@/app/components/user-profile";
import { getUserById } from "@/app/services/userService";
import { getUserId } from "@/app/utils/cookies";
import dummyData from "@/app/utils/dummyData";
import withAuth from "@/app/utils/withAuth";
import { useEffect, useState } from "react";

function ProfilePage() {
    const [user, setUser] = useState(dummyData[0]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const id = getUserId() as string;
            const response = await getUserById(id);
            if (response) {
                setUser(response);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <Layout title="Profile">
                {loading ? (
                    <span className="loading loading-spinner loading-lg"></span>
                ) : (
                    <UserProfile user={user} />
                )}
            </Layout>
        </main>
    );
}

export default withAuth(ProfilePage);