const defaultState = {
    venues: [],
    name: '',
    description: ''
}

export default function reducer (state = defaultState, action) {
    if (action.type === 'SET_STATE') {
        // console.log([...action.venues])
        const newState = {
            venues: [...action.venues],
            name: state.name,
            description: state.description
        }
        return newState
    }
    if (action.type === 'CREATE_NAME') {
        const newState = {
            venues: state.venues,
            name: action.name,
            description: state.description
        }
        return newState
    }
    if (action.type === 'CREATE_DESCRIPTION') {
        // console.log([...action.venues])
        const newState = {
            venues: state.venues,
            name: state.name,
            description: action.description
        }
        return newState
    }
    return state;
}