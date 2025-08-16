// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
//import Dashboard from "./pages/Dashboard";
// import ManagedSkills from "./pages/programmer/skills";
// import { Toaster } from "sonner";
//import ManagedSkills from "./pages/programmer/skills";
//import { Toaster } from "sonner"

// import ManagedSkills from "./pages/programmer/skills.tsx";

import './App.css'
//import Registration from "./auth/Registration.tsx";


import { Navigate, Route, Routes } from 'react-router-dom';
//import Dashboard from "./pages/Dashboard";

//import SignUp from "@/pages/SignUp.tsx";

// import BrowseProjects from "./pages/programmer/browseProjects";
// import BrowseProjectsTest from './pages/programmer/BrowseProjectsTest';
// import ProjectDetails from './pages/programmer/ProjectDetails';
// import ViewMyProposals from './pages/programmer/ViewMyProposals';


//import Dashboard from "./pages/common/Dashboard.tsx";
// import {Route, Routes } from 'react-router-dom'

//import SignUp from "@/pages/programmer/SignUp.tsx";

import Dashboard from "./pages/common/Dashboard.tsx";
// import {Route, Routes } from 'react-router-dom'

// import SignUp from "@/pages/programmer/SignUp.tsx";
// import ProfilePage from "@/pages/programmer/ProgrammerProfile.tsx";


// import SignUp from "@/pages/SignUp.tsx";
// import ClientSignup form "@/pages/client/Signup";
// import ProgrammerSignup from "@/pages/programmer/SignUp";
//import { Route, Routes } from 'react-router-dom';
import './App.css';
import CLientSignUp from "@/auth/client/SignUp.tsx";
import ProgrammerSignup from "@/auth/programmer/SignUp.tsx";
// import ClientDashboard from "@/pages/client/ClientDashboard.tsx";
import Login from "@/auth/Login.tsx";
import BrowseProjectsTest from './pages/programmer/BrowseProjectsTest.tsx';
import ProfilePage from './pages/programmer/ProgrammerProfile.tsx';
import ProjectDetails from './pages/programmer/ProjectDetails.tsx';
import ViewMyProposals from './pages/programmer/ViewMyProposals.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import BrowseProjects from "./pages/programmer/browseProjects";
    

// import Dashboard from "./pages/Dashboard";

//import BrowseProjects from "./pages/programmer/browseProjects";
// import ClientDashboard from './pages/client/MyProjects.tsx';
// import Dashboard from './pages/common/Dashboard.tsx';
// import SignUp from './pages/programmer/SignUp.tsx';
// import ProjectsPage from './pages/client/ProjectPageForClient.tsx';
import ManageSkills from './pages/programmer/skills.tsx';
import ClientProfile from './pages/client/clientProfile.tsx';
import ClientDashboard from './pages/client/ClientDashboard.tsx';
import PostProjectForm from './pages/client/PostProject.tsx';
import ProjectsPage from './pages/client/ProjectPageForClient.tsx';
import ProgrammerDashboard from './pages/programmer/Dashboard.tsx';
import MyProjects from './pages/client/MyProjects.tsx';
import {useState } from 'react';
import type { AuthResponse } from './types/AuthResponse.ts';
import { AuthContext } from './contexts/auth.context.ts';
import ClientHome from './pages/ClientHome.tsx';
import ProgrammerHome from './ProgrammerHome.tsx';
// import {myProjects} from './pages/client/MyProjects.tsx'
// import BrowseProjects from "./pages/programmer/browseProjects";

// import BrowseProjectsTest from './pages/programmer/BrowseProjectsTest';
// import SignUp from "@/pages/SignUp.tsx";
// import {LogIn} from "lucide-react";


// import Registration from "./auth/Registration.tsx";
// import {Dashboard} from "/pages/Dashboard.tsx";

function App() {
  // const [count, setCount] = useState(0)
  const [user, setUser] = useState<AuthResponse | null>(null);

  return (
    <>

      
        <AuthContext.Provider value={{user, setUser}}>
            <Routes>
            <Route
            path = '/'
            element = {<Dashboard/>}
            />
            <Route
                path = 'client-signup'
                element = {<CLientSignUp/>}
            />
            <Route
                path = 'programmer-signup'
                element = {<ProgrammerSignup/>}
            />

            //Client Routes
            <Route path='client' element ={user?.userRole === "ROLE_CLIENT" ? <ClientHome/> : <Navigate to="/signin"/>} >
                <Route
                    path = 'dashboard'
                    element = {<ClientDashboard/>}
                />
                <Route
                    path = 'my-projects'
                    element = {<MyProjects/>}
                />
                <Route
                    path = 'project-page'
                    element = {<ProjectsPage/>}
                />
                <Route
                    path = 'profile'
                    element = {<ClientProfile/>}
                />
            </Route>

            //Programmer Routes
            <Route path='programmer' element ={user?.userRole === "ROLE_PROGRAMMER" ? <ProgrammerHome/> : <Navigate to="signin"/>} >
            </Route>

            <Route
                path = 'signin'
                element = {<Login/>}
            />
            <Route
                path = '/browse-projects'
                element = {<BrowseProjectsTest/>}
            />
            <Route
                path = '/programmer-profile'
                element = {<ProfilePage/>}
            />            
            <Route
                path = '/project-details'
                element = {<ProjectDetails/>}
            />  
            <Route
                path = '/skills'
                element = {<ManageSkills/>}
            />
            <Route
                path = '/view-proposals'
                element = {<ViewMyProposals/>}
            />
            <Route
                path = '/client-profile'
                element = {<ClientProfile/>}
            />

             {/* <Route
                path = 'client-dashboard'
                element = {<ClientDashboard/>}
            /> */}

            <Route
                path = '/client-project'
                element = {<MyProjects/>}
            />

            

            {/* <Route
                path = '/post-projects'
                element = {<PostProjectForm/>}
            /> */}

            <Route
                path = '/post-projects'
                element = {<PostProjectForm/>}
            />

            <Route
                path = '/projectPage'
                element = {<ProjectsPage/>}
            />

            <Route
                path = 'programmer-dashboard'
                element = {<ProgrammerDashboard/>}
            />
            
            


              

        </Routes>
        </AuthContext.Provider>
        {/* <Toaster richColors/> */}
        <ToastContainer />

    </>
  )
}

export default App
