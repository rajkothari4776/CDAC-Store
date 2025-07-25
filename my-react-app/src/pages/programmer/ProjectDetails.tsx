import ClientInfo from "@/components/ClientInfo";
import ProjectActivity from "@/components/ProjectActivity";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectSummary from "@/components/ProjectSummary";
import RequiredSkills from "@/components/RequiredSkills";
import { useNavigate } from 'react-router-dom';


export default function ProjectDetails() {
    const navigate = useNavigate();
    const project = {
        title: "E-commerce Website for Electronics Store",
        description: "...",
        postedDate: "1/20/2024",
        tags: ["E-commerce", "Open"],
        keyRequirements: [/* array of bullet points */],
        technicalSpecs: [/* array of specs */],
        deliverables: [/* array of deliverables */],
        skills: [
            { name: "React", level: "Advanced" },
            { name: "Node.js", level: "Intermediate" },
            { name: "MySQL", level: "Intermediate" },
            { name: "JavaScript", level: "Advanced" },
        ] as const,
        summary: {
            budget: "₹45,000 - ₹65,000",
            duration: "45 days",
            deadline: "3/15/2024",
            type: "Fixed Price",
            proposals: 12,
        },
        client: {
            name: "Rajesh Kumar",
            company: "TechCorp Solutions",
            location: "Mumbai",
            industry: "Software",
            rating: 4.8,
            posted: 12,
            since: "2022",
        },
        activity: {
            submitted: 12,
            lastActive: "2 hours ago",
            avgTime: "3 days",
        }
    };

    return (
        <div>
            <div className=" mt-14 ml-12">
                <button
                    onClick={() => navigate('/projects')}
                    className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
                >
                    ← Back to Projects
                </button>
            </div>
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
            {/* Back Button */}
           
            <div className="md:col-span-2 space-y-6">
                <ProjectOverview project={project} />
                <RequiredSkills skills={project.skills} />
            </div>
            <div className="space-y-6">
                <ProjectSummary summary={project.summary} />
                <ClientInfo client={project.client} />
                <button className="w-full bg-black text-white py-2 rounded-md">Submit Proposal</button>
                <button className="w-full border py-2 rounded-md">Save Project</button>
                <ProjectActivity activity={project.activity} />
            </div>
        </div>
        </div>
    );
}
