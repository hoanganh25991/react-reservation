import { connect } from "react-redux"
import {
  actionInitFilter,
  actionSearchReservation,
  actionPrintReservation,
  actionReloadFilterByDay,
  actionShowHideNewPopup
} from "../actions"
import HeaderAction from "../components/HeaderAction"

const mapActionToProps = dispatch => ({
  initFilter: () => dispatch(actionInitFilter()),
  actionSearchReservation: confirm_id => dispatch(actionSearchReservation(confirm_id)),
  actionPrintReservation: () => dispatch(actionPrintReservation()),
  actionReloadFilterByDay: () => dispatch(actionReloadFilterByDay()),
  actionShowHideNewPopup: () => dispatch(actionShowHideNewPopup())
})

export default connect(null, mapActionToProps)(HeaderAction)
