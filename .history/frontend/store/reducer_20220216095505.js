import { combineReducers } from 'redux';
import { reducer as venue } from '../view/venue';
import { reducer as report } from '../view/trial';
import { reducer as list } from '../view/list/';

const reducer = combineReducers({
    venue: venue,
    report: report,
    list: list
})

export default reducer;