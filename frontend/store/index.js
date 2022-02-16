import { createStore } from 'redux'
import reducer from './reducer'

// const defaultState = {
//     name: 'llh'
// }

// const store = createStore((state = defaultState, action) => {
//     return state;
// })

const store = createStore(reducer);

export default store