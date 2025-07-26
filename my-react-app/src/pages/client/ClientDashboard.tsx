// import { Card, CardContent, CardDescription, CardHeader, CardTitle }
// import { Button } from "../@/components/ui/button"
// import { Badge } from "../@/components/ui/badge"
import { Plus, Briefcase, FileText, Users, TrendingUp, Clock, DollarSign, Eye } from "lucide-react"
import { Link } from "react-router-dom"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";


function ClientDashboard() {
    const stats = {
        postedProjects: 8,
        activeProjects: 3,
        totalProposals: 45,
        totalSpent: 125000,
    }

    const recentProjects = [
        {
            id: 1,
            title: "E-commerce Website for Electronics Store",
            status: "in_progress",
            proposalCount: 12,
            budget: "₹45,000 - ₹65,000",
            assignedTo: "Priya Sharma",
            deadline: "2024-03-15",
        },
        {
            id: 2,
            title: "Mobile App for Restaurant Management",
            status: "open",
            proposalCount: 8,
            budget: "₹80,000 - ₹120,000",
            deadline: "2024-04-01",
        },
        {
            id: 3,
            title: "Inventory Management System",
            status: "completed",
            proposalCount: 15,
            budget: "₹35,000",
            assignedTo: "Rahul Kumar",
            deadline: "2024-01-30",
        },
    ]

    const recentProposals = [
        {
            id: 1,
            projectTitle: "Mobile App for Restaurant Management",
            programmerName: "Amit Singh",
            amount: "₹95,000",
            duration: "60 days",
            submittedAt: "2 hours ago",
        },
        {
            id: 2,
            projectTitle: "Mobile App for Restaurant Management",
            programmerName: "Neha Patel",
            amount: "₹88,000",
            duration: "55 days",
            submittedAt: "5 hours ago",
        },
        {
            id: 3,
            projectTitle: "E-commerce Website for Electronics Store",
            programmerName: "Vikash Gupta",
            amount: "₹58,000",
            duration: "42 days",
            submittedAt: "1 day ago",
        },
    ]
    return (
        <div className={"mx-auto  px-4 py-5 space-y-8"}>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rajesh!</h1>
                    <p className="text-gray-600 mt-1">Manage your projects and find the best talent for your needs.</p>
                </div>
                <Button asChild>
                    <Link to="/client/projects/new">
                        <Plus className="" />
                        Post New Project
                    </Link>
                </Button>
            </div>
            {/* quick Actions*/}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks to manage your projects effectively</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button asChild
                            variant="outline"
                            className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"

                        >
                            <Link to="/client/projects/new">
                                <Plus className="h-6 w-6" />
                                <span>Post Project</span>
                            </Link>
                        </Button>
                        <Button asChild
                            variant="outline"
                            className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"

                        >
                            <Link to="/client/projects">
                                <Briefcase className="h-6 w-6" />
                                <span>View Projects</span>
                            </Link>
                        </Button>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default ClientDashboard;