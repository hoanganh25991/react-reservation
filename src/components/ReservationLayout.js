import React from 'react'

import StaffReadStatus from './ResvStaffReadStatus'
import Remarks from './ResvRemarks'

import AlignCenter from './helpers/AlignCenter'

class ReservationLayout extends React.Component {
	render(){

		let {reservation, order} = this.props;

		let headerClass = order == 1 ? 'reservation-header-row' : 'reservation-row';

		let rowClass    = order % 2  ? 'odd-row' : 'even-row';

		let rootClass   = `flex-row pad30 ${rowClass}`

		return (
			<div className={rootClass}>
				<div className="flex-column">
					<div className={headerClass}></div>
					<div className="flex-row">
						<StaffReadStatus />
						<div className="flex-column flex1">
							<div className="confirm-id">
								<AlignCenter>5GC72EO</AlignCenter>
							</div>
							<h3  className="text-whit">O 14+3</h3>
						</div>
						<div className="flex-column flex1">
							<div className="timestamp">
								<AlignCenter>24 Apr 2017 * 15:30</AlignCenter>
							</div>
							<h3  className="text-whit">T Level 2 - A1</h3>
						</div>
					</div>
				</div>
				<div className="flex-column flex1">
					<div className={headerClass}>
						<h3>Customer</h3>
					</div>
					<h3 className="text-blue">Mr. Torin Nguyen</h3>
					<h3 className="text-whit">C (+65) 903865657</h3>
					<h3 className="text-whit">M torinnguyen@gmail.co</h3>
				</div>
				<div className="flex-column flex1">
					<div className={headerClass}>
						<h3>Remarks/Staff Note</h3>
					</div>
					<Remarks />
				</div>
				<div className="flex-column flex1">
					<div className={headerClass}>
						<h3>Status</h3>
					</div>
					<h2 className="text-blue">RESERVED</h2>
					<h2 className="text-blue">$134 PAID</h2>
				</div>
				<div className="flex-column">
					<div className="text-gray self-center padHorz">&gt;</div>
				</div>
			</div>
		)
	}
}

export default ReservationLayout