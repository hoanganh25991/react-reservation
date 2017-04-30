import React from 'react'

class ReservationList extends React.Component {
	componentDidMount(){
		let  {fetchReservations, updateReservations} = this.props;
		
		let url = 'reservations';
		
		fetchReservations(url)
			.then(reservations => {
				//console.log(reservations);
				// Update state reservations
				updateReservations(reservations);
			});
	}

	render(){
		let {reservations} = this.props;

		return (
			<div>
				<h1>Reservations</h1>
				<ul>{reservations.map(reservation =>
					<li key={reservation.id}>
						<span>{reservation.confirm_id}</span>
						<span>{reservation.reservation_timestamp}</span>
						<span>{reservation.saluation} {reservation.first_name} {reservation.last_name}</span>
						<span>{reservation.phone_country_code} {reservation.phone}</span>
						<span>{reservation.email}</span>
					</li>
				)}</ul>
			</div>
		)
	}
}

export default ReservationList