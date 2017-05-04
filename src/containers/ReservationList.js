import {connect} from 'react-redux'
import ReservationList from '../components/ReservationList'
import {actionUpdateReservations} from '../actions'


const filterReservations = (reservations, filters) => {
	return reservations;
}


const mapStateToProps = (state) => {
	// Base on current state of reservations, fitler_options
	// Compute filtered_reservations
	let {reservations, filters} = state;

	return {
		reservations: filterReservations(reservations, filters)
	}
}

import {fetchData} from '../actions/fetch-data'
import {POST_JSON} from '../actions/const-name'

const fetchReservations = (url) => {
	let ajax_options = {
		url,
		type: POST_JSON
	};

	return fetchData(ajax_options);
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchReservations: (url) => dispatch(fetchReservations(url)),
		updateReservations: (reservations) => dispatch(actionUpdateReservations(reservations))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationList)
/////