export const initialStateUsers = {
    // posts : localStorage.getItem("Post") ? JSON.parse(localStorage.getItem('Post')) : []
    users : [],
    user : {},
    userId : 0,
    profileBasedPosts : []
}

const UserReducer = (state, action) => {
    switch(action.type) {
        case "GET-USERS" :
            //console.log(action.payload, 'user reducer')
            return {...state, users : action.payload}
        case "SET-PROFILE" :
            // console.log(action.payload, 'user reducer')
            return {...state, user : action.payload, userId : action.payload._id }
        
        case "GET-PROFILE-BASED-POSTS":
            //console.log(action.payload, 'djsdjsdjskjd')
            return {
                ...state,
                profileBasedPosts: action.payload,

            };
        default :
            return state
    }
}

export default UserReducer
