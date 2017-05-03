import React from 'react'
import { connect } from 'react-redux'


class Logout extends React.Component {
	componentWillMount(){
		let {logout} = this.props;

		logout()
			.then(res => {
				console.log(res)
			})
	}

	render() {
		return (
			<div>
				<h1>Logout</h1>
			</div>
		)
	}
}

export default Logout