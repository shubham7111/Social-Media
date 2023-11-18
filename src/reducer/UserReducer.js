export const initialStateUsers = {
    // posts : localStorage.getItem("Post") ? JSON.parse(localStorage.getItem('Post')) : []
    users : []
}

const UserReducer = (state, action) => {
    switch(action.type) {
        case "GET-USERS" :
            console.log(action.payload, 'user reducer')
            return {...state, users : action.payload}
        
        default :
            return state
    }
}

export default UserReducer
