// import { Card, CardContent, CardDescription, CardHeader, CardTitle }
// import { Button } from "../@/components/ui/button"
// import { Badge } from "../@/components/ui/badge"
import { Plus, Briefcase, FileText, Users, TrendingUp, Clock, DollarSign, Eye } from "lucide-react"
import { Link } from "react-router-dom"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge";
import { getAllProposal } from "@/services/proposal";
import type { Proposal } from "@/types/Proposal";
import { useEffect, useState } from "react";


function ClientDashboard() {
    const[proposals, setProposals] = useState<Proposal[]>([]);
    

    

    

    const getRecentProposals = async () => {
        const proposals: Proposal[] | null = await getAllProposal();
        if (proposals) {
            // Filter or process proposals as needed
            setProposals(proposals);
            console.log(proposals);
        }
    }

    useEffect(() => {
        getRecentProposals();
    }, []);


    return (
        <div className={"mx-auto  px-5 py-5 space-y-8"}>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rajesh!</h1>
                    <p className="text-gray-600 mt-1">Manage your projects and find the best talent for your needs.</p>
                </div>
                <Button asChild>
                    <Link to="/post-projects">
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
                            <Link to="/post-projects">
                                <Plus className="h-6 w-6" />
                                <span>Post Project</span>
                            </Link>
                        </Button>
                        <Button asChild
                            variant="outline"
                            className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"

                        >
                            <Link to="/client-project">
                                <Briefcase className="h-6 w-6" />
                                <span>View Projects</span>
                            </Link>
                        </Button>

                    </div>
                </CardContent>
            </Card>
            <Card>
            <CardHeader>
              <CardTitle>Recent Proposals</CardTitle>
              <CardDescription>Latest proposals received on your projects</CardDescription>
            </CardHeader>
            {/* <CardContent className="space-y-4">
              {recentProposals.map((proposal) => (
                <div key={proposal.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{proposal.projectTitle}</h4>
                      <p className="text-sm text-gray-600">by {proposal.programmerName}</p>
                    </div>
                    <Badge variant="outline">{proposal.amount}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{proposal.duration}</span>
                    <span>{proposal.submittedAt}</span>
                  </div>
                </div>
              ))}
            </CardContent> */}
            <CardContent className="space-y-4">
              {proposals.map((proposal) => (
                <div key={proposal.proposalId} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{proposal.project.title}</h4>
                      <p className="text-sm text-gray-600">by {proposal.programmer.user.firstName + " " + proposal.programmer.user.lastName}</p>
                    </div>
                    <Badge variant="outline">{proposal.proposedAmount} Rs</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{proposal.proposedDurationDays} days</span>
                    {/* <span>{proposal.}</span> */}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
    )
}
export default ClientDashboard;