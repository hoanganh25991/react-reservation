import { connect } from 'react-redux'
import ReservationList from '../components/ReservationList'
import {fetchReservations} from '../actions'


const getVisibleTodos = (reservations, filter_options) => {
	switch (filter_options) {
		default:
			return reservations;
	}
}

const mapStateToProps = (state) => {
	// Base on current state of reservations, fitler_options
	// Compute filtered_reservations
	let {reservations, filter_options} = state;

	return {
		reservations: getVisibleTodos(reservations, filter_options)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchReservations: () => {return dispatch(fetchReservations)}
	}
}

const FilterReservationList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ReservationList)

export default FilterReservationList