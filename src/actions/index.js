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
import * as c from './const-name'

import {fetchData} from '../actions/fetch-data'

export const actionSendLoginReq = () => {
	return (dispatch, getState) => {
		// Access user from current state
		let {user} = getState();

		let ajax_options = {
			url: 'login',
			data: user,
			type: c.POST_FORM
		}

		dispatch({type: c.LOGGING_IN})
		
		dispatch(fetchData(ajax_options))
			.then(res => {
				console.log(res);
				if(res.msg === 'ok'){
					console.log('login success')
					//login success
					dispatch({type: c.LOGIN_SUCCESS})

					return;
				}

				dispatch({type: c.LOGIN_FAIL})
			})
			.catch(res => {
				// Fetch FAIL ONLY no internet connection
				console.log(res);
				dispatch({type: c.LOGIN_FAIL})
			});
	}
}

export const actionSendLogoutReq = () => {
	return (dispatch) => {
		// build ajax option
		let ajax_options = {
			url: 'logout',
			data: {},
			type: c.POST_FORM
		}

		dispatch({type: c.LOGGING_OUT})

		dispatch(fetchData(ajax_options))
			.then(res => {
				console.log(res);
				if(res.msg === 'ok'){
					console.log('logout success')
					//login success
					dispatch({type: c.LOGOUT_SUCCESS})

					return;
				}

				dispatch({type: c.LOGOUT_FAIL})
			})
			.catch(res => {
				// Fetch FAIL ONLY no internet connection
				console.log(res);
				dispatch({type: c.LOGOUT_FAIL})
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
export const actionUpdateReservation = (reservation) => {
	return {
		type: c.UPDATE_RESERVATION,
		reservation
	}
}

export const actionUpdateReservations = (reservations) => {
	return {
		type: c.UPDATE_RESERVATIONS,
		reservations
	}
}

export const actionAssignDateOnReservations = () => {
	return {
		type: c.ASSIGN_DATE_ON_RESERVATIONS
	}
}

export const actionFetchReservations = (url) => {
	return (dispatch) => {
		let ajax_options = {
			url,
			type: c.POST_JSON
		};

		dispatch(fetchData(ajax_options))
			.then(res => {
				console.log(res)
				// dirty check
				if(res){
					let reservations = res;

					dispatch(actionUpdateReservations(reservations))
					
					dispatch(actionAssignDateOnReservations())
				}
			})
			.catch(res => {
				console.log(res)
				
				dispatch({type: c.FETCH_RESERVATIONS_FAIL})
			})
	}
}




/*
 |--------------------------------------------------------------------------
 | User
 |--------------------------------------------------------------------------
 | User support login
 |
 */
export const actionUpdateUser = (user) => {
	return {
		type: c.UPDATE_USER,
		user
	}
}

/*
 |--------------------------------------------------------------------------
 | Filter
 |--------------------------------------------------------------------------
 | User support login
 |
 */

export const actionToggleFilterByDay = (day) => {
	return {
		type: c.TOGGLE_FILTER_DAY,
		day
	}
}

// Toggle pick a date
export const actionToggleInputPickADate = () => {
	return {
		type: c.TOGGLE_INPUT_PICK_A_DATE
	}
}




 