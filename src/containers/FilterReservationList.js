import { connect } from 'react-redux'
import ReservationList from '../components/ReservationList'

const getVisibleTodos = (reservations, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return reservations
		case 'SHOW_COMPLETED':
			return reservations.filter(t => false)
		case 'SHOW_ACTIVE':
			return reservations.filter(t => true)
		default:
			return reservations;
	}
}

const mapStateToProps = (state) => {
	return {
		reservations: getVisibleTodos(state.reservations, state.visibilityFilter)
	}
}

console.log(connect)

const FilterResevationList = connect(
	mapStateToProps,
)(ReservationList)

export default FilterResevationList