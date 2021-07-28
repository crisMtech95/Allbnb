const GET_POSTS = "get/posts"
const ADD_POST = "add/post"
const DEL_POST = "del/post"
const GET_POST = "get/post"

export const getPosts = (payload) => {
    return {
        type: GET_POSTS,
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

export const addPostThunk = (postInfo) => async(dispatch) => {
    const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(postInfo)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addPost(data))
        return data
    }

}

let initialState = {}

export default function postReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case ADD_POST:
            newState = {...state, [action.payload.id]: action.payload}
            return newState
        default:
            return newState
    }
}
