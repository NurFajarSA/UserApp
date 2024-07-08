import { Role } from "./Role";

export interface User {
    id: string
    email: string;
    username: string;
    password: string;
    role: Role;
    dateCreate: string;
    dateUpdate: string;
    lastLogin: string;
    loginAttempt: number;
    isDeleted: boolean;
}