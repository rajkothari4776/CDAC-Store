import React from "react";

const ProposalTipsBox = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Proposal Tips</h3>
            <p className="text-sm font-semibold text-green-600 mb-1">✅ Do:</p>
            <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>Personalize your message</li>
                <li>Highlight relevant experience</li>
                <li>Be specific about your approach</li>
                <li>Include portfolio examples</li>
                <li>Ask clarifying questions</li>
            </ul>
            <p className="text-sm font-semibold text-red-600 mb-1">❌ Don't:</p>
            <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Use generic templates</li>
                <li>Bid too low or too high</li>
                <li>Make unrealistic promises</li>
                <li>Ignore project requirements</li>
            </ul>
        </div>
    );
};

export default ProposalTipsBox;
