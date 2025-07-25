// import React from "react"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
// import * as React from "react"
import { Button } from "@/components/ui/button.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import {Code2} from "lucide-react";
import {Label} from "@radix-ui/react-label";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"
import {Textarea} from "@/components/ui/textarea.tsx";
// import { Label } from "@/components/ui/label";
// import {Toaster} from "sonner";


function SignUp(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")

    // Client fields
    // const [companyName, setCompanyName] = useState("")
    // const [companySize, setCompanySize] = useState("")
    // const [industry, setIndustry] = useState("")
    // const [city, setCity] = useState("")
    // const [description, setDescription] = useState("")
    const navigate= useNavigate();

    //programmer fields
    const [isCdacStudent, setIsCdacStudent] = useState(false)
    const [experienceYears, setExperienceYears] = useState("")
    const [hourlyRate, setHourlyRate] = useState("")
    const [bio, setBio] = useState("")
    const [githubUrl, setGithubUrl] = useState("")

    const onBack = ():void => {
        navigate(-1);
    }
    return (
        <div className={"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"}>
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Code2 className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">CDAC Store</span>
                    </div>
                    <CardTitle className="text-2xl">Create Programmer Account</CardTitle>
                    <CardDescription>Join thousands of successful collaborations</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input className={"mt-2"} id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input className={"mt-2"} id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </div>
                        </div>

                        <div className="space-y-2 mt-5">
                            <Label htmlFor="email">Email</Label>
                            <Input className={"mt-2"} id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    className={"mt-2"}
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    className={"mt-2"}
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2 mt-5">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input className={"mt-2"} id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>

                        <div className="flex items-center space-x-2 mt-5">
                            <Checkbox
                                id="isCdacStudent"
                                checked={isCdacStudent}
                                onCheckedChange={(checked) => setIsCdacStudent(checked as boolean)}
                            />
                            <Label htmlFor="isCdacStudent">I am a CDAC student</Label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                            <div className="space-y-2">
                                <Label htmlFor="experienceYears">Experience (Years)</Label>
                                <Input
                                    id="experienceYears"
                                    type="number"
                                    step="0.5"
                                    min="0"
                                    value={experienceYears}
                                    onChange={(e) => setExperienceYears(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="hourlyRate">Hourly Rate (₹)</Label>
                                <Input
                                    id="hourlyRate"
                                    type="number"
                                    min="0"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mt-5">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Tell us about your skills and experience..."
                                required
                            />
                        </div>

                        <div className="space-y-2 mt-5">
                            <Label htmlFor="githubUrl">GitHub URL (Optional)</Label>
                            <Input
                                id="githubUrl"
                                type="url"
                                value={githubUrl}
                                onChange={(e) => setGithubUrl(e.target.value)}
                                placeholder="https://github.com/yourusername"
                            />
                        </div>


                        <Button type="submit" className="w-full mt-7" >
                            Create Account
                        </Button>
                    </form>
                    <div className="text-center mt-5">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
export default SignUp;