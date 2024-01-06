import React, { useContext, useEffect } from 'react'
import './UserDetails.css'
import { UserKey } from '../../context/UserContext'
import {User} from '../User/User'
import { AuthKey } from '../../context/AuthContext'
export const UserDetails = () => {
  const {getUser, state : {users}} = useContext(UserKey)
  const {state : {userInfo}} = useContext(AuthKey)
  const filteredUser =  users?.filter((user) => user._id !== userInfo?._id)
  useEffect(() => { 
      
    getUser()}, [] )
  return (
    
      <div className="user-container">
        <span><h3>Suggestions</h3></span>
        <input type = "search" name = "usersearch"/>
        {
          filteredUser?.map((user, id) => <User user = {user} key ={id} /> )
        }
    </div>
    
  )
}
