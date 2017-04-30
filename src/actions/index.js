export {POST_FORM, POST_JSON, fetchData} from './fetch-data'

export const UPDATE_RESERVATION  = 'UPDATE_RESERVATION';
export const UPDATE_RESERVATIONS = 'UPDATE_RESERVATIONS';

export const sendLoginReq = ({username, password}) => {
	console.log('send success');
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