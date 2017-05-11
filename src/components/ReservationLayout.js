import React from 'react'

import StaffReadStatus from './ResvStaffReadStatus'
import Remarks from './ResvRemarks'

import AlignCenter from './helpers/AlignCenter'

class ReservationLayout extends React.Component {
	render(){

		let {reservation, order} = this.props;

		let headerClass = order == 1 ? 'reservation-header-row' : 'reservation-row';

		let oddEvenClass    = order % 2  ? 'odd-row' : 'even-row';

		let rowClass   = `flex-row pad30 ${oddEvenClass}`

		return (
			<div className={rowClass}>
				<div className="flex-column">
					<div className={headerClass}></div>
					<div className="flex-row">
						<StaffReadStatus readStatus={reservation.staff_read} />
						<div className="flex-column flex1">
							<div className="confirm-id">
								<AlignCenter>{reservation.confirm_id}</AlignCenter>
							</div>
							<h3  className="text-whit">O 14+3</h3>
						</div>
						<div className="flex-column flex1">
							<div className="timestamp">
								<AlignCenter>{(() => {
									if(reservation.date){
										return reservation.date.format('DD MMM YYYY * HH:mm');
									}else{
										return reservation.reservation_timestamp;
									}
								})()}</AlignCenter>
							</div>
							<h3  className="text-whit">T Level 2 - A1</h3>
						</div>
					</div>
				</div>
				<div className="flex-column flex1" style={{width: '200px', minWidth: '200px'}}>
					<div className={headerClass}>
						<h3>Customer</h3>
					</div>
					<h3 className="text-blue">{reservation.salutation} {reservation.first_name} {reservation.last_name}</h3>
					<h3 className="text-whit">C {reservation.phone_country_code} {reservation.phone}</h3>
					<h3 className="text-whit">M {reservation.email}</h3>
				</div>
				<div className="flex-column flex1">
					<div className={headerClass}>
						<h3>Remarks/Staff Note</h3>
					</div>
					<h3 className="text-whit">{reservation.customer_remarks}</h3>
					<h3 className="text-whit">{reservation.staff_remarks}</h3>
				</div>
				<div className="flex-column flex1" style={{maxWidth: '200px'}}>
					<div className={headerClass}>
						<h3>Status</h3>
					</div>
					<h2 className="text-blue">{reservation.status}</h2>
					{(() => {
						if(reservation.payment_status == 100){
							return (
								<h3 className="text-whit">{reservation.payment_currency} {reservation.payment_amount} PAID</h3>
							)
						}
					})()}
				</div>
				<div className="flex-column">
					<div className="text-gray self-center padHorz">&gt;</div>
				</div>
			</div>
		)
	}
}

export default ReservationLayout