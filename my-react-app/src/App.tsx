// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
//import Dashboard from "./pages/Dashboard";
// import ManagedSkills from "./pages/programmer/skills";
import { Toaster } from "sonner"

import ManagedSkills from "./pages/programmer/Skills";

import './App.css'
//import Registration from "./auth/Registration.tsx";

import Dashboard from "./pages/Dashboard";
import {Route, Routes } from 'react-router-dom'

import SignUp from "@/pages/client/SignUp.tsx";
// import ProfilePage from "@/pages/programmer/ProgrammerProfile.tsx";


import SignUp from "@/pages/SignUp.tsx";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard";
import BrowseProjects from "./pages/programmer/BrowseProjects";
import BrowseProjectsTest from './pages/programmer/BrowseProjectsTest';
// import SignUp from "@/pages/SignUp.tsx";
// import {LogIn} from "lucide-react";

// import Registration from "./auth/Registration.tsx";
// import {Dashboard} from "/pages/Dashboard.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

        {/*<ProfilePage/>*/}
      {/*<Registration/>*/}
      <BrowseProjectsTest/>


      {/*  <ManagedSkills/>*/}

      <BrowseProjects/>
      
        <Routes>
            <Route
            path = '/'
            element = {<Dashboard/>}
            />
            <Route
                path = '/signup'
                element = {<SignUp/>}
            />
            {/*<Route*/}
            {/*    path = '/login'*/}
            {/*    element = {<LogIn/>}*/}
            {/*/>*/}

            <Route
            path='/manageSkills' 
            element={<ManagedSkills/>} 
            />

            
        </Routes>
        <Toaster richColors/>
    </>
  )
}

export default App
