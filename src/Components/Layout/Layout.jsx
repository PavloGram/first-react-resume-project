import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'

function Layout() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Outlet/>
    </div>
  )
}

export default Layout