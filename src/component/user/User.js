import React, { useContext } from "react";
import { UserKey } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { AuthKey } from "../../context/AuthContext";
import "./User.css";

export const User = ({ user }) => {
  const { followUser, unFollowUser, state } = useContext(UserKey);
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const navigate = useNavigate();
  //console.log(state.user , 'profleff')
  const isFollowhandler = (userId) => {
    const isFollow = userInfo?.following?.some((user) => user._id === userId);
    return isFollow;
  };
  const followHandler = (userId) => {
    console.log(userId);
    // console.log(userInfo.following);
    const isFollow = userInfo?.following?.some((user) => user._id === userId);
    //console.log(isFollow);
    //return isFollow;

    if (isFollow) {
      console.log(userId, "follow case");
      unFollowUser(user._id);
    } else {
      console.log(userId, "unfollow case");
      followUser(user._id);
    }
  };
  //let isFollowing = followHandler(user._id)
  //console.log(isFollowing)
  return (
    <div className="user-container-child">
      <img
        src={user.avatarUrl}
        height="50px"
        width="50px"
        alt=""
        onClick={() => navigate(`/profile/user/${user?.username}`)}
      />
      <div onClick={() => navigate(`/profile/user/${user?.username}`)}>
        <span>
          {user.firstname} {user.lastname}
        </span>
        <br />
        <span>@{user.username}</span>
      </div>
      <button
        onClick={() => followHandler(user._id)}
        style={{ height: "20px", alignItems: "center" }}
      >
        {" "}
        {isFollowhandler(user._id) ? "Following" : "Follow"}
      </button>
    </div>
  );
};
