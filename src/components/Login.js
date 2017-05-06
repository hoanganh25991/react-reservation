import React from 'react'

class Login extends React.Component {
	render(){
		// Get state
		let {user} = this.props;
		// Get action
		let {login, updateUser} = this.props;

		return (
			<form onSubmit={(e) => {
				e.preventDefault()
				login()
			}} >
				<input type="text"
				       placeholder="username"
				       value={user.user_name}
				       onChange={(e) => updateUser({user_name: e.target.value})}/>
				<input type="password"
				       placeholder="password"
				       value={user.password} 
				       onChange={(e) => updateUser({password:  e.target.value})}/>
				<button>Login</button>
			</form>
		)
	}
}


/**
 * Bind actions to view
 */
import {connect} from 'react-redux'

import {actionUpdateUser, actionSendLoginReq} from '../actions'

/**
 * Define which is stateToProps
 * Define which is disptachToProps
 * @param user
 */

const mapStateToProps  = ({user}) => ({user})

const mapActionToProps = (dispatch) => {
	return {
		updateUser: (user) => dispatch(actionUpdateUser(user)),
		login:      ()     => dispatch(actionSendLoginReq()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(Login)