import React, { useContext, useEffect, useState } from 'react'
import { AuthKey } from '../../context/AuthContext';
import "./Modal.css";
import { UserKey } from '../../context/UserContext';
const Modal = ({closeModal , user, setModal}) => {
  const {userInfo } = useContext(AuthKey)
  const {updateProfile} = useContext(UserKey)
  const [updateUserInfo, setUpdatedUserInfo] = useState(user)
    const closeModalHandler = (e) => {
        if (
          e.target.className === "modal-container" ||
          e.target.className === "close-modal"
        ) {
          closeModal();
        }
      };
       const setInputHandler = (e)  => {
        //console.log(e.target.value)
          setUpdatedUserInfo( (updateUserInfo) => ({...updateUserInfo , [e.target.name]  :e.target.value}))
        
        console.log(updateUserInfo, e.target.name, e.target.value)
      }
      const clickHandler = (e) =>{
        e.preventDefault()
        updateProfile(updateUserInfo)
        setModal(false)
      }
      useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
      }, [])
  return (

    <div>
      <div className="modal-wrapper" onClick={closeModalHandler}></div>
      <div className="modal-container" onClick = {closeModalHandler}>
      <div className="modal">
      <div className="close" onClick={closeModal}> x</div>
        <form className = 'profile-modal-form'>
        <label className='label'>First Name : <input className='modal-profile-input' type = "text" name = "firstname" onChange={setInputHandler} value={updateUserInfo.firstname}/></label>
        <label className='label'>Lastname: <input className='modal-profile-input'  type = "text" name = "lastname" onChange={setInputHandler} value={updateUserInfo.lastname}/></label>
        <label className='label'>UserName: <input className='modal-profile-input' type = "text" name = "username" onChange={setInputHandler} value={updateUserInfo.username}/></label>
        <label className='label'>Bio: <input className='modal-profile-input' type = "text" name = "bio" onChange={setInputHandler} value={updateUserInfo.bio}/></label>
        <label className='label'> Website: <input className='modal-profile-input' type = "text" name = "website" onChange={setInputHandler} value={updateUserInfo.website}/></label>

        <button type="submit" id="submitBtn" onClick={clickHandler} className="modal-submitBtn" > Update Profile</button>
        <button className="modal-submitBtn" onClick={closeModal}> Cancel</button>

        </form>
      </div>
      </div>
    </div>
  )
}

export default Modal
