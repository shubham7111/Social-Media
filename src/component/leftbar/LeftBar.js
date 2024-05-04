import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AuthKey } from "../../context/AuthContext";
import React, { useContext, useState } from "react";
import CreateNewPost from "../createNewPostModal/CreateNewPostModal";
import './LeftBar.css'
export const LeftBar = () =>{
  const [modal, setModal] = useState(false);

  const {
    state: { userInfo },
  } = useContext(AuthKey);
    const routePaths = [
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
      const [activeId, setActiveId] = useState("Feed");
      const showClose = () => {
        setModal(false);
      };
      const showOpen = () => {
        setModal(true);
      };
    return <div>
      <div className="left-container">
       
            {routePaths.map((route) =>  
            <div  key={route.name}
                  onClick={() => setActiveId(route.name)}
                  className={activeId === route.name ? "active-link" : "link"}
                >
                  {route.name === "New Post" ? (
                    <div className="links" onClick={showOpen}>
                      <div className="icon">
                        {route.icon} {route.name}
                      </div>
                    </div>
                  ) : (
                  <div className="icon">
                        <NavLink className="links" to={route.path} key={route.name}>
                    
                        {route.icon} {route.name}
                        </NavLink>
                      </div>
                  
                  )}
                
                </div>
              
            )}
       
           </div>
           {modal && <CreateNewPost  showClose={showClose} showOpen={showOpen} />}

    </div>
}
