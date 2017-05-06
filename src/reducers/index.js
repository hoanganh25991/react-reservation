import * as c from '../actions/const-name'
import reservations from './reservations'
import user from './user'

// const adminPage = combineReducers({
// 	reservations,
// })

const initState = {
	reservations: [],
	filters: [],
	user: {}
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
		{
			return reservations(state, action);
		}
		case c.ADD_FILTER_STATUS:
		case c.ADD_FILTER_DAY:{
			return filter(state, action);
		}
		default:
			return state;
	}
}

export default adminPage