import { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthReducer, { initialState } from "../reducer/AuthReducer";
import { toast } from 'react-toastify'
export const AuthKey =  createContext()


const AuthContext = ({children}) => {
    const localStorageResponse = JSON.parse(localStorage.getItem('LoginDetails'))
    const [token, setToken] = useState(localStorageResponse?.token || null)
    const [userInfo, setUserInfo] = useState(localStorageResponse?.user || null)
    const navigate = useNavigate()
    const location = useLocation()
    const [state, authDispatch] = useReducer( AuthReducer, initialState)
    console.log(userInfo, 'user test', token, localStorageResponse)
    // authDispatch({type : "USER-INFO", payload : userInfo})
   const loginhandler = async ({username, password}) => {
    try {
        const passobj = {username, password}
        const sendReq =  await fetch("/api/auth/login" ,{method : "POST", headers : {'Accept' : 'application/json', 'Content-type' : 'application/json'}, body : JSON.stringify(passobj)} )
        console.log(sendReq.status)
        if (sendReq.status === 200) {
            const {foundUser, encodedToken} = await sendReq.json()
            localStorage.setItem("LoginDetails" , JSON.stringify({user : foundUser, token : encodedToken}))
            setUserInfo(foundUser)
            setToken(encodedToken)
            authDispatch({type : "SET-TOKEN" , payload : encodedToken})
            authDispatch({type : "USER-INFO", payload : foundUser})
            authDispatch({type : "LOGGED-IN", payload : true})
            token && navigate("/explore")
            // console.log(token)
            // console.log(userInfo)
            // console.log(state)
            toast("Logged in successfully")

        }
        else {
            console.log("Incorrect credentials")
        }
    } catch (error) {
        
    }

   }

   const logouthandler = () => {
            authDispatch({type : "SET-TOKEN" , payload : null})
            authDispatch({type : "USER-INFO", payload : null})
            authDispatch({type : "LOGGED-IN", payload : false})
            // setToken(null)
            // setUserInfo(null)
            localStorage.removeItem("loginDetails")
            localStorage.removeItem("Post")
            //toggelSigninHandler()
            toast("logged out successfull")
            navigate("/")
   }
    const valuetobepassed = {loginhandler, state,token,userInfo, logouthandler}
  return (
    <AuthKey.Provider value =   {valuetobepassed}>{children}</AuthKey.Provider>
  )
}

export default AuthContext
