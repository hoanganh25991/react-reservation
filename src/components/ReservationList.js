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

export default ReservationList