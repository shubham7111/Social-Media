import React, { useContext } from 'react'
import { UserKey } from '../context/UserContext'
import './PostUserSection.css'
export const PostUserSection = ({post}) => {

    const {state : {users}} = useContext(UserKey)
 
    const filterUser = users?.find((user) => user?.username === post?.username)
    const date = new Date(post?.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
  return (
    <div className="parent-container">
    <div className='image-container'>
    <img src = {filterUser?.avatarUrl} height = "40px" width= "40px" />
    </div>
      <div className="userdetail-container">
      <span><b>{filterUser?.firstName} {filterUser?.lastName} </b></span>
      <span>{filterUser?.username} {date}</span>
     
      </div>
    </div>
  )
}

// export default PostUserSection
