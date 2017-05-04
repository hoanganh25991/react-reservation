import {connect} from 'react-redux'
import Login from '../components/Login'
import {actionUpdateUser, sendLoginReq} from '../actions'

const mapStateToProps = (state) => {
	let {user} = state;

	return {
		user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (user) => dispatch(actionUpdateUser(user)),
		login:      () => dispatch(sendLoginReq()),
	}
}
//////
export default connect(mapStateToProps, mapDispatchToProps)(Login)