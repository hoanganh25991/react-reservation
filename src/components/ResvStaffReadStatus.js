import React from 'react'

import './ResvStaffReadStatus.css'

class ResvStaffReadStatus extends React.Component {
	render() {
		let {read} = this.props;

		let readStatusClass = 'self-center padHorz';
		readStatusClass     += read ? ' circle-read' : ' circle-unread';
		//test
		readStatusClass = 'self-center padHorz circle-read';

		return (
			<div className="flex-column">
				<div className={readStatusClass}></div>
			</div>
		)
	}
}

export default ResvStaffReadStatus