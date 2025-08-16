import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/programmer/Navbar'
import { Footer } from './components/common/Footer'

function ProgrammerHome() {
  return (
    <>
    <Navbar/>
      <main>
        <div className='min-h-screen'>
            <Outlet />
        </div>
        
      </main>
      <Footer/>
    </>
  )
}

export default ProgrammerHome
