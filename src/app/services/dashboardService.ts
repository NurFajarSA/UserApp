import { BASE_URL } from "../constant";
import { BaseResponse } from "./response";

export const getTotalAdmins = async () => {
    try {
        const response = await fetch(BASE_URL + '/dashboard/total/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<any> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Get total admins error:', error);
        throw error;
    }
}

export const getTotalUsers = async () => {
    try {
        const response = await fetch(BASE_URL + '/dashboard/total/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<any> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Get total users error:', error);
        throw error;
    }
}

export const  getTotalLoginAttempts = async () => {
    try {
        const response = await fetch(BASE_URL + '/dashboard/total/login-attempt', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<any> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Get total login attempts error:', error);
        throw error;
    }
}