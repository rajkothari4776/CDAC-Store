import React from "react";

const ProposalFormBox = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-1">Submit Your Proposal</h2>
            <p className="text-sm text-gray-500 mb-6">Create a compelling proposal to win this project</p>

            {/* Amount and Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Proposed Amount (₹)</label>
                    <input
                        type="number"
                        placeholder="52000"
                        className="w-full border rounded-md px-4 py-2 text-sm"
                    />
                    <p className="text-xs text-gray-400 mt-1">Client budget: ₹45,000 – ₹65,000</p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Estimated Duration (days)</label>
                    <input
                        type="number"
                        placeholder="40"
                        className="w-full border rounded-md px-4 py-2 text-sm"
                    />
                    <p className="text-xs text-gray-400 mt-1">Client estimate: 45 days</p>
                </div>
            </div>

            {/* Cover Letter */}
            <div className="mt-6">
                <label className="block text-sm font-medium mb-1">Cover Letter</label>
                <textarea
                    required
                    rows={6}
                    className="w-full border rounded-md px-4 py-2 text-sm"
                    placeholder="Write a personalized message explaining why you're the best fit for this project"
                ></textarea>
            </div>

            {/* Portfolio Links */}
            <div className="mt-6">
                <label className="block text-sm font-medium mb-1">Portfolio Links (Optional)</label>
                <textarea
                    rows={2}
                    className="w-full border rounded-md px-4 py-2 text-sm"
                    placeholder="Share links to relevant projects, GitHub repos, or live demos (one per line)"
                ></textarea>
            </div>
        </div>
    );
};

export default ProposalFormBox;
