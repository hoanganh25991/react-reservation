import {POST_FORM, POST_JSON, fetchData} from './fetch-data'


export const UPDATE_RESERVATION = 'UPDATE_RESERVATION'

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const sendLoginReq = ({username, password}) => {
	console.log('send success');
}

export const fetchReservations = (dispatch) => {
	let ajax_options = {
		url: 'http://reservation.dev/api/admin/reservations',
		type: POST_JSON
	};

	return dispatch(fetchData(ajax_options));
}