import { connect } from "react-redux"
import { actionSendLogoutReq } from "../actions"
import * as c from "../actions/const-name"
import Logout from "../components/Logout"

const statusMsg = status => {
  switch (status) {
    case c.LOGOUT_SUCCESS: {
      return c.LOGOUT_SUCCESS
    }
    case c.LOGOUT_FAIL: {
      return c.LOGOUT_FAIL
    }
    default:
      return c.LOGGING_OUT
  }
}

const mapStateToProps = ({ user: { status } }) => ({
  logoutMsg: statusMsg(status)
})

const mapActionToProps = dispatch => ({
  logout: () => dispatch(actionSendLogoutReq())
})

export default connect(mapStateToProps, mapActionToProps)(Logout)
