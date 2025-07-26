

import { type Project } from "@/data/projects"; // adjust path if needed
import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import ProjectsPage from "./ProjectPageForClient";
//import ProjectCard from './../../components/ProjectCard';

const ClientDashboard: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const stats = {
    total: 4,
    open: 2,
    inProgress: 1,
    completed: 1,
  };


  return (
    <div className="min-h-screen bg-white p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Client Dashboard</h1>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
          <span className="text-lg font-bold">+</span> Post New Project
        </button>
      </div>

      {/* My Projects */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
        <p className="text-gray-600 mt-1">
          Manage all your posted projects and track their progress.
        </p>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Total Projects</p>
          <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Open</p>
          <p className="text-3xl font-bold text-blue-600">{stats.open}</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 text-sm">In Progress</p>
          <p className="text-3xl font-bold text-orange-500">{stats.inProgress}</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Completed</p>
          <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
        </div>
      </div>

      {/* Filter Projects */}
      <div className="border rounded-lg p-6 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Filter Projects</h3>
        <div className="w-full sm:w-64">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All statuses</option>
            <option value="open">Open</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      
      <ProjectsPage />


    </div>
  );
};

export default ClientDashboard;
