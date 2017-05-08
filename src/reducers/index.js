import * as c from '../actions/const-name'
import reservations from './reservations'
import user from './user'
import filter from './filter'

// const adminPage = combineReducers({
// 	reservations,
// })

const initState = {
	reservations: [],
	filters: [],
	user: {},
	toggleInputPickADate: false,
}

const adminPage = (state = initState, action) => {
	switch(action.type) {
		case c.UPDATE_USER:
		case c.LOGIN_SUCCESS:
		case c.LOGIN_FAIL:
		case c.LOGOUT_SUCCESS:
		case c.LOGOUT_FAIL:
		{
			return user(state, action);
		}
		case c.UPDATE_RESERVATIONS:
		case c.UPDATE_RESERVATION:
		case c.FETCH_RESERVATIONS_FAIL:
		case c.ASSIGN_DATE_ON_RESERVATIONS:
		{
			return reservations(state, action);
		}
		case c.ADD_FILTER_STATUS:
		case c.TOGGLE_FILTER_DAY:{
			return filter(state, action);
		}
		case c.TOGGLE_INPUT_PICK_A_DATE: {
			let {toggleInputPickADate: currentPickADay} = state;
			// toggle it
			let toggleInputPickADate = !currentPickADay;
			// save it
			return Object.assign({}, state, {toggleInputPickADate});
		}
		default:
			return state;
	}
}

export default adminPage
///////