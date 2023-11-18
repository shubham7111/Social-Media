import React, { useContext, useEffect } from 'react'
import { ExploreKey } from '../context/ExploreContext'
import {AiFillLike} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import './Explore.css'

import { AuthKey } from '../context/AuthContext'
import { UserKey } from '../context/UserContext'
import {PostUserSection} from '../component/PostUserSection'
import { NavLink, Route, Routes } from 'react-router-dom'
import BookMark from './BookMark'

import Profile from './Profile'
import SideBar from '../component/SideBar'
import { Card } from '../component/Card/Card'

const Explore = () => {
    //const { getPost} = useContext(ExploreKey)
    const {getPost, state : {posts}, state, likedPost, isLiked, unLikedPost, isBookmark, bookmarkPost, unBookmarkPost} = useContext(ExploreKey)
    const {getUser, state : {users}} = useContext(UserKey)
    
    //const {likedPost, isLiked, unLikedPost} = useContext(LikeKey)
    const {state: {userInfo}} = useContext(AuthKey)
    let feedPosts = posts
    let userDetail
    useEffect(() => { 
      
      getPost()}, [posts, state] )

      
      
  return (
    <div className= "parent-container-posts">
    
    <div className="post-container">
   
    {
      feedPosts?.map((post, id) => <Card post = {post} key = {id}/>
        )
    }
    </div>
    
    </div>
  )
}

export default Explore
