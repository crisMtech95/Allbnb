const GET_POSTIMAGES = "get/postimages"
const ADD_IMAGES = "add/images"
const DEL_IMAGES = "del/images"


export const getPostImages = (payload) => {
    return {
        type: GET_POSTIMAGES,
        payload
    }
}
export const addimage = (payload) => {
    return {
        type: ADD_IMAGES,
        payload
    }
}
export const delimage = (payload) => {
    return {
        type: DEL_IMAGES,
        payload
    }
}

export const getImagesThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/images/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getPostImages(data));
        return data
    }
}

export const addImageThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/images", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addimage(data))
        return data
    }
}

export const delImageThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/images", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(delimage(data))
        return data
    }
}

let initialState = {}

export default function imagesReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case GET_POSTIMAGES:
            action.payload.images.forEach(el => {
                newState[el.id] = el
            })
            return {...newState}
        case ADD_IMAGES:
            newState = {[action.payload.id]: action.payload, ...state}
            return newState
        case DEL_IMAGES:
            newState = {...state}
            delete newState[action.payload.id]
            return newState
        default:
            return {...state}
    }
}
