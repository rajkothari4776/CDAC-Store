import React from "react";

type ProposalStatsProps = {
    total: number;
    underReview: number;
    accepted: number;
    rejected: number;
};

export default function ProposalStats({
    total,
    underReview,
    accepted,
    rejected,
}: ProposalStatsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <StatCard label="Total Proposals" value={total} />
            <StatCard label="Under Review" value={underReview} color="text-blue-600" />
            <StatCard label="Accepted" value={accepted} color="text-green-600" />
            <StatCard label="Rejected" value={rejected} color="text-red-600" />
        </div>
    );
}

function StatCard({
    label,
    value,
    color = "text-gray-800",
}: {
    label: string;
    value: number;
    color?: string;
}) {
    return (
        <div className="border rounded-md p-4 text-center bg-white">
            <div className={`text-2xl font-semibold ${color}`}>{value}</div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
        </div>
    );
}
