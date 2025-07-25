import { Eye, Send } from "lucide-react";
import React from "react";
import { type Project } from "../data/Projects"; // adjust path based on your project

interface Props {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto border mb-4 mt-4">
            {/* Title & Company */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        {project.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        {project.companyName}
                    </p>
                </div>
                <div className="text-right text-gray-600 text-sm">
                    {project.budget} • {project.duration}
                </div>
            </div>

            {/* Category Tag */}
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mt-3" >
                {project.category}
            </span>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-700" > {project.description} </p>

            {/* Skills */}
            <div className="mt-4" >
                <h4 className="font-medium text-sm text-gray-700 mb-2" >
                    Required Skills:
                </h4>
                < div className="flex gap-2 flex-wrap" >
                    {
                        project.skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                            >
                                {skill}
                            </span>
                        ))
                    }
                <div/>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center text-sm text-gray-600" >
                <span>
                    {project.proposals} proposals
                    Posted {project.postedDate}
                    Deadline: {project.deadline}
                </span>
                < div className="flex gap-2" >
                    <button className="flex items-center gap-1 border px-3 py-1 rounded text-sm hover:bg-gray-100" >
                        <Eye className="w-4 h-4" />
                        View Details
                    </button>
                    < button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded hover:bg-gray-800" >
                        <Send className="w-4 h-4" />
                        Submit Proposal
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProjectCard;