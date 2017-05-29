import { connect } from "react-redux"
import { actionInitPopup } from "../actions/popup"
import Reservation from "../components/Reservation"

// const mapStateToProps = ({ user }) => ({ user })

const mapActionToProps = dispatch => ({
  initPopup: reservation_id => dispatch(actionInitPopup(reservation_id))
})

export default connect(null, mapActionToProps)(Reservation)
