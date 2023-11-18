import React from 'react'

export const User = ({user}) => {
  return (
    <div className= "user-container-child" >
    <img src = {user.avatarUrl } height = "50px" width= "50px"/>
    <div>
    <span>{user.firstName} {user.lastName}</span><br/>
    <span>{user.username}</span>
    </div>
    <button style = {{height : "20px", alignItems : "center"}}>Follow</button>
  </div>
  )
}

