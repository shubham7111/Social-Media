import React, { useContext, useEffect, useState } from 'react'
import { UserKey } from '../context/UserContext'
import { AuthKey } from '../context/AuthContext'
import Modal from './modal/Modal'
import { useParams } from 'react-router-dom'
import Explore from './Explore'
import { ExploreKey } from '../context/ExploreContext'
import { Card } from '../component/Card/Card'
import "./Profile.css"
const Profile = () => {
  const {state : {user, profileBasedPosts}, state, getAllUserPostHandler} = useContext(UserKey)
  const {state : {userInfo}} = useContext(AuthKey)
  const [modal, setModal] = useState(false)
  const { username } = useParams();
  //console.log(userInfo)
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };


  const [userData,  setUserData] = useState({})
  const [loading, setUsersLoading] =  useState(false)
  const getUserDetails = async() =>{
    try {
      setUsersLoading(true)
      const request = await fetch(`/api/users/${username}`);
      const response = await request.json();
      //console.log(username,response, request)
      if (request.status === 200 || request.status === 201){
          setUserData(response.user)
          //console.log(response, 'ysgffhdffj')
          getAllUserPostHandler(username)
          setUsersLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserDetails()
  }, [username, user, state, profileBasedPosts])
  // console.log(userData)
  return (
    <div>
    <header className='header'>
    <h1>{userData?.firstname}'s Profile</h1>
    </header>

      
      <div className='profile-container'>
      <div className='profile-image'>
        <img src = {userData?.avatarUrl ? userData?.avatarUrl : "https://gravatar.com/avatar/4e61ea87b10cdb2593aa622f811a65c6?s=400&d=robohash&r=x" } />
      </div>
      <div className='profile-details'>
        <span><strong>{userData?.firstname} {userData?.lastname}</strong></span><br/>
        <span>@{userData?.username}</span><br/>
        <span>{userData?.website ? userData?.website : "No Links provided"}</span>

      </div>
    
    
    <span>Following : {userData?.following?.length}</span><br/>
    <span>Followers : {userData?.followers?.length}</span><br/>
    <span>{profileBasedPosts?.length > 1 ? "Posts" : "Post"} : {profileBasedPosts?.length}</span><br/>
    {userData?.username === userInfo.username && (<button className='edit-modal-button' onClick={openModal}>Edit</button>)}
    
    <div className='address-modal'>
      {
        modal && <Modal closeModal={closeModal} setModal={setModal}  user = {userData} />
      }
    </div>
    {/* User Profile Post section */}
    <div>
      {
        profileBasedPosts?.map((post, index) => <Card key = {index} post = {post}/>)
      }
    </div>

      </div>
    </div>
  )
}

export default Profile
