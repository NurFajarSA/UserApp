export interface User {
    id: string
    email: string;
    username: string;
    password: string;
    role: string;
    dateCreate: string;
    dateUpdate: string;
    lastLogin: string;
    loginAttempt: number;
    isDeleted: boolean;
}