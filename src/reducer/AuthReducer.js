export const initialState = {
    token :  localStorage.getItem('LoginDetails')? 
    JSON.parse(localStorage.getItem('LoginDetails'))?.token : null,
    userInfo : localStorage.getItem('LoginDetails')? JSON.parse(localStorage.getItem('LoginDetails'))?.user : null ,
    isLoggedIn : false
}

const AuthReducer = (state, action) => {
  
    switch(action.type) {
        case "SET-TOKEN" :
            return {...state, token : action.payload}
        case "USER-INFO" :
            return {...state, userInfo : action.payload}
        case "LOGGED-IN" :
            return {...state, isLoggedIn : action.payload}
        default :
            return state
    }
  
}

export default AuthReducer
