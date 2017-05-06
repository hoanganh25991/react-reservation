import React from 'react'

import Reservation from './Reservation'

class ReservationList extends React.Component {
	componentDidMount(){
		let  {fetchReservations} = this.props;

		let url = 'reservations';

		fetchReservations(url)
	}

	render(){
		let {reservations} = this.props;

		return (
			<div>
				<div className="flex-row"></div>
				{reservations.map((reservation, index) =>
					<Reservation key={reservation.id} order={index + 1} reservation={reservation}/>
				)}
			</div>
		)
	}
}

/**
 * Bind actions
 */
import {connect} from 'react-redux'

import {actionFetchReservations, actionUpdateReservations} from '../actions'


const filterReservations = (reservations, filters) => {
	return reservations;
}


const mapStateToProps  = ({reservations, filters}) => ({reservations: filterReservations(reservations, filters)})

const mapActionToProps = (dispatch) => {
	return {
		fetchReservations:  (url)          => dispatch(actionFetchReservations(url)),
		updateReservations: (reservations) => dispatch(actionUpdateReservations(reservations))
	}
}

export default connect(mapStateToProps, mapActionToProps)(ReservationList)