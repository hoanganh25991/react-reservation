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
import {LOGIN_SUCCESS} from './const-name'
export const actionLoginSuccess = () => {
	return {
		type: LOGIN_SUCCESS
	}
}

import {POST_FORM} from '../actions/const-name'
import {fetchData} from '../actions/fetch-data'
export const sendLoginReq = () => {
	return (dispatch, getState) => {
		let {user} = getState();

		let ajax_options = {
			url: 'login',
			data: user,
			type: POST_FORM
		}

		dispatch(fetchData(ajax_options))
			.then(res => {
				console.log(res);
				if(res.msg === 'ok'){
					console.log('login success')
					//login success
					dispatch(actionLoginSuccess())
				}
			})
			.catch(res => {
				// Fetch FAIL ONLY no internet connection
				console.log(res);
			});
	}
}




/*
 |--------------------------------------------------------------------------
 | Fetch data
 |--------------------------------------------------------------------------
 | Re-export what from fetch data
 |
 */
import {UPDATE_RESERVATION, UPDATE_RESERVATIONS} from './const-name'

export const actionUpdateReservation = (reservation) => {
	return {
		type: UPDATE_RESERVATION,
		reservation
	}
}

export const actionUpdateReservations = (reservations) => {
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

export const actionUpdateUser = (user) => {
	return {
		type: UPDATE_USER,
		user
	}
}