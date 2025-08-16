import { Project } from './Project';
import type { User } from "./User";
import type { UserEntity } from './UserEntity';

// import { User } from 'lucide-react';
export type Proposal = {
    proposalId: number,
    proposedAmount: number,
    proposedDurationDays: number,
    coverLetter:string;
    status:string;
    project:Project;
    programmer: {
        user: UserEntity;
        experience: number;
        available: boolean;
        technologies: technology[];
        bio:string;
        github:string;
    }
}

type technology = {
    technology: string;
}

