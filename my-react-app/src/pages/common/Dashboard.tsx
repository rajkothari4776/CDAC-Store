
// import React from "react"
import {Navbar} from "../../components/common/Navbar.tsx";
import {Footer} from "@/components/common/Footer.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Briefcase, CheckCircle, Code, Star, Users} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

function Dashboard() {
    return (
        <div className={"min-h-screen bg-gradient-to-b from-blue-50 to-white"}>
            <Navbar/>
            {/*upper portion*/}
            <section className="container mx-auto px-4 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    <Badge variant="secondary" className="mb-4">
                        India's Premier Freelance Marketplace
                    </Badge>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Connect with Top <span className="text-blue-600">CDAC Programmers</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Find skilled developers for your projects or discover exciting opportunities as a programmer. Join thousands
                        of successful collaborations on CDAC Store.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8" asChild>
                            <Link to="/client-signup">
                                <Briefcase className="mr-2 h-5 w-5" />
                                Hire Programmers
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                            <Link to="/programmer-signup">
                                <Code className="mr-2 h-5 w-5" />
                                Find Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            {/*why choose CDAC store*/}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CDAC Store?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We connect businesses with certified CDAC programmers for quality results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardHeader>
                                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <CardTitle className={"text-2xl"}>Verified CDAC Talent</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    All programmers are verified CDAC students and graduates with proven skills
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <CardTitle className={"text-2xl"}>Quality Assurance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Skill-based matching ensures you get programmers with the right expertise
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                                <CardTitle className={"text-2xl"}>Trusted Platform</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Secure payments, transparent communication, and reliable project delivery
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                    </div>

                    <div className=" flex justify-around">
                        {/* For Clients */}
                        <div className={""}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-left">For Clients</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Post Your Project</h4>
                                        <p className="text-gray-600">Describe your project requirements and select needed technologies</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Review Proposals</h4>
                                        <p className="text-gray-600">Get proposals from qualified programmers with matching skills</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Hire & Collaborate</h4>
                                        <p className="text-gray-600">Choose the best programmer and start your project</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* For Programmers */}
                        <div className={""}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-left">For Programmers</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Create Your Profile</h4>
                                        <p className="text-gray-600">Showcase your skills, experience, and portfolio</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Browse Projects</h4>
                                        <p className="text-gray-600">Find projects that match your skills and interests</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Submit Proposals</h4>
                                        <p className="text-gray-600">Send compelling proposals and start earning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
export default Dashboard;