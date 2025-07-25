type Summary = {
    budget: string;
    duration: string;
    deadline: string;
    type: string;
    proposals: number;
};

type ProjectSummaryProps = {
    summary: Summary;
};

export default function ProjectSummary({ summary }: ProjectSummaryProps) {
    return (
        <div className="bg-white p-4 rounded-md border">
            <h2 className="text-md font-semibold mb-3">Project Summary</h2>
            <div className="text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                    <span>Budget</span>
                    <span>{summary.budget}</span>
                </div>
                <div className="flex justify-between">
                    <span>Duration</span>
                    <span>{summary.duration}</span>
                </div>
                <div className="flex justify-between">
                    <span>Deadline</span>
                    <span>{summary.deadline}</span>
                </div>
                <div className="flex justify-between">
                    <span>Project Type</span>
                    <span>{summary.type}</span>
                </div>
                <div className="flex justify-between">
                    <span>Proposals</span>
                    <span>{summary.proposals}</span>
                </div>
            </div>
        </div>
    );
}
