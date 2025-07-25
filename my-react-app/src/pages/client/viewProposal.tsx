import React, { useState } from "react";

export default function ViewProposal() {
  const [proposals, setProposals] = useState([
    {
      name: "Raj Kothari",
      role: "Full-stack Developer",
      rating: 4.8,
      experience: "2 years",
      projects: 5,
      rate: 900,
      totalCost: 48000,
      duration: 38,
      description:
        "Full-stack developer experienced in building scalable e-commerce and fintech solutions using React and Node.js.",
      coverLetter: `Dear Client,

I am excited to apply for your e-commerce project. With 2 years of experience building scalable web apps using React, Node.js, and MongoDB, I’ve delivered 5 successful projects.

**Approach for your project:**
1. Responsive React UI with optimized performance
2. Node.js backend with JWT authentication
3. MongoDB for fast data operations
4. Razorpay integration for secure payments
5. Admin dashboard with analytics

I can complete this project in 38 days for ₹48,000 with full post-deployment support.

Best regards,  
Raj Kothari`,
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      portfolio: [
        "https://github.com/rajkothari/commerce-app",
        "https://rajkothari.dev/portfolio"
      ],
      submittedDate: "1/22/2024",
      accepted: false
    },
    {
      name: "Sakshi Jadhav",
      role: "Frontend Developer",
      rating: 4.7,
      experience: "1.8 years",
      projects: 4,
      rate: 750,
      totalCost: 42000,
      duration: 36,
      description:
        "Frontend developer skilled in building modern, responsive interfaces using React and Tailwind CSS.",
      coverLetter: `Hi,

I specialize in creating responsive and visually appealing frontends. My expertise in React and Tailwind ensures clean, maintainable code for fast UI delivery.

**Plan for your project:**
- Pixel-perfect responsive React UI
- Reusable components for scalability
- API integration with Node.js backend
- Performance and SEO optimization

I can deliver the frontend in 36 days for ₹42,000.

Thanks,  
Sakshi Jadhav`,
      skills: ["React", "Tailwind CSS", "JavaScript", "Redux"],
      portfolio: [
        "https://github.com/sakshijadhav/react-ui",
        "https://sakshijadhav.dev"
      ],
      submittedDate: "1/21/2024",
      accepted: false
    },
    {
      name: "Prajakta Shende",
      role: "Backend Developer",
      rating: 4.9,
      experience: "3 years",
      projects: 7,
      rate: 1000,
      totalCost: 55000,
      duration: 40,
      description:
        "Backend developer focused on secure APIs and payment integrations using Node.js and MySQL.",
      coverLetter: `Hello,

With 3 years of backend development experience, I can design scalable and secure APIs tailored for e-commerce. My previous projects include payment integrations and complex data workflows.

**Key backend tasks:**
- Node.js with Express for APIs
- MySQL database schema optimization
- Razorpay and Stripe payment gateway
- JWT-based authentication and role management

Delivery timeline: 40 days, cost ₹55,000.

Regards,  
Prajakta Shende`,
      skills: ["Node.js", "Express", "MySQL", "API Security"],
      portfolio: [
        "https://github.com/prajakta-shende/backend-project",
        "https://prajakta.dev"
      ],
      submittedDate: "1/20/2024",
      accepted: false
    }
  ]);

  const handleAccept = (index) => {
    const updated = [...proposals];
    updated[index].accepted = !updated[index].accepted;
    setProposals(updated);
  };

  const handleReject = (index) => {
    const updated = proposals.filter((_, i) => i !== index);
    setProposals(updated);
  };

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      {/* Page Heading with count */}
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">
        View Proposal ({proposals.length})
      </h1>

      {proposals.map((proposal, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl shadow p-6 mb-6 transition hover:shadow-lg ${
            proposal.accepted ? "border-2 border-green-500" : "border"
          }`}
        >
          {/* Top Section */}
          <div className="flex justify-between mb-4">
            <div className="flex gap-3">
              {/* Profile Initials - Safe Check */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                {proposal?.name
                  ? proposal.name
                      .split(" ")
                      .map((n) => n[0] || "")
                      .join("")
                  : ""}
              </div>

              <div>
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  {proposal.name}
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {proposal.role}
                  </span>
                </h2>
                <p className="text-sm text-gray-600">
                  ⭐ {proposal.rating} • {proposal.experience} experience •{" "}
                  {proposal.projects} projects completed • ₹{proposal.rate}/hour
                </p>
                <p className="text-sm text-gray-500">{proposal.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {proposal.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost & Duration */}
            <div className="text-right">
              <h3 className="text-2xl font-bold text-green-600">
                ₹{proposal.totalCost.toLocaleString()}
              </h3>
              <p className="text-sm text-gray-500">{proposal.duration} days</p>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="mb-4">
            <h4 className="font-semibold mb-1">Cover Letter</h4>
            <p className="text-gray-700 whitespace-pre-line text-sm">
              {proposal.coverLetter}
            </p>
          </div>

          {/* Portfolio Links */}
          <div className="mb-4">
            <h4 className="font-semibold mb-1">Portfolio Links</h4>
            <div className="flex flex-col gap-1">
              {proposal.portfolio.map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-xs text-gray-400">
              Submitted {proposal.submittedDate}
            </span>
            <div className="flex gap-2">
              <button className="text-sm border rounded px-3 py-1 hover:bg-gray-100">
                Message
              </button>
              <button
                onClick={() => handleReject(index)}
                className="text-sm border rounded px-3 py-1 hover:bg-gray-100"
              >
                Reject
              </button>
              <button
                onClick={() => handleAccept(index)}
                className="text-sm bg-black text-white rounded px-3 py-1 hover:bg-gray-800"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
