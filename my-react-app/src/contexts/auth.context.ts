// import { AuthContext } from './auth.context';
// import type { AuthContextValue } from '@/types/AuthContextValue'
import type { AuthResponse } from '@/types/AuthResponse';
import { createContext, type Dispatch, type SetStateAction } from 'react'

export type AuthContextType = {
    user : AuthResponse | null
    setUser: Dispatch<SetStateAction<AuthResponse | null>>
    
}

export const AuthContext = createContext<AuthContextType>({
    user:null,
    setUser:()=>{}
});


