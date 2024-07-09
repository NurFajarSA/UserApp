import { Role } from "@/app/models/role";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    username: string;
    role: Role;
}

export interface UpdateUserRequest {
    id: string;
    username: string;
}

export interface ChangePasswordRequest {
    id: string;
    oldPassword: string;
    newPassword: string;
}