import UserDetailCard from "../user-detail-card";
import { User } from "@/app/models/User";

interface UserProfileProps {
    user: User;
}


const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    return (
        <div className="flex flex-col gap-4 min-h-standard">
            <UserDetailCard user={user} />
            <div className="my-card">
                Username
            </div>
            <div className="my-card">
                Password
            </div>
        </div>
    );
}

export default UserProfile;