import { combineReducers } from 'redux';
import { reducer as venue } from '../screens/venue';
import { reducer as report } from '../screens/trial/reducer';
import { reducer as list } from '../screens/list/reducer';

const reducer = combineReducers({
    venue: venue,
    report: report,
    list: list
})

export default reducer;