import {connect} from 'react-redux'
import Login from '../components/Login'
import {updateUser, sendLoginReq} from '../actions'

const mapStateToProps = (state) => {
	let {user} = state;

	return {
		user
	}
}

const login = (dispatch) => (user) =>
					dispatch(sendLoginReq(user))
						.then(res => {
							console.log(res)
							if(res.msg == 'ok'){
								console.log('login success')
							}
							// May call next for update user
							// With user info from server
						})
						.catch(res => {
							// For fetch, FAIL CASE only happens when no internet connection...
							console.log(res, 'Please check your internet connection')

						})

const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (user) => dispatch(updateUser(user)),
		login:      login(dispatch),
	}
}
//////
export default connect(mapStateToProps, mapDispatchToProps)(Login)