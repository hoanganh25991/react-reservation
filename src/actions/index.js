/**
 * Store action in page
 * How to build an action
 * call function name like
 * i want to disptach updateReservation
 * just call updateReservation(reservation) 
 * //of course, please give me data, to send
 * // internal, this function build an action obj as
 * {
 *      type: UPDATE_RESERVATION,
 *      reservation: reservation
 * }
 * 
 */

//import fetch data function
//which help to fetch rather than right raw function
//fetch data wrap servarl dispatch inside
//just call it, use it to fetch
//don't care what inside
import {POST_FORM} from './const-name'
import {fetchData} from './fetch-data'

/**
 * Dispatch in this wat is DISPATCH AS FUNCTION
 * If function not receive a (dispatch, getState) from middleware thunk
 * NO PROBLME, just go ahead, and do what you want,
 * like you are execute normal function 
 * @param user_name
 * @param password
 */
export const sendLoginReq = ({user_name, password}) => {
	//console.log('send success');
	let ajax_options = {
		url: 'login',
		type: POST_FORM,
		data: {user_name, password}
	};

	// Dispatch as function
	// Don't need to care what happens to fetchData
	// It will do sevaral things like show loading dialog
	// Or hide when need, when data received, do some funny things
	// XXX
	return fetchData(ajax_options);
};

export const sendLogoutReq = () => {
	//console.log('send success');
	let ajax_options = {
		url: 'logout',
		type: POST_FORM,
		data: {}
	};

	return fetchData(ajax_options);
};

/*
 |--------------------------------------------------------------------------
 | Fetch data
 |--------------------------------------------------------------------------
 | Re-export what from fetch data
 |
 */
import {UPDATE_RESERVATION, UPDATE_RESERVATIONS} from './const-name'

export const updateReservation = (reservation) => {
	return {
		type: UPDATE_RESERVATION,
		reservation
	}
}

export const updateReservations = (reservations) => {
	return {
		type: UPDATE_RESERVATIONS,
		reservations
	}
}

/*
 |--------------------------------------------------------------------------
 | User
 |--------------------------------------------------------------------------
 | User support login
 |
 */
import {UPDATE_USER} from './const-name'

export const updateUser = (user) => {
	return {
		type: UPDATE_USER,
		user
	}
}