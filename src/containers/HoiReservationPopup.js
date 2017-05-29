import { connect } from "react-redux"
import { actionUpdateUser, actionSendLoginReq } from "../actions"
import ReservationPopup from "../components/ReservationPopup"

const mapStateToProps = ({ popup }) => ({ popup })

const mapActionToProps = dispatch => {
  return {
    // updateUser: user => dispatch(actionUpdateUser(user)),
    // login: () => dispatch(actionSendLoginReq())
  }
}

export default connect(mapStateToProps, mapActionToProps)(ReservationPopup)
