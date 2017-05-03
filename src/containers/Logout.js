import {connect} from 'react-redux'
import Logout from '../components/Logout'
import {sendLogoutReq} from '../actions'


const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(sendLogoutReq()),
	}
}

export default connect(null, mapDispatchToProps)(Logout)