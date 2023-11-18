import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './SideBar.css'
import { UserDetails } from './UserDetails/UserDetails'

const SideBar = () => {
  return (
    <div className='sidebar-parent-container'>
      <div className='sidebar-left-container'>
        <NavLink to="/explore"><h2 className='link'>Explore</h2> </NavLink>
        <NavLink to="/bookmark"><h2 className='link'>Bookmark</h2></NavLink>
        <NavLink to="/likedpost"><h2 className='link'>Liked post</h2></NavLink>
        <NavLink to="/profile"><h2 className='link'>Profile</h2></NavLink>
      </div>
      <div className='sidebar-centre-container'>
        <Outlet />
      </div>
      <div className='sidebar-right-container'>
        <UserDetails />
      </div>
    </div>
  )
}

export default SideBar
