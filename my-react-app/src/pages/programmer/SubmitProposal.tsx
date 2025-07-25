import ProjectSummaryBox from "@/components/ProjectSummaryBox";
import ProposalFormBox from "@/components/ProposalFormBox";
import ProposalTipsBox from "@/components/ProposalTipsBox";
import BackButton from "@/components/ui/backButton";

const SubmitProposal = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-10">
            <BackButton />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Form */}
                <div className="lg:col-span-2 space-y-4">
                    <ProposalFormBox />
                    <div className="flex justify-end gap-3">
                        <button className="px-4 py-2 text-sm border rounded">Cancel</button>
                        <button className="px-4 py-2 text-sm bg-black text-white rounded">
                            Submit Proposal
                        </button>
                    </div>
                </div>

                {/* Right: Summary + Tips */}
                <div className="space-y-4">
                    <ProjectSummaryBox />
                    <ProposalTipsBox />
                </div>
            </div>
        </div>
    );
};

export default SubmitProposal;
