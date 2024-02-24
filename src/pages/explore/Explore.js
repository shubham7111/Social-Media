import React, { useContext, useEffect, useState } from "react";
import { ExploreKey } from "../../context/ExploreContext";
import { AiFillLike } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
// import './Explore.css'
import "../../component/card/Card.css";
import { AuthKey } from "../../context/AuthContext";
import { UserKey } from "../../context/UserContext";
import { PostUserSection } from "../../component/postUserSection/PostUserSection";
import { NavLink, Route, Routes } from "react-router-dom";
import BookMark from "../bookmark/BookMark";

import Profile from "../profile/Profile";
import SideBar from "../../component/sidebar/SideBar";
import { Card } from "../../component/card/Card";
import { CircleLoader } from "react-spinners";
const Explore = () => {
  //const { getPost} = useContext(ExploreKey)
  const {
    getPost,
    state: { posts },
    state,
    likedPost,
    isLiked,
    unLikedPost,
    isBookmark,
    bookmarkPost,
    unBookmarkPost,
  } = useContext(ExploreKey);
  const {
    getUser,
    state: { users },
  } = useContext(UserKey);

  //const {likedPost, isLiked, unLikedPost} = useContext(LikeKey)
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const [loading, setLoading] = useState(false);
  let feedPosts = posts;
  //console.log(userInfo)
  let userDetail;
  useEffect(() => {
    setLoading(true);
    getPost();
    setLoading(false);
  }, [posts, state]);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="posts-parent-container">
      {loading && (
        <div style={style}>
          {" "}
          <CircleLoader color="#123abc" />{" "}
        </div>
      )}
      {!loading && feedPosts?.map((post, id) => <Card post={post} key={id} />)}
    </div>
  );
};

export default Explore;
