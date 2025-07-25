
const ProjectSummaryBox = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Project Summary</h3>
            <p className="text-sm font-medium">E-commerce Website for Electronics Store</p>
            <p className="text-xs text-gray-500 mb-2">Rajesh Kumar • TechCorp Solutions</p>

            <div className="text-sm mb-2">
                <p><strong>Budget:</strong> ₹45,000 – ₹65,000</p>
                <p><strong>Duration:</strong> 45 days</p>
            </div>

            <div>
                <strong className="text-sm">Required Skills:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                    {["React", "Node.js", "MySQL", "JavaScript"].map((skill) => (
                        <span
                            key={skill}
                            className="bg-gray-100 px-2 py-1 text-xs rounded border"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSummaryBox;
