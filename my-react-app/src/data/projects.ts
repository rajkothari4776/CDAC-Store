
// types/project.ts
export type Project = {
    id: number
    title: string
    category: string
    companyName: string
    budget: string
    duration: string
    description: string
    skills: string[]
    proposals: number
    postedDate: string
    deadline: string
}


export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Website for Electronics Store",
        category: "E-commerce",
        companyName: "TechCorp Solutions",
        budget: "₹45,000 – ₹65,000",
        duration: "45 days",
        description:
            "Need a complete online store with product catalog, shopping cart, payment gateway integration, and admin panel. The website should be responsive and SEO-friendly.",
        skills: ["React", "Node.js", "MySQL"],
        proposals: 12,
        postedDate: "1/20/2024",
        deadline: "3/15/2024",
    },
    {
        id: 2,
        title: "Mobile App for Restaurant Management",
        category: "Mobile",
        companyName: "DineTech Ltd.",
        budget: "₹35,000 – ₹50,000",
        duration: "30 days",
        description:
            "A mobile app to manage orders, table reservations, and feedback. Should support Android & iOS.",
        skills: ["Flutter", "Firebase"],
        proposals: 8,
        postedDate: "2/10/2024",
        deadline: "3/10/2024",
    },
]