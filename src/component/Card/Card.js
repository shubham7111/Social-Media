import { useContext, useEffect, useState } from "react"
import { PostUserSection } from "../PostUserSection"
import {AiFillLike} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { ExploreKey } from "../../context/ExploreContext"
import EditPostModal from "../../pages/EditPostModal/EditPostModal"
import "./Card.css"
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { UserKey } from "../../context/UserContext"
export const Card = ({post}) => {
    const {getPost, deletePost , state : {posts}, likedPost, isLiked, unLikedPost, isBookmark, bookmarkPost, unBookmarkPost, bookMarkPostHandler} = useContext(ExploreKey)
    const {state : {users}} = useContext(UserKey)
    // const [modal, setModal] = useState(false)
    // const [userProfileData, setUserProfileData] = useState({})
    // const [menu, setMenu] = useState(false)
    // const openMenu = () => setMenu(true)
    // const closeMenu = () => setMenu(false)

    // const openModal = () => {
    //     setModal(true)
    // }
    // const closeModal = () => {
    //     setModal(false)
    // }
    // const deletePostHandler = () =>{
        
    //     deletePost(post)
    // }
    // const editPostHandler = (e) => {
    //     e.preventDefault()
    //     openModal()
    // }
    // const finalReponse = () =>  {users?.find((user) => user.username === post?.username)
    //     setUserProfileData(finalReponse)}
    // useEffect (() => {
        
    // }, [post.username])

    return (
        <div className= "post-container1">
            <div className="title-container">
           
                <PostUserSection post={post} />
                
            </div>
            <div className= "child-container" >

                {/* <button onClick={deletePostHandler}>Delete</button>
                <button onClick={openModal}>Edit </button> */}
                {/* {
                    modal && <EditPostModal showClose = {closeModal} showOpen = {openModal} post =  {post}/>
                }
                {userProfileData?.username ===  post?.username && (<span onClick={() =>setMenu(!menu)} className="drop-down"><div><BsThreeDotsVertical  /></div></span>)}
                
                {menu && (<div className="options">
                    <ul>
                        <li onClick={ editPostHandler}>Edit</li>
                        <li onClick={deletePostHandler}>Delete</li>
                    </ul>
                </div>)} */}
               <p>{post.content}</p> 
               <img src = {post.mediaURL} alt="NO IMAGE"/>
               <p>
               <div className='like-btn'>
                <button onClick={() => !isLiked(post._id) ? likedPost(post._id) : unLikedPost(post._id)}><AiFillLike />{ post?.likes?.likeCount }</button>
                <button onClick={() => bookMarkPostHandler(post)}> <BsFillBookmarkFill /></button>
                </div>
               </p>
            </div>
            </div>
    )
}