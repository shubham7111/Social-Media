import React, { useContext } from 'react'
import { UserKey } from '../../context/UserContext'
import { useNavigate } from "react-router-dom";
import { AuthKey } from '../../context/AuthContext';

export const User = ({user}) => {
  const {followUser, unFollowUser, state } = useContext(UserKey)
  const {state : {userInfo}} = useContext(AuthKey)
  const navigate = useNavigate();
  //console.log(state.user , 'profleff')
  const followHandler = (userId) => {
    //console.log(userId)
    // console.log(state.user.following)
    const isFollow = userInfo?.following?.some((user) => user._id === userId)
    //console.log(isFollow)
    return  isFollow
  }
  //let isFollowing = followHandler(user._id)
  //console.log(isFollowing)
  return (
    <div className= "user-container-child" >
    <img src = {user.avatarUrl } height = "50px" width= "50px" onClick={() => navigate(`/profile/user/${user?.username}`)}/>
    <div onClick={() => navigate(`/profile/user/${user?.username}`)}>
    <span>{user.firstname} {user.lastname}</span><br/>
    <span>@{user.username}</span>
    </div>
    <button onClick={() => followHandler(user._id) ? unFollowUser(user._id) : followUser(user._id) } style = {{height : "20px", alignItems : "center"}}> {followHandler(user._id) ? "Following" : "Follow"}</button>
  </div>
  )
}

