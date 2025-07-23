
// import React from "react"
import {Navbar} from "../components/common/Navbar";
import {Footer} from "@/components/common/Footer.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Briefcase, Code} from "lucide-react";

function Dashboard() {
    return (
        <div className={"min-h-screen bg-gradient-to-b from-blue-50 to-white"}>
            <Navbar/>
            {/*<h1>Hi this </h1>*/}
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
                            <Link to="/signup?type=client">
                                <Briefcase className="mr-2 h-5 w-5" />
                                Hire Programmers
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                            <Link to="/signup?type=programmer">
                                <Code className="mr-2 h-5 w-5" />
                                Find Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Dashboard;