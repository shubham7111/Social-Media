import { createContext, useContext, useReducer } from "react";
import UserReducer, { initialStateUsers } from "../reducer/UserReducer";
import { toast } from 'react-toastify'
import { AuthKey } from "./AuthContext";
export const UserKey = createContext()

export const UserContext = ({children}) => {
    const [state, userDispatch] = useReducer(UserReducer, initialStateUsers)
    const {state : {token, userInfo}} = useContext(AuthKey)
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
            const sendReq =  await fetch(`/api/users/follow/${followUserId}`, {
                method:"POST",
                headers:{Accept:'application/json', 'Content-Type':'application/json', authorization : token,
            }
            })
            console.log(sendReq, 'follow')
            if (sendReq.status === 201){
            const {posts} = await sendReq.json()
            userDispatch({type : "UNBOOKMARK-POST", payload : posts})
            toast("Bookmark Post")
            }
        } catch (error) {
            
        }
    }
    const valueTobePassed = {getUser, state}
    return(
        <UserKey.Provider value = {valueTobePassed}>{children}</UserKey.Provider>
    )
} 

export default UserContext