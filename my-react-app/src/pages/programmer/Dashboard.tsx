import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/"
import { User, Briefcase, FileText, Clock, DollarSign, Search, Plus } from "lucide-react"
import {Link} from "react-router-dom"
// import { ProgrammerLayout } from "../@/components/programmer/programmer-layout"

export default function ProgrammerDashboard() {
  const stats = {
    totalProposals: 12,
    activeProjects: 2,
    profileCompletion: 85,
    totalEarnings: 45000,
  }

  const recentActivities = [
    {
      id: 1,
      type: "proposal",
      title: "Submitted proposal for E-commerce Website",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      type: "project",
      title: "Started working on Mobile App Development",
      time: "1 day ago",
      status: "active",
    },
    {
      id: 3,
      type: "proposal",
      title: "Proposal accepted for Restaurant Management System",
      time: "3 days ago",
      status: "accepted",
    },
  ]

  const activeProjects = [
    {
      id: 1,
      title: "E-commerce Website for Electronics Store",
      client: "TechCorp Solutions",
      budget: 52000,
      deadline: "2024-03-15",
      progress: 65,
    },
    {
      id: 2,
      title: "Restaurant Management System",
      client: "FoodTech Ltd",
      budget: 38000,
      deadline: "2024-02-28",
      progress: 30,
    },
  ]

  return (
    
      <div className="space-y-8 p-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Raj!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
          </div>
          <Button asChild >
            <Link to="/post-">
              <Search className="mr-2 h-4 w-4" />
              Browse Projects
            </Link>
          </Button>
        </div>

        Stats Cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Proposals</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProposals}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProjects}</div>
              <p className="text-xs text-muted-foreground">Currently working on</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.profileCompletion}%</div>
              {/* <Progress value={stats.profileCompletion} className="mt-2" /> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+₹12,000 this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to help you get more projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
                
              >
                <Link to="/skills">
                  <Plus className="h-6 w-6" />
                  <span>Update Skills</span>
                </Link>
              </Button>
              <Button asChild
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
                
              >
                <Link to="/browse-projects">
                  <Search className="h-6 w-6" />
                  <span>Browse Projects</span>
                </Link>
              </Button>
              
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Projects you're currently working on</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeProjects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.client}</p>
                    </div>
                    <Badge variant="secondary">₹{project.budget.toLocaleString()}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    {/* <Progress value={project.progress} /> */}
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Due: {new Date(project.deadline).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {activity.type === "proposal" ? (
                      <FileText className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Briefcase className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <Badge
                    variant={
                      activity.status === "accepted"
                        ? "default"
                        : activity.status === "active"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
