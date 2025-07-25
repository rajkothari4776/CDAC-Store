import React from "react";
import { Eye } from "lucide-react";

type Proposal = {
    title: string;
    company: string;
    budget: string;
    duration: string;
    coverLetter: string;
    submitted: string;
    accepted: string;
    status: "accepted" | "under_review" | "rejected";
};

export default function ProposalCard({ proposal }: { proposal: Proposal }) {
    return (
        <div className="border rounded-md p-6 bg-white mb-4 relative">
            {/* Title */}
            <h3 className="text-lg font-semibold">{proposal.title}</h3>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                <span>{proposal.company}</span>
                <span>• {proposal.budget}</span>
                <span>• {proposal.duration}</span>
            </div>

            {/* Status Badge */}
            <span className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded-full text-xs capitalize">
                {proposal.status}
            </span>

            {/* Cover Letter */}
            <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">Cover Letter Preview:</p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{proposal.coverLetter}</p>
            </div>

            {/* Dates & Actions */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>
                    Submitted {proposal.submitted} • Accepted {proposal.accepted}
                </span>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                        View Project
                    </button>
                    <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800">
                        Start Work
                    </button>
                </div>
            </div>
        </div>
    );
}
