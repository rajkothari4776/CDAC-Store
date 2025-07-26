import React from "react";

type ProjectStatus = "In Progress" | "Open for Proposals";

interface ProjectCardProps {
  title: string;
  category: string;
  budget: string;
  duration: string;
  proposals: number;
  description: string;
  assignedTo?: string;
  status: ProjectStatus;
  postedDate: string;
  deadline: string;
  showManage?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  budget,
  duration,
  proposals,
  description,
  assignedTo,
  status,
  postedDate,
  deadline,
  showManage = false,
}) => {
  return (
    <div className="border rounded-lg shadow p-4 mb-6 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "In Progress"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-700">
        <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
        <span>₹ {budget}</span>
        <span>{duration}</span>
        <span>{proposals} proposals</span>
      </div>

      <p className="text-gray-600 mt-2">{description}</p>

      {assignedTo && (
        <div className="mt-3 bg-green-100 text-green-800 px-3 py-2 rounded text-sm">
          Assigned to: {assignedTo}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        <p>Posted: {postedDate}</p>
        <p>Deadline: {deadline}</p>
      </div>

      <div className="mt-4 flex gap-3 flex-wrap">
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
          👁 View Details
        </button>
        {showManage ? (
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
            ⚙️ Manage Project
          </button>
        ) : (
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
            📩 View Proposals ({proposals})
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
