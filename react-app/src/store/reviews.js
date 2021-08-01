const GET_POSTREVIEWS = "get/postReviews"
const ADD_REVIEW = "add/review"
const DEL_REVIEW = "del/review"


export const getPostReviews = (payload) => {
    return {
        type: GET_POSTREVIEWS,
        payload
    }
}
export const addReview = (payload) => {
    return {
        type: ADD_REVIEW,
        payload
    }
}
export const delreview = (payload) => {
    return {
        type: DEL_REVIEW,
        payload
    }
}

export const getReviewsThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/reviews/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getPostReviews(data));
        return data
    }
}

export const addReviewThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addReview(data))
        return data
    }
}

export const editReviewThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/reviews", {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(res.ok) {
        const data = await res.json()
        dispatch(addReview(data))
        return data
    }
}

export const delReviewThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/reviews", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(delreview(data))
        return data
    }

}

let initialState = {}

export default function reviewsReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case GET_POSTREVIEWS:
            action.payload.reviews.forEach(el => {
                newState[el.id] = el
            })
            return {...state, ...newState}
        case ADD_REVIEW:
            newState = {...state, [action.payload.id]: action.payload}
            return newState
        case DEL_REVIEW:
            newState = {...state}
            delete newState[action.payload.id]
            return newState
        default:
            return newState
    }
}
