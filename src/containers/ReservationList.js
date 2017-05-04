import {connect} from 'react-redux'
import ReservationList from '../components/ReservationList'
import {actionFetchReservations, actionUpdateReservations} from '../actions'


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



const mapDispatchToProps = (dispatch) => {
	return {
		fetchReservations: (url) => dispatch(actionFetchReservations(url)),
		updateReservations: (reservations) => dispatch(actionUpdateReservations(reservations))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationList)
/////