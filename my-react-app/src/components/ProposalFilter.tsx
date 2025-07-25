import React from "react";
import { Filter } from "lucide-react";

type Props = {
    status: string;
    onChange: (status: string) => void;
};

export default function ProposalFilter({ status, onChange }: Props) {
    return (
        <div className="border rounded-md p-4 bg-white mb-6">
            <div className="flex items-center gap-2 mb-2">
                <Filter className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Filter Proposals</span>
            </div>
            <select
                value={status}
                onChange={(e) => onChange(e.target.value)}
                className="border px-3 py-2 rounded-md text-sm"
            >
                <option value="all">All statuses</option>
                <option value="under_review">Under Review</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
            </select>
        </div>
    );
}
