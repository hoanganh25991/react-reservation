import React from 'react'

import StaffReadStatus from './ResvStaffReadStatus'
import CustomerRemarks from './ResvCustomerRemarks'

import './ReservationLayout.css'

class ReservationLayout extends React.Component {
	render(){

		return (
			<div className="flex-row odd-row">
				<StaffReadStatus />
				<div style={{flex: 1}}>
					<div className="flex-column full">
						<div className="confirm-id flex1">5GC72EO</div>
						<h3  className="text-whit flex1">O 14+3</h3>
					</div>
				</div>
				<div style={{flex: 1.5}}>
					<div className="flex-column full">
						<div className="timestamp flex1">24 Apr 2017 * 15:30</div>
						<h3  className="text-whit flex1">T Level 2 - A1</h3>
					</div>
				</div>
				<div style={{flex: 1.5}}>
					<div className="flex-column">
						<div style={{flex: 1}}>
							<h3 className="text-blue">Mr. Torin Nguyen</h3>
						</div>
						<div style={{flex: 1}}>
							<h3 className="text-whit">C (+65) 903865657</h3>
						</div>
						<div style={{flex: 1}}>
							<h3 className="text-whit">M torinnguyen@gmail.com</h3>
						</div>
					</div>
				</div>
				<div style={{flex: 1.75}}>
					<CustomerRemarks />
				</div>
				<div style={{flex: 1}}>
					<div className="flex-column full">
						<h2 className="text-blue">RESERVED</h2>
						<h2 className="text-blue">$134 PAID</h2>
					</div>
				</div>
				<div className="flex-column">
					<div className="text-gray self-center padHorz">&gt;</div>
				</div>
			</div>
		)
	}
}


export default ReservationLayout