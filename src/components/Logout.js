import React from 'react'
import { connect } from 'react-redux'

import {sendLogoutReq} from '../actions'


class Logout extends React.Component {
	componentDidMount() {
		let {dispatch} = this.props;

		dispatch(sendLogoutReq())
			.then(res => console.log(res));
	}

	render() {
		return (
			<div>
				<h1>Logout</h1>
			</div>
		)
	}
}

Logout = connect()(Logout);

export default Logout