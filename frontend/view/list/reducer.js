const defaultState = {
    list: [],
    refreshing: false
}

export default function reducer (state = defaultState, action) {
    if (action.type === 'CHANGE_LIST') {
        const newState = {
            list: [...state.list, ...action.list],
            refreshing: false
        }
        return newState;
    }
    else if (action.type === 'CHANGE_REFRESH') {
        const newState = {
            list: [...state.list],
            refreshing: action.value
        }
        return newState;
    }
    return state
}