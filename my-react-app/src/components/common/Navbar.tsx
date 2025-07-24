import React from "react"
import {Link} from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Navbar() {
    return (
        <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <Code2 className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">CDAC Store</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/browse-projects" className="text-gray-600 hover:text-gray-900">
                            Browse Projects
                        </Link>
                        <Link to="/find-talent" className="text-gray-600 hover:text-gray-900">
                            Find Talent
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" asChild>
                            <Link to="/login">Sign In</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}