import { config } from "@/config";
import type { Proposal } from "@/types/Proposal";
import type { AxiosResponse } from "axios";
import axios from "axios";

export async function getAllProposal(): Promise<Proposal[] | null> {
    try {
        const url = `${config.serverURL}/client/proposals`;
        const TOKEN = localStorage.getItem('token');
        
        const response: AxiosResponse<Proposal[]> = await axios.get(url, {headers: { Authorization: `Bearer ${TOKEN}` } });
        if (response.status === 200) {
            // console.log(response.data);
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching proposals:', error);
    }
    return null;
}