import { connect } from "react-redux"
import { actionSendLogoutReq } from "../actions"
//import * as c from "../actions/const-name"
import Logout from "../components/Logout"

const mapStateToProps = ({ user }) => ({ user })

const mapActionToProps = dispatch => ({
  logout: () => dispatch(actionSendLogoutReq())
})

export default connect(mapStateToProps, mapActionToProps)(Logout)
