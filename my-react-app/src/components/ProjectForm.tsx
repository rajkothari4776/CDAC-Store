import React from "react";

const ProjectFormBox = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-1">Project Information</h2>
            <p className="text-sm text-gray-500 mb-6">Provide basic details about your project</p>

            <div className="space-y-4">
                {/* Project Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Project Title</label>
                    <input
                        type="text"
                        placeholder="e.g., E-commerce Website for Electronics Store"
                        className="w-full border rounded-md px-4 py-2 text-sm"
                    />
                </div>

                {/* Project Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Project Description</label>
                    <textarea
                        rows={4}
                        placeholder="Describe your project requirements, features, and any specific needs..."
                        className="w-full border rounded-md px-4 py-2 text-sm"
                    />
                </div>

                {/* Category and Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Project Category</label>
                        <select className="w-full border rounded-md px-4 py-2 text-sm">
                            <option>Select project category</option>
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>UI/UX Design</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Project Type</label>
                        <select className="w-full border rounded-md px-4 py-2 text-sm">
                            <option>Select project type</option>
                            <option>Individual</option>
                            <option>Team</option>
                            <option>Freelance</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectFormBox;
