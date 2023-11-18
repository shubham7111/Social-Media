import React, { useContext } from 'react'
import { AuthKey } from '../context/AuthContext'

const LoginPage = () => {
    const {loginhandler, logouthandler} = useContext(AuthKey)
    const userGuest = {username : "adarshbalika" , password : "adarshBalika123"}
    const loginGuestHandler = () => {
        loginhandler(userGuest)
    }
    const logoutGuestHandler = () => {
      logouthandler(userGuest)
  }
  return (
    <div>
      <input type = "text" placeholder="email"/>
      <input type = "password" placeholder="password"/>

      <button onClick={loginGuestHandler}>Login As Guest</button>
      <button onClick={logoutGuestHandler}>Logout </button>

    </div>
  )
}

export default LoginPage
