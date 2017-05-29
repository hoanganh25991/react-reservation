import { connect } from "react-redux"
import { actionInitPopup } from "../actions/popup"
import Reservation from "../components/Reservation"

// const mapStateToProps = ({ user }) => ({ user })

const mapActionToProps = dispatch => ({
  initPopup: () => dispatch(actionInitPopup())
})

export default connect(null, mapActionToProps)(Reservation)
