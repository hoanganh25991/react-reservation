import { connect } from "react-redux"
import { actionUpdateUser, actionSendLoginReq } from "../actions"
import Login from "../components/Login"

const mapStateToProps = ({ user }) => ({ user })

const mapActionToProps = dispatch => {
  return {
    updateUser: user => dispatch(actionUpdateUser(user)),
    login: () => dispatch(actionSendLoginReq())
  }
}

export default connect(mapStateToProps, mapActionToProps)(Login)
