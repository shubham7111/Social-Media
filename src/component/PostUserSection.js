// import React, { useContext, useEffect, useState } from 'react'
// import { UserKey } from '../context/UserContext'
// import './PostUserSection.css'
// import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
// import EditPostModal from '../pages/EditPostModal/EditPostModal'
// import { ExploreKey } from '../context/ExploreContext';
// import { AuthKey } from '../context/AuthContext';
// export const PostUserSection = ({post}) => {

//     const {state : {users}} = useContext(UserKey)
//     const {deletePost} = useContext(ExploreKey)
//     const {state : {userInfo}} = useContext(AuthKey)
//     const [modal, setModal] = useState(false)
//     const [userProfileData, setUserProfileData] = useState({})
//     const [menu, setMenu] = useState(false)
//     const openMenu = () => setMenu(true)
//     const closeMenu = () => setMenu(false)

//     const openModal = () => {
//         setModal(true)
//     }
//     const closeModal = () => {
//         setModal(false)
//     }
//     const deletePostHandler = () =>{
        
//         deletePost(post)
//     }
//     const editPostHandler = (e) => {
//         e.preventDefault()
//         openModal()
//     }
//     const filterUser = users?.find((user) => user?.username === post?.username)
//     const date = new Date(post?.createdAt).toLocaleDateString("en-US", {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       });
//       useEffect(() => {
        
//         setUserProfileData(filterUser);
//       }, [post.username]);
//   return (
//     <div className="parent-container">
//     <div className='image-container'>
//     <img src = {filterUser?.avatarUrl} height = "40px" width= "40px" />
//     </div>
//       <div className="userdetail-container">
//       <span><b>{filterUser?.firstname} {filterUser?.lastname} </b></span>
//       <span>{filterUser?.username} {date}</span>
     
//       </div>
//       {
//         modal && <EditPostModal showClose = {closeModal} showOpen = {openModal} post =  {post}/>
//       }
//       {
//         userProfileData?.username ===  userInfo?.username && 
//         (<span onClick={() =>setMenu(!menu)} className="drop-down">
//         <div>
//           <BsThreeDotsVertical  />
//         </div>
//         </span>)}
//       {menu && 
//       (<div className="options">
//         <ul>
//           <li onClick={ editPostHandler}>Edit</li>
//           <li onClick={deletePostHandler}>Delete</li>
//         </ul>
//       </div>)}
//     </div>
//   )
// }

// // export default PostUserSection