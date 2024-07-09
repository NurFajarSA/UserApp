import { Role } from "./role";

export interface User {
    id: string
    email: string;
    username: string;
    role: Role;
    dateCreate: string;
    dateUpdate: string;
    lastLogin: string;
    loginAttempt: number;
    isDeleted: boolean;
}