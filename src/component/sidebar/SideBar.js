import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./SideBar.css";
import { UserDetails } from "../userDetails/UserDetails";
import UserContext, { UserKey } from "../../context/UserContext";
import { AuthKey } from "../../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import CreateNewPost from "../createNewPostModal/CreateNewPostModal";
const SideBar = () => {
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const [modal, setModal] = useState(false);
  const { getUserProfile } = useContext(UserKey);
  const profileClickhandler = () => {
    console.log(userInfo, "testing");
    getUserProfile(userInfo._id);
  };
  const routes = [
    { name: "User Feed", path: "/", icon: <AiOutlineHome /> },

    { name: "Explore", path: "/explore", icon: <AiOutlineRocket /> },

    { name: "Liked Post", path: "/likedpost", icon: <AiOutlineLike /> },

    { name: "BookMark", path: "/bookmark", icon: <BsBookmark /> },

    {
      name: "Profile",
      path: `/profile/user/${userInfo?.username}`,
      icon: <CgProfile />,
    },
    {
      name: "New Post",
      icon: <AiOutlinePlusCircle />,
    },
  ];
  const showClose = () => {
    setModal(false);
  };
  const showOpen = () => {
    setModal(true);
  };
  const [activeId, setActiveId] = useState("Feed");
  return (
    <div className="sidebar-parent-container">
      <div className="main-div">
        <div className="sidebar-left-container">
          <ul>
            {routes.map((route) => {
              return (
                <li
                  key={route.name}
                  onClick={() => setActiveId(route.name)}
                  className={activeId === route.name ? "active-link" : "link"}
                >
                  {route.name === "New Post" ? (
                    <div className="link" onClick={showOpen}>
                      <div className="icon">
                        {route.icon} {route.name}
                      </div>
                      {/* <div className="name">{route.name}</div> */}
                    </div>
                  ) : (
                    <NavLink className="links" to={route.path} key={route.name}>
                      <div className="icon">
                        {route.icon} {route.name}
                      </div>
                    </NavLink>
                  )}
                  {/* <NavLink className="links" to={route.path} key={route.name}>
                    <div className="icon">
                      {route.icon} {route.name}
                    </div>
                  
                  </NavLink> */}
                </li>
              );
            })}
            {/* <li
              className={activeId === "new post" ? "active-link" : "link"}
              onClick={() => {
                setActiveId("new post");
                showOpen();
              }}
            >
              <div
                style={{ marginLeft: "3rem" }}
                className="link"
                onClick={showOpen}
              >
                <AiOutlinePlusCircle /> New Post
              </div>
            
            </li> */}
          </ul>
        </div>
        <div className="sidebar-centre-container">
          <Outlet />
        </div>
        {modal && <CreateNewPost showClose={showClose} showOpen={showOpen} />}
        <div className="sidebar-right-container">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
