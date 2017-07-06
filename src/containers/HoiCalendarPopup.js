import { connect } from "react-redux"
import { actionInitFilter, actionSearchReservation, actionPrintReservation, actionReloadFilterByDay } from "../actions"
import CalendarPopup from "../components/CalendarPopup"

const mapActionToProps = dispatch => ({
  initFilter: () => dispatch(actionInitFilter()),
  actionSearchReservation: confirm_id => dispatch(actionSearchReservation(confirm_id)),
  actionPrintReservation: () => dispatch(actionPrintReservation()),
  actionReloadFilterByDay: () => dispatch(actionReloadFilterByDay())
})

export default connect(null, mapActionToProps)(CalendarPopup)
