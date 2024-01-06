import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import { AuthKey } from '../../context/AuthContext'
import { FiLogOut } from "react-icons/fi";
const Navigation = () => {
  const {token, logouthandler, state : {userInfo}} = useContext(AuthKey)
  return (
    <div className='navbar'>
      <nav>
        {/* <div className='logo'>
            <NavLink to = "/home" ><img src ="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo" style={{width: 40, height: 40, borderRadius: 400/ 2}} /></NavLink> 
        </div>
        <ul>
            <li>
            <NavLink to = "/login" className= 'login'> Login</NavLink>
            </li>
        </ul>
        <div className='username'>
          {
            token && <NavLink to = "/" > {userInfo?.firstName}</NavLink>
          }
        </div>
        <div className='logout'>
          {
            token && <NavLink to = "/" > <FiLogOut onClick={logouthandler} /></NavLink>
          }
        </div> */}
        <div className='nav-data'>
        <ul>
        <li>
        <NavLink to = "/" ><img src ="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo" style={{width: 40, height: 40, borderRadius: 400/ 2}} /></NavLink> 
       </li>        
       <li>{

            token && <NavLink to = "/" > {userInfo?.firstname}</NavLink>
          }
          </li>
          <li>{
            token && <NavLink to = "/login" > <FiLogOut onClick={logouthandler} /></NavLink>
          } 
          </li>
          </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navigation
