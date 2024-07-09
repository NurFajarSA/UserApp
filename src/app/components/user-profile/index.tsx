import UserDetailCard from "../user-detail-card";
import { User } from "@/app/models/user";
import UsernameForm from "../username-form";
import ChangePasswordForm from "../change-password-form";

interface UserProfileProps {
    user: User;
}


const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    return (
        <div className="flex flex-col gap-4 min-h-standard">
            <UserDetailCard user={user} />
            <UsernameForm username={user.username}/>
            <ChangePasswordForm />
        </div>
    );
}

export default UserProfile;