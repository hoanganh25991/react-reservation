import {connect} from 'react-redux'
import Login from '../components/Login'
import {actionUpdateUser, actionSendLoginReq} from '../actions'

const mapStateToProps = (state) => {
	let {user} = state;

	return {
		user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (user) => dispatch(actionUpdateUser(user)),
		login:      () => dispatch(actionSendLoginReq()),
	}
}
//////
export default connect(mapStateToProps, mapDispatchToProps)(Login)