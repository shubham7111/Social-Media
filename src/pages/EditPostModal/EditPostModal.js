import React, { useContext, useEffect, useRef, useState } from "react";
import { ExploreKey } from "../../context/ExploreContext";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { v4 as uuid } from "uuid";
import { TbLetterX } from "react-icons/tb";

const EditPostModal = ({ showClose, post }) => {
  const { editPost } = useContext(ExploreKey);
  console.log(post);
  const inputRef = useRef();
  const closeModalHandler = (e) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "close-modal"
    ) {
      showClose();
    }
  };
  const [input, setInput] = useState({ ...post });
  const setInputHandler = (e) => {
    //console.log(e.target.value)
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));

    //console.log(updateUserInfo, e.target.name, e.target.value)
  };
  const clickHandler = (e) => {
    e.preventDefault();
    editPost(post._id, input);
    showClose();
  };
  const ImageInputHandler = (e) => {
    console.log(e);
    setInput({
      ...input,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };
  const ImageClickHandler = (e) => {
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
      <div className="modal-wrapper" onClick={closeModalHandler}></div>
      <div className="modal-container" onClick={closeModalHandler}>
        <div className="modal">
          <div className="close" onClick={showClose}>
            {" "}
            x
          </div>
          <form className="profile-modal-form">
            <h1>Edit a post</h1>
            <div className="form-group">
              <textarea
                placeholder="write something here"
                name="content"
                onChange={setInputHandler}
                value={input.content}
              ></textarea>
            </div>
            <div>
              {input.mediaURL ? (
                <div>
                  <img src={input.mediaURL} />
                  <TbLetterX size={20} onClick={setUpdatedPostImageHandler} />
                </div>
              ) : (
                <div>
                  <MdOutlinePhotoCamera onClick={ImageClickHandler} />

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
            <button onClick={clickHandler}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
