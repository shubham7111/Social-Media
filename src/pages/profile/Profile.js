import React, { useContext, useEffect, useState } from "react";
import { UserKey } from "../../context/UserContext";
import { AuthKey } from "../../context/AuthContext";
import Modal from "../../component/modal/Modal";
import { useParams } from "react-router-dom";
import Explore from "../explore/Explore";
import { ExploreKey } from "../../context/ExploreContext";
import { Card } from "../../component/card/Card";
import "./Profile.css";
const Profile = () => {
  const {
    state: { user, profileBasedPosts },
    state,
    getAllUserPostHandler,
  } = useContext(UserKey);
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const [modal, setModal] = useState(false);
  const { username } = useParams();
  //console.log(userInfo)
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  const [userData, setUserData] = useState({});
  const [loading, setUsersLoading] = useState(false);
  const getUserDetails = async () => {
    try {
      setUsersLoading(true);
      const request = await fetch(`/api/users/${username}`);
      const response = await request.json();
      if (request.status === 200 || request.status === 201) {
        setUserData(response.user);
        getAllUserPostHandler(username);
        setUsersLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [username, user, state, profileBasedPosts]);
  return (
    <div className="profile-container-wrapper">
      <header className="header">
        <h1>{userData?.firstname}'s Profile</h1>
      </header>

      <div className="profile-container">
        <div className="profile-image">
          <img
            src={
              userData?.avatarUrl
                ? userData?.avatarUrl
                : "https://gravatar.com/avatar/4e61ea87b10cdb2593aa622f811a65c6?s=400&d=robohash&r=x"
            }
            alt=""
          />
        </div>

        <div className="user-details">
          <div>
            <strong>
              {userData?.firstname} {userData?.lastname}
            </strong>
          </div>
          <div className="username">@{userData?.username}</div>
        </div>

        <div className="user-bio-container" >
          <p className="bio">{userData?.bio}</p>
          <span  className="bio">
            {userData?.website ? userData?.website : "No Links provided"}
          </span>
        </div>

        <div className="user-follow-container">
          <div className="child1">
            <div  className="unit">
              {userData?.following?.length} 
              </div>
            <div className="unit">{profileBasedPosts.length > 0 ? profileBasedPosts.length : 0} 
            </div>
            <div className="unit">{userData?.followers?.length} </div>
            {/* Following : {userData?.following?.length} */}
            </div>
            <div className="child2">
            <div>Following </div>
            <div>Posts </div>
            <div>Followers </div>
            </div>
       
        </div>
        {userData?.username === userInfo.username && (
          <button className="edit-modal-button" onClick={openModal}>
            Edit
          </button>
        )}
        {modal && (
          <Modal closeModal={closeModal} setModal={setModal} user={userData} />
        )} 
        </div>
        {/* <div className="profile-details">
         
            <br />
            <span>@{userData?.username}</span>
            <br />
            <span>
              {userData?.website ? userData?.website : "No Links provided"}
            </span>
          </div> */}

        {/* <span>Following : {userData?.following?.length}</span>
        <br />
        <span>Followers : {userData?.followers?.length}</span>
        <br />
        <span>
          {profileBasedPosts?.length > 1 ? "Posts" : "Post"} :{" "}
          {profileBasedPosts?.length}
        </span>
        </div> */}
        {/* {userData?.username === userInfo.username && (
          <button className="edit-modal-button" onClick={openModal}>
            Edit
          </button>
        )}

        {modal && (
          <Modal closeModal={closeModal} setModal={setModal} user={userData} />
        )} */}

        {/* User Profile Post section */}
 
      <div className="profile-posts">
        {profileBasedPosts?.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
