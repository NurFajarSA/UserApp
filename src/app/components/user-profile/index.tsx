import UserDetailCard from "../user-detail-card";
import UsernameForm from "../username-form";
import ChangePasswordForm from "../change-password-form";

const UserProfile: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 min-h-standard">
            <UserDetailCard />
            <UsernameForm />
            <ChangePasswordForm />
        </div>
    );
}

export default UserProfile;