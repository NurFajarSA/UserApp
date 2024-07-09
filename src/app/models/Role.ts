export enum Role {
    ADMIN = 'Admin',
    USER = 'User'
}

export const castStringToRole = (role: string): Role => {
    if (role === Role.ADMIN) {
        return Role.ADMIN;
    } else if (role === Role.USER) {
        return Role.USER;
    } else {
        throw new Error('Role not found');
    }
}