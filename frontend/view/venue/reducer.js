const defaultState = {
    categories: []
}

export default function reducer (state = defaultState, action) {
    if (action.type === 'SET_CATEGORIES') {
        // console.log([...action.data])
        const newState = {
            categories: [...action.data]
        }
        return newState
    }
    return state;
}