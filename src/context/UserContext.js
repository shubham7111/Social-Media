import { createContext, useContext, useReducer } from "react";
import UserReducer, { initialStateUsers } from "../reducer/UserReducer";
import { toast } from 'react-toastify'
import { AuthKey } from "./AuthContext";
export const UserKey = createContext()

export const UserContext = ({children}) => {
    const [state, userDispatch] = useReducer(UserReducer, initialStateUsers)
    const {state : {token, userInfo},authDispatch} = useContext(AuthKey)
    const getUser = async() => {
        try {
            const response = await fetch('/api/users')
            const finalReponse = await response.json()
            console.log(finalReponse)
            userDispatch({type : "GET-USERS", payload : finalReponse.users})

        } catch (error) {
            console.log(error)
        }
    }
    const followUser = async(followUserId) => {
        try {
            //console.log(followUserId)
            const sendReq =  await fetch(`/api/users/follow/${followUserId}`, {
                method:"POST",
                headers:{Accept:'application/json', 'Content-Type':'application/json', authorization : token,
            }
            })
             console.log(sendReq,token, 'follow')
            if (sendReq.status === 201 || sendReq.status === 200){
            // const {posts} = await sendReq.json()
            const finalReponse = await sendReq.json()
            //followUser , user -- loggedin user updated data in following property
            //userDispatch({type : "UNBOOKMARK-POST", payload : posts})
            localStorage.setItem("LoginDetails" , JSON.stringify({user : finalReponse.user}))
            authDispatch({type : "SET-USER-INFO", payload : finalReponse.user})
            toast(`Started following ${finalReponse.followUser.firstName}`)
            //console.log(finalReponse, 'following')
            getUserProfile(finalReponse.user._id)
            
            }
        } catch (error) {
            
        }
    }
    const unFollowUser = async(unFollowUserId) => {
        try {
            console.log(unFollowUserId, token)
            const sendReq =  await fetch(`/api/users/unfollow/${unFollowUserId}`, {
                method:"POST",
                headers:{Accept:'application/json', 'Content-Type':'application/json', authorization : token,
            }
            })
            console.log(sendReq, 'follow')
            if (sendReq.status === 201 || sendReq.status === 200){
            // const {posts} = await sendReq.json()
            const finalReponse = await sendReq.json()
            //followUser , user -- loggedin user updated data in following property
            //userDispatch({type : "UNBOOKMARK-POST", payload : posts})
            localStorage.setItem("LoginDetails" , JSON.stringify({user : finalReponse.user}))
            authDispatch({type : "SET-USER-INFO", payload : finalReponse.user})
            toast(`UnFollowed ${finalReponse.followUser.firstName}`)
            console.log(finalReponse, 'Unfollowing')
            getUserProfile(finalReponse.user._id)
            
            }
        } catch (error) {
            
        }
    }
    const getUserProfile = async (userId) => {
        try {
            // console.log(userId)
            const sendReq =  await fetch(`/api/users/${userId}`)
            // console.log(sendReq)
            if (sendReq.status === 201 || sendReq.status === 200){
                const finalReponse = await sendReq.json()
                userDispatch({type : "SET-PROFILE", payload : finalReponse.user})
                // console.log(finalReponse, 'Updated user')
            }
        } catch (error) {
            
        }
    }
    const updateProfile = async(updateUserInfo) => {
        try {
          const passobj = {userData : updateUserInfo}
          // console.log(updateUserInfo, 'update')
          const sendReq =  await fetch("/api/users/edit" ,{method : "POST", headers : {'Accept' : 'application/json', 'Content-type' : 'application/json', authorization : token}, body : JSON.stringify(passobj)} )
          console.log(sendReq)
          const profile = {
            ...JSON.parse(localStorage.getItem("loginDetails")),
            user: updateUserInfo,
          };
          localStorage.setItem("loginDetails", JSON.stringify(profile));
          if (sendReq.status === 201) {
            const {user, encodedToken} = await sendReq.json()
            console.log(user)
            userDispatch({type : "SET-PROFILE", payload : user})
          }
          else{
            console.log("Incorrect")
          }
          
        } catch (error) {
          
        }
     }

     const getAllUserPostHandler =  async(username) => {
        try {
            const response = await fetch(`/api/posts/user/${username}`);
            if (response.status === 200 || response.status === 201) {
                const res = await response.json();
                //console.log(res)
                //const { posts } = await response.json();
                //console.log(posts)
                //userDispatch({ type: "FILTER-PROFILE-BASED-POSTS" });
                userDispatch({ type: "GET-PROFILE-BASED-POSTS", payload: res.posts });
              }
        } catch (error) {
            
        }
     }
    const valueTobePassed = {getUser, state, followUser, getUserProfile, unFollowUser, updateProfile, getAllUserPostHandler}
    return(
        <UserKey.Provider value = {valueTobePassed}>{children}</UserKey.Provider>
    )
} 

export default UserContext