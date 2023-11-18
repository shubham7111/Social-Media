import React, { useContext, useEffect } from 'react'
import './UserDetails.css'
import { UserKey } from '../../context/UserContext'
import {User} from '../User/User'
export const UserDetails = () => {
  const {getUser, state : {users}} = useContext(UserKey)
 
  useEffect(() => { 
      
    getUser()}, [] )
  return (
    
      <div className="user-container">
        <span><h3>Suggestions</h3></span>
        <input type = "search" name = "usersearch"/>
        {
          users?.map((user, id) => <User user = {user} key ={id} /> )
        }
    </div>
    
  )
}
