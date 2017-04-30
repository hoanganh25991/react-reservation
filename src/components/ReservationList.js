import React from 'react'

class ReservationList extends React.Component {
	render(){
		let {reservations} = this.props;

		return reservations.map(reservation => (
			<div>
				<p>{reservation.confirm_id}</p>
				<p>{reservation.reservation_timestamp}</p>
				<p>{reservation.saluation} {reservation.first_name} {reservation.last_name}</p>
				<p>{reservation.phone_country_code} {reservation.phone}</p>
				<p>{reservation.email}</p>
			</div>
		))
	}
}

export default ReservationList