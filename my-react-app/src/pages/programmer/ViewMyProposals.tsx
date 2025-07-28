import { useState } from "react";
import ProposalCard from "@/components/ProposalCard";
import ProposalFilter from "@/components/ProposalFilter";
import ProposalStats from "@/components/ProposalStats";

type Proposal = {
    title: string;
    company: string;
    budget: string;
    duration: string;
    coverLetter: string;
    submitted: string;
    accepted: string;
    status: "accepted" | "rejected" | "under_review";
}

const proposalsData: Proposal[] = [
    {
        title: "E-commerce Website for Electronics Store",
        company: "TechCorp Solutions",
        budget: "₹52,000",
        duration: "40 days",
        coverLetter:
            "Dear Rajesh, I am excited to submit my proposal for your e-commerce website project...",
        submitted: "1/21/2024",
        accepted: "1/22/2024",
        status: "accepted",
    },
];

export default function ViewMyProposals() {
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredProposals =
        statusFilter === "all"
            ? proposalsData
            : proposalsData.filter((p) => p.status === statusFilter);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold">My Proposals</h1>
            <p className="text-gray-600 mb-6">
                Track all your submitted proposals and their status.
            </p>

            <ProposalStats total={4} underReview={2} accepted={1} rejected={1} />
            <ProposalFilter status={statusFilter} onChange={setStatusFilter} />

            {filteredProposals.map((p, i) => (
                <ProposalCard key={i} proposal={p} />
            ))}
        </div>
    );
}
