
import { Role } from "../models/role";
import Cookies from 'js-cookie';

const TOKEN_NAME = 'token';
const USER_ID = 'user_id';
const ROLE_NAME = 'role';
const USERNAME = 'username';

export const isAuthenticated = () => {
    return Cookies.get(TOKEN_NAME) !== undefined;
}

export const handleLogin = (token: string, role: Role, userId: string, username: string) => {
    Cookies.set(TOKEN_NAME, token);
    Cookies.set(ROLE_NAME, role);
    Cookies.set(USER_ID, userId);
    Cookies.set(USERNAME, username);
}

export const handleLogout = () => {
    Cookies.remove(TOKEN_NAME);
    Cookies.remove(ROLE_NAME);
    Cookies.remove(USER_ID);
    Cookies.remove(USERNAME);
}

export const getUsername = () => {
    return Cookies.get(USERNAME);
}

export const setUsername = (username: string) => {
    Cookies.set(USERNAME, username)
}

export const removeUsername = () => {
    Cookies.remove(USERNAME);
}

export const getToken = () => {
    return Cookies.get(TOKEN_NAME);
}

export const setToken = (token: string) => {
    Cookies.set(TOKEN_NAME, token);
}

export const removeToken = () => {
    Cookies.remove(TOKEN_NAME);
}

export const getUserRole = () => {
    return Cookies.get(ROLE_NAME);
}

export const setUserRole = (role: Role) => {

    Cookies.set(ROLE_NAME, role);

}

export const removeUserRole = () => {
    Cookies.remove(ROLE_NAME);
}

export const getUserId = () => {
    return Cookies.get(USER_ID);
}

export const setUserId = (userId: string) => {

    Cookies.set(USER_ID, userId);

}

export const removeUserId = () => {
    Cookies.remove(USER_ID);
}