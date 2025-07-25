import React, { useState } from "react";

function ClientProfile() {
  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Prajwal",
    lastName: "Dinde",
    email: "prajwal@gmail.com",
    phone: "8624268442",
    bio: "Hi, I am Prajwal from CDAC."
  });
  const [backupPersonal, setBackupPersonal] = useState(personalInfo);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);

  // Company Info State
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "CDAC Pune",
    position: "Full Stack Developer",
    industry: "IT Training",
    companySize: "200+ Employees",
    website: "https://www.cdac.in"
  });
  const [backupCompany, setBackupCompany] = useState(companyInfo);
  const [isEditingCompany, setIsEditingCompany] = useState(false);

  // Handlers for Personal Info
   const handlePersonalChange = (field: string, value: string) => {
   setPersonalInfo({ ...personalInfo, [field]: value });
   };
  const savePersonal = () => {
    setBackupPersonal(personalInfo);
    setIsEditingPersonal(false);
  };
  const cancelPersonal = () => {
    setPersonalInfo(backupPersonal);
    setIsEditingPersonal(false);
  };

  // Handlers for Company Info
  const handleCompanyChange = (field: string, value: string) => {
  setCompanyInfo({ ...companyInfo, [field]: value });
  };
  const saveCompany = () => {
    setBackupCompany(companyInfo);
    setIsEditingCompany(false);
  };
  const cancelCompany = () => {
    setCompanyInfo(backupCompany);
    setIsEditingCompany(false);
  };

  return (
    <div className="w-full px-4 py-6 space-y-6">
      {/* PERSONAL INFO */}
      <div className="bg-white border rounded-xl shadow p-6 w-full">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
            <p className="text-gray-500 text-sm">Your personal and contact details</p>
          </div>
          {isEditingPersonal ? (
            <div className="space-x-2">
              <button
                onClick={savePersonal}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={cancelPersonal}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingPersonal(true)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Edit
            </button>
          )}
        </div>

        {/* Avatar */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
            {personalInfo.firstName.charAt(0)}
            {personalInfo.lastName.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p className="text-gray-600 text-sm">{personalInfo.email}</p>
          </div>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={personalInfo.firstName}
              readOnly={!isEditingPersonal}
              onChange={(e) => handlePersonalChange("firstName", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingPersonal
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={personalInfo.lastName}
              readOnly={!isEditingPersonal}
              onChange={(e) => handlePersonalChange("lastName", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingPersonal
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={personalInfo.email}
              readOnly={!isEditingPersonal}
              onChange={(e) => handlePersonalChange("email", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingPersonal
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              value={personalInfo.phone}
              readOnly={!isEditingPersonal}
              onChange={(e) => handlePersonalChange("phone", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingPersonal
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            value={personalInfo.bio}
            readOnly={!isEditingPersonal}
            onChange={(e) => handlePersonalChange("bio", e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none resize-none ${
              isEditingPersonal
                ? "border-blue-400 bg-white text-black"
                : "border-gray-300 bg-gray-50 text-gray-600"
            }`}
            rows={3}
          />
        </div>
      </div>

      {/* COMPANY INFO */}
      <div className="bg-white border rounded-xl shadow p-6 w-full">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Company Information</h2>
            <p className="text-gray-500 text-sm">Your company details and role</p>
          </div>
          {isEditingCompany ? (
            <div className="space-x-2">
              <button
                onClick={saveCompany}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={cancelCompany}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingCompany(true)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Edit
            </button>
          )}
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              value={companyInfo.companyName}
              readOnly={!isEditingCompany}
              onChange={(e) => handleCompanyChange("companyName", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingCompany
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
              type="text"
              value={companyInfo.position}
              readOnly={!isEditingCompany}
              onChange={(e) => handleCompanyChange("position", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingCompany
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <input
              type="text"
              value={companyInfo.industry}
              readOnly={!isEditingCompany}
              onChange={(e) => handleCompanyChange("industry", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingCompany
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
            <input
              type="text"
              value={companyInfo.companySize}
              readOnly={!isEditingCompany}
              onChange={(e) => handleCompanyChange("companySize", e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isEditingCompany
                  ? "border-blue-400 bg-white text-black"
                  : "border-gray-300 bg-gray-50 text-gray-600"
              }`}
            />
          </div>
        </div>

        {/* Website */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
          <input
            type="text"
            value={companyInfo.website}
            readOnly={!isEditingCompany}
            onChange={(e) => handleCompanyChange("website", e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${
              isEditingCompany
                ? "border-blue-400 bg-white text-black"
                : "border-gray-300 bg-gray-50 text-gray-600"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
