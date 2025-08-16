import { Code2 } from "lucide-react"
import {Link} from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Code2 className="h-8 w-8 text-blue-400" />
                            <span className="text-2xl font-bold">CDAC Store</span>
                        </div>
                        <p className="text-gray-400">
                            Connecting businesses with skilled CDAC programmers for quality software solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">For Clients</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/post-project" className="hover:text-white">
                                    Post a Project
                                </Link>
                            </li>
                            <li>
                                <Link to="/find-talent" className="hover:text-white">
                                    Find Talent
                                </Link>
                            </li>
                            <li>
                                <Link to="/how-it-works" className="hover:text-white">
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">For Programmers</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/browse-projects" className="hover:text-white">
                                    Browse Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/create-profile" className="hover:text-white">
                                    Create Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/success-stories" className="hover:text-white">
                                    Success Stories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/help" className="hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 CDAC Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
