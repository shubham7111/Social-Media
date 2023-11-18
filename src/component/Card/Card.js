import { useContext } from "react"
import { PostUserSection } from "../PostUserSection"
import {AiFillLike} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { ExploreKey } from "../../context/ExploreContext"

export const Card = ({post}) => {
    const {getPost, state : {posts}, likedPost, isLiked, unLikedPost, isBookmark, bookmarkPost, unBookmarkPost, bookMarkPostHandler} = useContext(ExploreKey)
   
    return (
        <div className= "post-container1">
            <div className="title-container">
                
                <PostUserSection post={post} />
                
            </div>
            <div className= "child-container" >
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