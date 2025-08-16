import axios from 'axios';
import {config} from '../config';
import type { AuthResponse } from '@/types/AuthResponse';

// // Create axios instance
// const api = axios.create({
//     baseURL: config.serverURL
// });

// // Add request interceptor to include token
// api.interceptors.request.use(
//     (config) => {
//         // Don't add Authorization header for login endpoint
//         if (config.url === '/user/login') {
//             return config;
//         }
        
//         const token = localStorage.getItem('token');
//         log
//         if (token && token.trim() !== '') {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export interface LoginRequest {
//     email: string;
//     password: string;
// }

// export interface LoginResponse {
//     token: string;
//     // Add other fields if your backend returns more data
// }

// export async function loginUser(loginData: LoginRequest): Promise<LoginResponse> {
//     const response = await api.post('/user/login', loginData);
//     return response.data;
// }

export async function loginUser(email:string, password:string): Promise<AuthResponse | null> {
    try {
        const url = `${config.serverURL}/user/login`;       
        // const url = `http://13.232.135.89:8080/user/login`;
        const body = { email, password };
        
        const response = await axios.post(url, body);
        
        if (response.status === 200) {
            // localStorage.setItem('token', response.data);
            
            console.log(response.data);
             // Store token in localStorage
            return response.data; // Assuming the token is returned in the response
        }
    } catch (error) {
        console.error('Error logging in user:', error);
    }
    return null;
}


