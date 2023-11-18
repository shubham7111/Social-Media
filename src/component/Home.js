import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

function Home() {
  return (
    <div>
    <p><NavLink to = "/explore"> Explore</NavLink></p>
    <p><NavLink to = "/likedpost"> Liked Post</NavLink></p>
    <p><NavLink to = "/bookmark"> Bookmark</NavLink></p>
    <p><NavLink to = "/profile"> Profile</NavLink></p>
<LoginPage />
      
    </div>
  )
}

export default Home
