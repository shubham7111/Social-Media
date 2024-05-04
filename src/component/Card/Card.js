import { useContext, useEffect, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ExploreKey } from "../../context/ExploreContext";
import EditPostModal from "../editPostModal/EditPostModal";
import "./Card.css";
import { BiCommentAdd } from "react-icons/bi";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { UserKey } from "../../context/UserContext";
import { AuthKey } from "../../context/AuthContext";
export const Card = ({ post }) => {
  const {
    getPost,
    deletePost,
    state: { posts , bookmark },
    likedPost,
    isLiked,
    unLikedPost,
 
    bookmarkPost,
    unBookmarkPost,
    bookMarkPostHandler,
  } = useContext(ExploreKey);
  const {
    state: { users },
  } = useContext(UserKey);
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const [menu, setMenu] = useState(false);
  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setMenu(false)
  };
 
  const editPostHandler = (e, post) => {
    e.preventDefault();
    openModal();
  };

  const getDate = (data) => {
    return new Date(data).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  const deletePostHandler = (id) => {
    deletePost(post);
    // delete the shit post
  };

  const likePostHandler = (e) => {};
  const UnlikePostHandler = (e) => {};
  const user = users?.find((user) => user.username === post?.username);


  const isBookmark = (postId) => {

    console.log(bookmark?.some((post) => post._id === postId))
    return bookmark?.some((post)=>post?._id === postId)
}
  return (
    <div>
      <div className="post-container">
        {/* card Logic - Parent -{display - flex , direction :column} */}
        {/* card-top section */}
        <div className="card-child1">

          {/* div 1 - for image */}
          <div className="User-profile-picture">
            {" "}
            <img className="user-profile-img" src={user?.avatarUrl} alt="No" />
          </div>
          {/* div 2 - for details */}
          <div className="user-details-info">
            <h4>
              {post?.firstName} {post?.lastName}
            </h4>
            {/* <small onClick={() => navigate(`/posts/user/${data?.username}`)}> */}
            <small>
              {" "}
              {post.username} &nbsp;<span>{getDate(post.createdAt)}</span>
            </small>
          </div>
          {/* div 3 - for edit details */}
          <div className="options">
            {post?.username === userInfo.username &&
              (menu === false ? (
                <div onClick={() => setMenu(!menu)} className="drop-down">
                  <BsThreeDotsVertical />
                </div>
              ) : (
                <>
                  {" "}
                  <div onClick={() => setMenu(!menu)} className="drop-down">
                    <BsThreeDotsVertical />
                  </div>
                  <div className="options">
                    <ul className="menu">
                      <li onClick={(e) => editPostHandler(e, post)}>Edit</li>
                      <li onClick={() => deletePostHandler(post._id)}>
                        Delete
                      </li>
                    </ul>
                  </div>
                </>
              ))}
          </div>
        </div>
        {/* {display - flex , direction :column} */}
        <div className="card-child2">
          <div className="message">
            <h4>{post?.content}</h4>
          </div>
          {post?.mediaURL && (
            <div className="post-image">
              <img className="image" src={post?.mediaURL} />
            </div>
          )}
        </div>
        <div className="action-btn">
          <span
            className="icon"
            onClick={() =>
              !isLiked(post._id) ? likedPost(post._id) : unLikedPost(post._id)
            }
          >
            {/* isLiked(post)
              ? UnlikePostHandler(post._id)
              : likePostHandler(post._id) */}{" "}
            <small style={{ fontSize: "15px" }}>{post?.likes?.likeCount}</small>
            {/* onClick={() => UnlikePostHandler(post._id)}> */}
            {isLiked(post._id) ? (
              <AiTwotoneLike size={20} />
            ) : (
              <AiOutlineLike size={20} />
            )}
          </span>
          <span className="icon" onClick={() => bookMarkPostHandler(post)}>
            {isBookmark(post) ? (
              <BsFillBookmarkFill size={18} />
            ) : (
              <BsBookmark size={18} />
            )}
          </span>
          <span className="icon">
            <BiCommentAdd size={20} />
          </span>
                
        </div>
      </div>
      {modal && (
        <EditPostModal
          showClose={closeModal}
          showOpen={openModal}
          post={post}
        />
      )}
    </div>
  );
};
