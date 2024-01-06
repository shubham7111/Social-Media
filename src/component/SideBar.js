import React, { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './SideBar.css'
import { UserDetails } from './UserDetails/UserDetails'
import UserContext, { UserKey } from '../context/UserContext'
import { AuthKey } from '../context/AuthContext'
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import CreateNewPost from '../pages/CreateNewPostModal/CreateNewPostModal'
const SideBar = () => {
  const {state : {userInfo}} = useContext(AuthKey)
  const [modal , setModal] = useState(false)
  const {getUserProfile} = useContext(UserKey)
  const profileClickhandler = () => {
    console.log(userInfo, 'testing')
    getUserProfile(userInfo._id)
  }
  const routes = [
    { name: "User Feed", path: "/", icon: <AiOutlineHome /> },
    ,
    { name: "Explore", path: "/explore", icon: <AiOutlineRocket /> },

    { name: "Liked Post", path: "/likedpost", icon: <AiOutlineLike /> },

    { name: "BookMark", path: "/bookmark", icon: <BsBookmark /> },

    {
      name: "Profile",
      path: `/profile/user/${userInfo?.username}`,
      icon: <CgProfile />,
    },
  ];
  const showClose = () => {
    setModal(false)
  }
  const showOpen = () => {
    setModal(true)
  }
  const [activeId, setActiveId] = useState("Feed");
  return (
    <div className='sidebar-parent-container'>
      <div className='sidebar-left-container'>
      <ul>
        {
          routes.map((route) => {
            return (
              <div key = {route.name}
              onClick={() => setActiveId(route.name)}
              className={activeId === route.name ? "active-link" : "link"}>
                <NavLink className='link' to={route.path} key = {route.name}>
                  <div className='icon'>{route.icon}</div>
                  <div className='text'>{route.name}</div>
                </NavLink>
              </div>
            )
          })
        }
        <li
              className={activeId === "new post" ? "active-link" : "link"}
              onClick={() => {
                setActiveId("new post");
                showOpen();
              }}
            >
              <div
                style={{ marginLeft: "3rem" }}
                className="icon"
                onClick={showOpen}
              >
                <AiOutlinePlusCircle />
              </div>
              <div className="text">New Post</div>
            </li>
      </ul>
        {/* <NavLink to="/explore"><h2 className='link'>Explore</h2> </NavLink>
        <NavLink to="/bookmark"><h2 className='link'>Bookmark</h2></NavLink>
        <NavLink to="/likedpost"><h2 className='link'>Liked post</h2></NavLink>
        <NavLink to="/profile/user/"><h2 onClick={profileClickhandler} className='link'>Profile</h2></NavLink> */}
      </div>
      <div className='sidebar-centre-container'>
        <Outlet />
      </div>
      {modal && <CreateNewPost  showClose = {showClose} showOpen = {showOpen}/>}
      <div className='sidebar-right-container'>
        <UserDetails />
      </div>
    </div>
  )
}

export default SideBar
