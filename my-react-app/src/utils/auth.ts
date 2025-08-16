// Utility functions for authentication

export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export const getUserType = (): string | null => {
    return localStorage.getItem('userType');
};

export const clearAuth = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
};

export const isAuthenticated = (): boolean => {
    const token = getToken();
    return !!token;
};
