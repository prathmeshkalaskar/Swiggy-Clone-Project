import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>about us page</h1>
      <p>This is the food villa website use foronlinr food delivery</p>
      <Outlet/>
    </div>
  )
}

export default About
