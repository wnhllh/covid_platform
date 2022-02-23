import { combineReducers } from 'redux';
import { reducer as venue } from '../';
import { reducer as report } from '../screens/trial';
import { reducer as list } from '../screens/list';

const reducer = combineReducers({
    venue: venue,
    report: report,
    list: list
})

export default reducer;