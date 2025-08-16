import React, {useContext, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { Code2 } from "lucide-react"
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import { loginUser } from "../services/user";
import { toast } from "react-toastify";
import { AuthContext, type AuthContextType } from '@/contexts/auth.context';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [userType, setUserType] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const { setUser } = useContext(AuthContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!email || !password) {
            toast.error("Please fill in all fields")
            return
        }

        setIsLoading(true)
        
        try {
            const response = await loginUser(email, password )
            
            // Store the JWT token in localStorage
            // localStorage.setItem('token', response.token)
            // localStorage.setItem('userType', userType)
            
            console.log("this is response "+ response);
            toast.success("Login successful!")
            
            // Navigate to appropriate dashboard based on user type
            if(response != null) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('userType', response.userRole);
                localStorage.setItem('email', response.email);
                localStorage.setItem('firstName', response.firstName);
                localStorage.setItem('lastName', response.lastName);
                setUser(response);
                if (response.userRole === "ROLE_CLIENT") {
                    navigate("/client/dashboard");
                } else if (response.userRole === "ROLE_PROGRAMMER") {
                    navigate("/programmer/dashboard");
                } else {
                    toast.error("Invalid user type selected");
                }
            }
            
        } catch (error: unknown) {
            console.error('Login error:', error)
            
            if (error && typeof error === 'object' && 'response' in error) {
                const axiosError = error as { response?: { status: number } }
                if (axiosError.response?.status === 401) {
                    toast.error("Invalid email or password")
                } else if (axiosError.response?.status === 404) {
                    toast.error("User not found")
                } else {
                    toast.error("Login failed. Please try again.")
                }
            } else {
                toast.error("Login failed. Please try again.")
            }
        }
    }
    return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <Code2 className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">CDAC Store</span>
                </div>
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* <div className="space-y-2">
                        <Label htmlFor="userType">I am a</Label>
                        <Select value={userType} onValueChange={setUserType} required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="client">Client (Hire Programmers)</SelectItem>
                                <SelectItem value="programmer">Programmer (Find Projects)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> */}

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}

export default Login


