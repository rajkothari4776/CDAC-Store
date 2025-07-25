// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
//import Dashboard from "./pages/Dashboard";

import ManagedSkills from "./pages/programmer/skills";

// import ManagedSkills from "./pages/programmer/skills";
// import { Toaster } from "sonner";
import { Toaster } from "sonner";

// import ManagedSkills from "./pages/programmer/skills.tsx";


//import Registration from "./auth/Registration.tsx";

import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/common/Dashboard";

import SignUp from "@/pages/client/SignUp";

import BrowseProjects from "./pages/programmer/browseProjects";
import BrowseProjectsTest from './pages/programmer/BrowseProjectsTest';
import ProjectDetails from './pages/programmer/ProjectDetails';
import ViewMyProposals from './pages/programmer/ViewMyProposals';


// import {Route, Routes } from 'react-router-dom'

// import ProfilePage from "@/pages/programmer/ProgrammerProfile.tsx";


// import SignUp from "@/pages/SignUp.tsx";
// import ClientSignup form "@/pages/client/Signup";
// import ProgrammerSignup from "@/pages/programmer/SignUp";
import './App.css';
import SubmitProposal from './pages/programmer/SubmitProposal';

// import BrowseProjects from "./pages/programmer/browseProjects";
    

// import Dashboard from "./pages/Dashboard";
// import BrowseProjectsTest from './pages/programmer/BrowseProjectsTest';

// import SignUp from "@/pages/SignUp.tsx";
// import {LogIn} from "lucide-react";


// import Registration from "./auth/Registration.tsx";
// import {Dashboard} from "/pages/Dashboard.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>


      {/*<ProfilePage/>*/}

        {/*<ProfilePage/>*/}
      {/*<Registration/>*/}
      {/*<BrowseProjectsTest/>*/}


      {/*  <ManagedSkills/>*/}

        {/*<SignUp/>*/}
      {/*<BrowseProjects/>*/}


      {/*<BrowseProjects/>*/}
      

    
            {/*<Route*/}
            {/*    path = '/login'*/}
            {/*    element = {<LogIn/>}*/}
            {/*/>*/}




      {/*<Registration/>*/}
      <SubmitProposal/>
      <ProjectDetails/>
      <ViewMyProposals/>
      <BrowseProjectsTest />
      <BrowseProjects />

      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        {/*<Route*/}
        {/*    path = '/login'*/}
        {/*    element = {<LogIn/>}*/}
        {/*/>*/}

        <Route
          path='/manageSkills'
          element={<ManagedSkills />}
        />


      </Routes>

            
        
        <Toaster richColors/>

    </>
  )
}

export default App
