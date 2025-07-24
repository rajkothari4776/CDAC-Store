// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
//import Dashboard from "./pages/Dashboard";
import ManagedSkills from "./pages/programmer/skills";

import './App.css'
import Dashboard from "./pages/Dashboard";
import {Route, Routes } from 'react-router-dom'
import SignUp from "@/pages/SignUp.tsx";
// import SignUp from "@/pages/SignUp.tsx";
// import {LogIn} from "lucide-react";

// import Registration from "./auth/Registration.tsx";
// import {Dashboard} from "/pages/Dashboard.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/*<Registration/>*/}
        <ManagedSkills/>
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
        </Routes>
    </>
  )
}

export default App
