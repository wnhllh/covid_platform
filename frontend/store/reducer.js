import { combineReducers } from 'redux'
import { reducer as venue } from '../screens/view/venue'
import { reducer as report } from '../screens/report-staff-trial'
import { reducer as list } from '../screens/view/detail'

const reducer = combineReducers({
	venue: venue,
	report: report,
	list: list
})

export default reducer
