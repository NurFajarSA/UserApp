import { BASE_URL } from "../constant";
import { BaseResponse } from "./response";
import { User } from "../models/user";
import { getToken, getUserId } from "../utils/cookies";

export const getAllUsers = async () => {
    try {
        const token = "Bearer " + getToken();
        const response = await fetch(BASE_URL + '/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<User[]> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Get all users error:', error);
        throw error;
    }
}

export const getUserById = async (id: string) => {
    try {
        const token = "Bearer " + getToken();
        const response = await fetch(BASE_URL + '/users/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<User> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Get user by id error:', error);
        throw error;
    }
}

export const updateUsername = async (username: string, id:string) => {
    try {
        const token = "Bearer " + getToken();
        const response = await fetch(BASE_URL + '/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify({
                id: id,
                username: username,
            }),
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<User> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Update username error:', error);
        throw error;
    }
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
        const token = "Bearer " + getToken();
        const response = await fetch(BASE_URL + '/users/change-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify({
                id: getUserId(),
                oldPassword: oldPassword,
                newPassword: newPassword,
            }),
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }
        
        const data: BaseResponse<User> = await response.json();
        return data;
    } catch (error) {
        console.error('Change password error:', error);
        throw error;
    }
}

export const deleteUserById = async (id: string) => {
    try {
        const token = "Bearer " + getToken();
        const response = await fetch(BASE_URL + '/users/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<User> = await response.json();
        return data;
    } catch (error) {
        console.error('Delete user error:', error);
        throw error;
    }
}