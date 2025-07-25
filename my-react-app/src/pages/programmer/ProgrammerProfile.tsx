
// import React, { useState } from "react";
import React, { useState } from "react";

function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);



    const [profile, setProfile] = useState({
        firstName: "Priya",
        lastName: "Sharma",
        email: "priya@cdac.in",
        phone: "+91-8765432109",
        bio: "CDAC student specializing in full-stack web development with experience in React, Node.js, and modern web technologies. Passionate about creating efficient and user-friendly applications.",
        experience: "1.5",
        HourlyRate: "5000",
        GitHubURL: "https://github.com/priyasharma",
        PortfolioURL: "https://priyasharma.dev",

        availabilityStatus: true,


    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };
    const handleToggleAvailability = () => {
        setProfile(prev => ({
            ...prev,
            availabilityStatus: !prev.availabilityStatus,
        }));
    };

    return (
        <div className="min-h-screen text-black font-sans  bg-gray-100">
            {/* Header */}
            <header className="flex items-center justify-between p-7  border-gray-300 bg-gray-100">
                 <div>
        <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage your profile information and settings.
        </p>
      </div>
                <button
                    onClick={() => setIsEditing(prev => !prev)}
                    className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
                >
                    {isEditing ? "💾 Save" : "✏️ Edit Profile"}
                </button>
            </header>

            {/* Content */}
            <main className="p-6 max-w-4xl mx-auto ">
                <section className="bg-white rounded-2xl shadow-lg  p-6   ">
                    <h3 className="text-3xl font-bold   text-gray-800">Basic Information</h3>
                    <p className="text-gray-600 mb-6">Your personal and contact details</p>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gray-300 text-black rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                            PS
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-900">{profile.firstName} {profile.lastName}</h4>
                            <p className="text-sm text-gray-700">{profile.email}</p>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={profile.phone}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block mb-1 text-sm text-gray-700">Bio</label>
                            <textarea
                                name="bio"
                                disabled={!isEditing}
                                value={profile.bio}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black min-h-[100px]"
                            ></textarea>
                        </div>
                    </div>
                </section>
                <section className="bg-white rounded-2xl shadow-lg p-6 mt-8">

                    <h3 className="text-3xl font-bold text-gray-800">Professional Information</h3>
                    <p className="text-gray-600 mb-6">Your experience and rates</p>



                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Experience (Years)</label>
                            <input
                                type="number"
                                name="experience"
                                value={profile.experience}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Hourly Rate</label>
                            <input
                                type="number"
                                name="Hourly Rate"
                                value={profile.HourlyRate}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">GitHub URL</label>
                            <input
                                type="text"
                                name="GitHub URL"
                                value={profile.GitHubURL}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Portfolio URL</label>
                            <input
                                type="text"
                                name="portfolioURL"
                                value={profile.PortfolioURL}
                                disabled={!isEditing}
                                onChange={handleChange}
                                className="w-full p-2 bg-white border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div className="w-full max-w-md border border-gray-200 rounded-lg p-4 bg-white">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">Availability Status</h3>
                                <p className="text-sm text-gray-500">Available for new projects</p>
                            </div>

                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={profile.availabilityStatus}
                                    onChange={handleToggleAvailability} // <-- define this function
                                    disabled={!isEditing}
                                />

                            </label>
                        </div>



                    </div>



                </section>
                <section className="bg-white rounded-2xl shadow-lg p-6 mt-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">Skills</h3>
                            <p className="text-gray-600 text-sm">Your technical skills and proficiency levels</p>
                        </div>
                        <button
                            className="border border-gray-300 px-4 py-1.5 text-sm rounded-md hover:bg-gray-100"
                            disabled={!isEditing}
                        >
                            Manage Skills
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { skill: "JavaScript", level: "Advanced" },
                            { skill: "React", level: "Advanced" },
                            { skill: "Node.js", level: "Intermediate" },
                            { skill: "MySQL", level: "Intermediate" },
                            { skill: "HTML/CSS", level: "Advanced" },
                            { skill: "Git", level: "Intermediate" },
                        ].map(({ skill, level }) => (
                            <div
                                key={skill}
                                className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg"
                            >
                                <span className="text-gray-800 font-medium">{skill}</span>
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full ${level === "Advanced"
                                            ? "bg-black text-white"
                                            : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {level}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>

    );
}

export default ProfilePage;
