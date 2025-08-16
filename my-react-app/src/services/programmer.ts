import axios, { type AxiosResponse } from 'axios';
import {config} from '../config';
import type  {Programmer} from '../types/programmer';
import type { ApiResponse } from '@/types/ApiResponse';

export async function registerProgrammer(programmer: Programmer): Promise<ApiResponse | null> {
    try {
        
        const url = `${config.serverURL}/programmer/signup`;
        const body = {
            firstName: programmer.firstName,
            lastName: programmer.lastName,
            email: programmer.email,
            password: programmer.password,
            phoneNumber: programmer.phoneNumber,
            cdacStudent: programmer.cdacStudent,
            experience: programmer.experience,
            available: programmer.available,
            bio: programmer.bio,
            github: programmer.github
        }

        const response: AxiosResponse<ApiResponse> = await axios.post(url, body);
        if(response.status === 201){
            return response.data;
        }

    } catch (error) {
        console.error('Error registering programmer:', error);
        // throw error;
        
    }
    return null;

}
