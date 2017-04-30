import React from 'react'

class ReservationList extends React.Component {
	componentDidMount(){
		let  {fetchReservations} = this.props;
		
		fetchReservations()
			.then(reservations => {
				console.log(reservations);
			});
	}

	render(){
		let {reservations} = this.props;

		return (
			<div>
				<h1>Reservations</h1>
				<ul>{reservations.map(reservation =>
					<li key={reservation.id}>
						<p>{reservation.confirm_id}</p>
						<p>{reservation.reservation_timestamp}</p>
						<p>{reservation.saluation} {reservation.first_name} {reservation.last_name}</p>
						<p>{reservation.phone_country_code} {reservation.phone}</p>
						<p>{reservation.email}</p>
					</li>
				)}</ul>
			</div>
		)
	}
}

export default ReservationList