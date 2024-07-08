import { User } from "@/app/models/User";
import React from 'react';

interface UserDetailCardProps {
    user: User;
}

const UserDetailCard: React.FC<UserDetailCardProps> = ({ user }) => {

    return (
        <div className="my-card">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 w-full">
                <div className="flex text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">person</span>
                    <span className="w-1/3 font-semibold">Username</span>
                    <span className="w-2/3">: {user.username}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">email</span>
                    <span className="w-1/3 font-semibold">Email</span>
                    <span className="w-2/3">: {user.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">badge</span>
                    <span className="w-1/3 font-semibold">Role</span>
                    <span className="w-2/3">: <span className={`badge badge-l ${user.role == 'admin' ? 'badge-info' : 'badge-warning'} center p-2.5`}>
                        {user.role}</span>
                    </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">calendar_today</span>
                    <span className="w-1/3 font-semibold">Date Create</span>
                    <span className="w-2/3">: {user.dateCreate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">update</span>
                    <span className="w-1/3 font-semibold">Date Update</span>
                    <span className="w-2/3">; {user.dateUpdate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">login</span>
                    <span className="w-1/3 font-semibold">Last Login</span>
                    <span className="w-2/3">: {user.lastLogin}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">security</span>
                    <span className="w-1/3 font-semibold">Login Attempt</span>
                    <span className="w-2/3">: {user.loginAttempt}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="material-icons-outlined mr-2">{user.isDeleted ? 'delete' : 'check_circle'}</span>
                    <span className="w-1/3 font-semibold">Is Deleted</span>
                    <span className="w-2/3">: {user.isDeleted ? 'Yes' : 'No'}</span>
                </div>
            </div>
        </div>
    );
}

export default UserDetailCard;