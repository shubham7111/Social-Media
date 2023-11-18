import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthKey } from "./AuthContext";
import ExploreReducer, { initialStatePosts } from "../reducer/ExploreReducer";
import { toast } from 'react-toastify'


export const ExploreKey = createContext()



const ExploreContext = ({children}) => {
    const navigate =  useNavigate()
    const {state : {token, userInfo}} = useContext(AuthKey)
    const [state, postDispatch] = useReducer(ExploreReducer, initialStatePosts)
    

    const getPost =  async() => {
        
        try {
            const response =  await fetch('/api/posts')
            const finalReponse = await response.json()
            //localStorage.setItem("Post" , JSON.stringify(finalReponse.posts))
            
            postDispatch({type : "GET-POSTS" , payload : finalReponse.posts})
            
        } catch (error) {
            
        }

    }

    const getLikedPost = async() => {
      try {
          const sendReq = await fetch(`/api/posts/`)
          
          if (sendReq.status === 200) {
              const post = await sendReq.json()
              //console.log(post)

          }
      } catch (error) {
          console.log(error)
      }
  } 
  const bookmarkPost = async(bookmarkPostId) => {
    try {
        const sendReq = await fetch(`/api/users/bookmark/${bookmarkPostId}`, {
            method:"POST",
            headers:{Accept:'application/json', 'Content-Type':'application/json', authorization : token,
        }
        })
        console.log(sendReq , 'Bookmark')
        if (sendReq.status === 200){
            const {posts} = await sendReq.json()
            postDispatch({type : "BOOKMARK-POST", payload : posts})
            toast("Bookmark Post")
        }
    } catch (error) {
        
    }
  }
  const unBookmarkPost = async(bookmarkPostId) => {
    try {
        const sendReq = await fetch(`/api/users/remove-bookmark/${bookmarkPostId}`, {
            method:"POST",
            headers:{Accept:'application/json', 'Content-Type':'application/json', authorization : token,
        }
        })
        console.log(sendReq)
        if (sendReq.status === 201){
            const {posts} = await sendReq.json()
            postDispatch({type : "UNBOOKMARK-POST", payload : posts})
            toast("Bookmark Post")
        }
    } catch (error) {
        
    }
  }

  const likedPost = async(likedPostId) => {
      try {
          console.log(likedPostId, token)
          const sendReq = await fetch(`/api/posts/like/${likedPostId}`, {
              method:"POST",
              headers:{Accept:'application/json',
          'Content-Type':'application/json',
          authorization : token,
      },
  })
      console.log(sendReq)
      if (sendReq.status === 201) {
          const {posts} = await sendReq.json()
         
          const users = posts
          console.log(users)
          // const localStorageResponse = JSON.stringify(posts?.find((post) => post._id === likedPostId)?.likes?.likedBy.some((user) => user.username === userInfo.username)?  JSON.stringify(posts.find((post) => post._id === likedPost ).likes.likeCount +1) : JSON.stringify(posts)  )
          // console.log(localStorageResponse, 'kskjfkj')
          postDispatch({type : "LIKED-POST" , payload : posts})
        //   localStorage.setItem("Post" , JSON.stringify(posts))
          //likeDispatch({type : "GET-POSTS" , payload : posts})
          toast("Liked Post")
          console.log(posts, 'KLIKED')

      }
      
      } catch (error) {
          console.log(error)
      }
  }
  const unLikedPost = async(likedPostId) => {
      try {
          const sendReq = await fetch(`/api/posts/dislike/${likedPostId}`, {
              method:"POST",
              headers:{Accept:'application/json',
          'Content-Type':'application/json',
          authorization : token,
      },
  })
  console.log(sendReq)
      if (sendReq.status === 201) {
          const {posts} = await sendReq.json()
          const users = posts
          postDispatch({type : "UNLIKED-POST" , payload : posts})
        //   localStorage.setItem("Post" , JSON.stringify(posts))
          toast("UnLiked Post")
          console.log(posts, 'UNLIKED')
          console.log(users)

      }

      } catch (error) {
          
      }
  }
  // isLiked -true =---> Logged user ne post Like kiya Haii
  const isLiked = (postId) => {
      console.log(state?.posts?.find((post) => post._id === postId)?.likes?.likedBy.some((user) => user.username === userInfo.username), '98')
      return state?.posts?.find((post) => post._id === postId)?.likes?.likedBy.some((user) => user.username === userInfo.username);
  }

  const isBookmark = (postId) => {
    console.log(state?.posts?.find((post) => post._id === postId)?.likes?.likedBy.some((user) => user.username === userInfo.username), '98')
    return state?.posts?.find((post) => post._id === postId)?.likes?.likedBy.some((user) => user.username === userInfo.username);
}
    const bookMarkPostHandler = (post) => {
        console.log(post, 'hhh', state)
        const isBookmark =  state?.bookmark?.some((bookmarks) => bookmarks._id === post._id) 
        console.log(isBookmark, 'isbookmark')
        if (!isBookmark){
            postDispatch({type : "BOOKMARK-POST" , payload : post})
            toast("Bookmark Post successfully")
        }
        else if (isBookmark){
            postDispatch({type : "UNBOOKMARK-POST" , payload : post})
            toast("UNBookmark Post")
        }
    }
    // useEffect(() => { getPost()}, [] )
    const valuetobepassed = {state, getPost, likedPost, isLiked, unLikedPost, isBookmark, unBookmarkPost, bookmarkPost, bookMarkPostHandler}
  return (
    <ExploreKey.Provider value = {valuetobepassed}>{children}</ExploreKey.Provider>
  )
}

export default ExploreContext

