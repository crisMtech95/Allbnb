const GET_SEARCHRES = "get/searchRes"


export const getSearch = (payload) => {
    return {
        type: GET_SEARCHRES,
        payload
    }
}

export const getSearchThunk = (payload) => async(dispatch) => {
    const res = await fetch("/api/search", {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(res.ok) {
        const data = await res.json()
        // console.log("RESPONSE FRO EDIT", data)
        dispatch(getSearch(data))
        return data
    }
}

let initialState = {}

export default function searchReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case GET_SEARCHRES:
            action.payload.search.forEach(el => {
                newState[el.id] = el
            })
            return {...state, ...newState}
        default:
            return {...state}
    }
}
