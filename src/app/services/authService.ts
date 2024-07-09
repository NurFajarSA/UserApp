import { BASE_URL } from "../constant";
import { castStringToRole, Role } from "../models/role";
import { User } from "../models/user";
import { handleLogin } from "../utils/cookies";
import { jwtDecoder } from "../utils/jwtDecoder";
import { LoginRequest, RegisterRequest } from "./request";
import { BaseResponse } from "./response";

export const register = async (request: RegisterRequest) => {
    try {
        const response = await fetch(BASE_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<User> = await response.json();
        return data.data;
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
}

export const login = async (request: LoginRequest) => {
    try {
        const response = await fetch(BASE_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            const errorResponse: BaseResponse<any> = await response.json();
            throw new Error(errorResponse.message || 'An error occurred');
        }

        const data: BaseResponse<string> = await response.json();
        const token = data.data;
        const payload = jwtDecoder(token.substring(7));
        handleLogin(token, castStringToRole(payload.groups[0]), payload.sub);
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}