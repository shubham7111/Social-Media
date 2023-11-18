export const initialStatePosts = {
    // posts : localStorage.getItem("Post") ? JSON.parse(localStorage.getItem('Post')) : []
    posts : [],
    bookmark : []
}

const ExploreReducer = (state, action) => {
    switch(action.type) {
        case "GET-POSTS" :
            
            return {...state, posts : action.payload}
        case "LIKED-POST" :
            console.log(action.payload, 'Like')
            localStorage.setItem("Post" , JSON.stringify(action.payload))
            return {...state, posts : action.payload}
        case "UNLIKED-POST" :
            console.log(action.payload)
            localStorage.setItem("Post" , JSON.stringify(action.payload))
            return {...state, posts : action.payload} 
        case "BOOKMARK-POST" :
            console.log(action.payload)

            const filteredBookmarkPostBookmark = state.posts.map((post) => post._id === action.payload._id) ? {...state.posts, isBookmark : true} : {...state.posts, isBookmark : false}

            return {...state, bookmark :[...state.bookmark, action.payload], posts : [...state.posts, filteredBookmarkPostBookmark] }

        case "UNBOOKMARK-POST" :
            const filteredBookmark = state.bookmark.filter((bookmark) => bookmark._id !== action.payload._id)

            console.log(action.payload)

            const filteredBookmarkPost = state.posts.map((post) => post._id === action.payload._id) ? {...state.posts, isBookmark : false} : {...state.posts, isBookmark : true}

            console.log(filteredBookmarkPost, '1234')

            return {...state, bookmark : filteredBookmark, posts : filteredBookmarkPost}

        default :
            return state
    }
}

export default ExploreReducer
