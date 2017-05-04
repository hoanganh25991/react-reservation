import React from 'react'

import Layout from './ReservationLayout'

class Reservation extends React.Component {
	render(){
		let {reservation} = this.props;
		
		return (
			<Layout />
		)
	}
}