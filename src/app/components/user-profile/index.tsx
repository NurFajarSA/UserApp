import UserDetailCard from "../user-detail-card";
import UsernameForm from "../username-form";
import ChangePasswordForm from "../change-password-form";

interface UserProfileProps {
    id: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ id }) => {
    return (
        <div className="flex flex-col gap-4">
            <UserDetailCard id={id} />
            <UsernameForm id={id} />
            <ChangePasswordForm />
        </div>
    );
}

export default UserProfile;