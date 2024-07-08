import { Role } from "../models/Role";

const TOKEN_NAME = 'token';
const USER_ID = 'user_id';
const ROLE_NAME = 'role';



export const getToken = () => {
    // return localStorage.getItem(TOKEN_NAME);
    return "token"
}

export const setToken = (token: string) => {
    // localStorage.setItem(TOKEN_NAME, token);
}

export const removeToken = () => {
    // localStorage.removeItem(TOKEN_NAME);
}

export const getUserRole = () => {
    return Role.ADMIN;
}

export const setUserRole = (role: Role) => {
    // localStorage.setItem(ROLE_NAME, role);
}

export const removeUserRole = () => {
    // localStorage.removeItem(ROLE_NAME);
}

export const getUserId = () => {
    return "1";
}

export const setUserId = (userId: string) => {
    // localStorage.setItem(USER_ID, userId);
}

export const removeUserId = () => {
    // localStorage.removeItem(USER_ID);
}