const GET_POSTRESERVATIONS = "get/postReservations"
const ADD_RESERVATION = "add/reservation"
const DEL_RESERVATION = "del/reservation"


export const getPostRes = (payload) => {
    return {
        type: GET_POSTRESERVATIONS,
        payload
    }
}
export const addRes = (payload) => {
    return {
        type: ADD_RESERVATION,
        payload
    }
}
export const delres = (payload) => {
    return {
        type: DEL_RESERVATION,
        payload
    }
}

export const getReservationsThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/reservations/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getPostRes(data));
        return data
    }
}

export const addResThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addRes(data))
        return data
    }
}

export const editResThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/reservations", {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(res.ok) {
        const data = await res.json()
        dispatch(addRes(data))
        return data
    }
}

export const delResThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/reservations", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const data = await res.json()
        // console.log("RES FROM THE FETCH", res)
        // console.log("RES FROM THE JSON", data)
        dispatch(delres(data))
        return data
    }

}

let initialState = {}

export default function reservationReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case GET_POSTRESERVATIONS:
            action.payload.reservations.forEach(el => {
                newState[el.id] = el
            })
            return {...state, ...newState}
        case ADD_RESERVATION:
            newState = {...state, [action.payload.id]: action.payload}
            return newState
        case DEL_RESERVATION:
            newState = {...state}
            delete newState[action.payload.id]
            return newState
        default:
            return newState
    }
}
