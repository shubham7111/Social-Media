import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
            <NavLink to = "/home" ><img src ="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo" style={{width: 40, height: 40, borderRadius: 400/ 2}} /></NavLink> 
        </div>
        <ul>
            <li>
            <NavLink to = "/login" className= 'login'> Login</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
