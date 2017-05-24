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

import Login from '../components/Login'

export default connect(mapStateToProps, mapActionToProps)(Login)