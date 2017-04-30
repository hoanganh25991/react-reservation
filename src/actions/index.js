export {POST_FORM, POST_JSON, fetchData} from './fetch-data'
import {POST_FORM, POST_JSON, fetchData} from './fetch-data'

export const UPDATE_RESERVATION  = 'UPDATE_RESERVATION';
export const UPDATE_RESERVATIONS = 'UPDATE_RESERVATIONS';

export const sendLoginReq = ({user_name, password}) => {
	//console.log('send success');
	let ajax_options = {
		url: 'login',
		type: POST_FORM,
		data :{
			user_name,
			password
		}
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
export const updateReservations = (reservations) => {
	return {
		type: UPDATE_RESERVATIONS,
		reservations
	}
}