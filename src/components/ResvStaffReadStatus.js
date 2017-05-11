import React from 'react'

class ResvStaffReadStatus extends React.Component {
	render() {
		let {readStatus} = this.props;

		let readStatusClass = 'self-center padHorz';
		readStatusClass     += readStatus ? ' circle-read' : ' circle-unread';

		return (
			<div className="flex-column">
				<div className={readStatusClass}></div>
			</div>
		)
	}
}

export default ResvStaffReadStatus