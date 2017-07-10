import { connect } from "react-redux"
import { actionSearchAvailableTime } from "../actions"
import CalendarPopup from "../components/CalendarPopup"

const mapStateToProps = ({ popup }) => {
  //console.log(outlet);

  return {
    popup
  }
}
const mapActionToProps = dispatch => ({
  //   initFilter: () => dispatch(actionInitFilter()),
  actionSearchAvailableTime: () => dispatch(actionSearchAvailableTime())
  //   actionPrintReservation: () => dispatch(actionPrintReservation()),
  //   actionReloadFilterByDay: () => dispatch(actionReloadFilterByDay())
})

export default connect(mapStateToProps, mapActionToProps)(CalendarPopup)
