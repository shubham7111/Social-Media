import React, { Children, useContext } from 'react'
import { AuthKey } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const RequiresAuth = ({children}) => {
    const {token} = useContext(AuthKey)
    const location = useLocation()
    console.log(token)
  return token?children:
  <Navigate to = "/signup" state = {{from:location}} />
}



