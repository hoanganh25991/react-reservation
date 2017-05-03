//import {combineReducers} from 'redux'
import reservations from './reservations'


import * as c from '../actions/const-name'

// const adminPage = combineReducers({
// 	reservations,
// })

const initState = {
	reservations: [],
	filters: []
}

const adminPage = (state = initState, action) => {
	switch(action.type) {
		case c.UPDATE_RESERVATIONS:
		case c.UPDATE_RESERVATION:
		{
			return reservations(state, action);
		}
		default:
			return state;
	}
}
////////
export default adminPage

