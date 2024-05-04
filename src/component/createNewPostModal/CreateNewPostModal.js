import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import "./modal.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { ExploreKey } from "../../context/ExploreContext";
import { TbLetterX } from "react-icons/tb";
const CreateNewPost = ({ showClose, showOpen }) => {
  const { createPost } = useContext(ExploreKey);
  const inputRef = useRef();
  const closeModalHandler = (e) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "close-modal"
    ) {
      showClose();
    }
  };
  const [input, setInput] = useState({
    _id: uuid(),
    content: "",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    createdAt: "",
  });
  const setInputHandler = (e) => {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    createPost(input);
    showClose();
  };
  const ImageInputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };
  const ImageClickHandler = () => {
    inputRef.current.click();
  };
  const setUpdatedPostImageHandler = () => {
    setInput({ ...input, mediaURL: null });
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{ backgroundColor: "yellow" }}
        onClick={closeModalHandler}
      ></div>
      <div className="modal-container" onClick={closeModalHandler}>
        <div className="modal">
          <div>
            {" "}
            <button className="cancel-btn" onClick={showClose}>
              &times;
            </button>
          </div>

          <form className="profile-modal-form">
            <h1>Add a post</h1>
            <div className="form-group">
              <textarea
                placeholder="write something here"
                name="content"
                onChange={setInputHandler}
              ></textarea>
            </div>
            <div>
              {input?.mediaURL ? (
                <div>
                  <img
                    className="post-image-create-modal"
                    style={{
                      height: "100px",
                      width: "100px",
                      marginLeft: "20px",
                    }}
                    src={input?.mediaURL}
                  />
                  <TbLetterX size={20} onClick={setUpdatedPostImageHandler} />
                </div>
              ) : (
                <div className="image-uploaded-container">
                  <MdOutlinePhotoCamera
                    className="cancel-image"
                    onClick={ImageClickHandler}
                  />

                  <input
                    type="file"
                    name="mediaURL"
                    onChange={ImageInputHandler}
                    ref={inputRef}
                    style={{
                      display: "none",
                    }}
                  />
                </div>
              )}
            </div>
            <div>
              <button className="btn" onClick={clickHandler}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
