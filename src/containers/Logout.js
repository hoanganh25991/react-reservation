import {connect} from 'react-redux'
import Logout from '../components/Logout'
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

const mapStateToProps = (state) => {
	let {user} = state;
	// Get status from user
	let {status} = user;
	
	return {
		logoutMsg: statusMsg(status)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(actionSendLogoutReq()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)