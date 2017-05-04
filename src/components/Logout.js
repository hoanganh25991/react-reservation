import React from 'react'

class Logout extends React.Component {
	componentWillMount(){
		let {logout} = this.props;
		// Execute logout right at component mounted
		logout();
	}

	render() {
		let {logoutMsg} = this.props;

		return (
			<div>
				<h1>{logoutMsg}</h1>
			</div>
		)
	}
}

export default Logout