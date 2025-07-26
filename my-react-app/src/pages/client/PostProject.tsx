import React, { useState } from "react";

const PostProjectForm: React.FC = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-gray-800">Client Dashboard</h1>

      {/* Page Title */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Post New Project</h2>
        <p className="text-gray-600 mt-1">
          Create a detailed project posting to attract the best programmers.
        </p>
      </div>

      {/* Project Information */}
      <div className="border rounded-lg p-6 space-y-6 shadow-sm">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Project Information</h3>
          <p className="text-gray-500 text-sm">
            Provide basic details about your project
          </p>
        </div>

        {/* Project Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Project Title
          </label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="e.g., E-commerce Website for Electronics Store"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Project Description
          </label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            rows={5}
            placeholder="Describe your project requirements, features, and any specific needs..."
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Category & Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Project Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select project category</option>
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="desktop-app">Desktop App</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Project Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select project type</option>
              <option value="hourly">Hourly Rate</option>
              <option value="fixed">Fixed Rate</option>
            </select>
          </div>
        </div>
      </div>

      {/* Budget & Timeline Section */}
      <div className="border rounded-lg p-6 space-y-6 shadow-sm">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Budget & Timeline</h3>
          <p className="text-gray-500 text-sm">
            Set your budget range and project timeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Minimum Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Minimum Budget (₹)
            </label>
            <input
              type="number"
              value={minBudget}
              onChange={(e) => setMinBudget(e.target.value)}
              placeholder="e.g., 45000"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Maximum Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Maximum Budget (₹)
            </label>
            <input
              type="number"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              placeholder="e.g., 65000"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Estimated Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Estimated Duration (days)
            </label>
            <input
              type="number"
              value={estimatedDuration}
              onChange={(e) => setEstimatedDuration(e.target.value)}
              placeholder="e.g., 45"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Project Deadline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Project Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      {/* Required Technologies */}
<div className="border rounded-lg p-6 space-y-6 shadow-sm">
  <div>
    <h3 className="text-2xl font-bold text-gray-800">Required Technologies</h3>
    <p className="text-gray-500 text-sm">
      Specify the technologies and skill levels needed for this project
    </p>
  </div>

  <div>
    <p className="font-semibold text-black text-sm">Add Required Technologies</p>

    <label className="block mt-4 text-sm font-semibold text-gray-700 mb-1">
      Select Technology Category
    </label>
    <select
      className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Choose a technology category</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="database">Database</option>
      <option value="devops">DevOps</option>
    </select>
  </div>

  {/* Action buttons */}
  <div className="flex justify-end space-x-4 pt-4">
    <button className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100">
      Cancel
    </button>
    <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900">
      Post Project
    </button>
  </div>
</div>

    </div>
  );
};

export default PostProjectForm;
