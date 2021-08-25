const GET_POSTS = "get/posts"
const GET_ONEPOST = "get/onePost"
const GET_USERPOSTS = "get/usersposts"
const ADD_POST = "add/post"
const DEL_POST = "del/post"
const GET_POST = "get/post"

export const getPosts = (payload) => {
    return {
        type: GET_POSTS,
        payload
    }
}
export const getOnePosts = (payload) => {
    return {
        type: GET_ONEPOST,
        payload
    }
}
export const getUserPosts = (payload) => {
    return {
        type: GET_USERPOSTS,
        payload
    }
}
export const addPost = (payload) => {
    return {
        type: ADD_POST,
        payload
    }
}
export const delPost = (payload) => {
    return {
        type: DEL_POST,
        payload
    }
}
export const getOnePost = (payload) => {
    return {
        type: GET_POST,
        payload
    }
}

export const getSearchedPosts = payload => async(dispatch) => {
    const res = await fetch("/api/posts/search", {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(getPosts(data))
    }
}


export const getSinglePostThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/posts/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getOnePosts(data));
        return data
    }
}
export const getUserPostsThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/posts/user/${id}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(getUserPosts(data));
        return data
    }
}

export const addPostThunk = (postInfo) => async(dispatch) => {
    const res = await fetch("/api/posts", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(postInfo)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addPost(data))
        return data
    }
}

export const editPostThunk = (post) => async(dispatch) => {
    const res = await fetch("/api/posts", {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    })
    if(res.ok) {
        const data = await res.json()
        console.log("RESPONSE FRO EDIT", data)
        dispatch(addPost(data))
        return data
    }
}

export const delPostThunk = (post) => async(dispatch) => {
    const res = await fetch("/api/posts", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    })
    if (res.ok) {
        const data = await res.json()
        // console.log("RES FROM THE FETCH", res)
        // console.log("RES FROM THE JSON", data)
        dispatch(delPost(data))
        return data
    }

}

let initialState = {}

export default function postReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case GET_ONEPOST:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case GET_USERPOSTS:
            action.payload.userPosts.forEach(el => {
                newState[el.id] = el
            })
            return {...newState}
        case ADD_POST:
            newState = {...state, [action.payload.id]: action.payload}
            return newState
        case DEL_POST:
            newState = {...state}
            delete newState[action.payload.id]
            return newState
        default:
            return {...state}
    }
}
