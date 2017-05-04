import * as c from '../actions/const-name'

const reservations = (state, action) => {
	switch(action.type) {
		case c.UPDATE_USER:
		{
			// Current user state
			let {user: currUser} = state;
			// Update it with what inside action
			let user = Object.assign({}, currUser, action.user);
			// Update state
			return Object.assign({}, state, {user});
		}
		case c.LOGGING_IN:
		case c.LOGIN_SUCCESS:
		case c.LOGIN_FAIL:
		case c.LOGGING_OUT:
		case c.LOGOUT_SUCCESS:
		case c.LOGOUT_FAIL:
		{
			// Update user status base on action type
			let user = {status: action.type}

			return Object.assign({}, state, {user})
		}
		default:
			return state;
	}
}

//tell me why???
export default reservations