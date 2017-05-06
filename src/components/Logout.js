import React from 'react'

class Logout extends React.Component {
	componentWillMount(){
		// Get actions from props
		let {logout} = this.props;
		// Execute logout right at component mounted
		logout();
	}

	render() {
		// Get state from props
		let {logoutMsg} = this.props;

		return (
			<div>
				<h1>{logoutMsg}</h1>
			</div>
		)
	}
}


/**
 * Bind actions to view
 */
import {connect} from 'react-redux'

import {actionSendLogoutReq} from '../actions'

import * as c from '../actions/const-name'


const statusMsg = (status) => {
	switch(status){
		case c.LOGOUT_SUCCESS:{
			return c.LOGOUT_SUCCESS
		}
		case c.LOGOUT_FAIL:{
			return c.LOGOUT_FAIL
		}
		default:
			return 'LOGGING OUT';
	}
}

const mapStateToProps  = ({user: {status}}) => ({logoutMsg: statusMsg(status)})

const mapActionToProps = (dispatch) => {
	return {
		logout: () => dispatch(actionSendLogoutReq()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(Logout)