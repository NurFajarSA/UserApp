import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
    iss: string;
    sub: string;
    groups: string;
    email: string;
    username: string;
    iat: number;
    exp: number;
    jti: string;
}

export const jwtDecoder = (token: string) => {
    const jwtPayload: JwtPayload = jwtDecode(token);
    return jwtPayload;
}