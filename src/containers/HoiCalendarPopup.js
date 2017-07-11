import { connect } from "react-redux"
import { actionSearchAvailableTime } from "../actions"
import CalendarPopup from "../components/CalendarPopup"
import { getCalendarTime } from "../selectors"

const mapStateToProps = state => {
  // let a = getAva(state);
  let calendarTime = getCalendarTime(state)
  //console.log(outlet);
  let { popup } = state
  // console.log('availableDate',availableDate)
  return {
    popup,
    calendarTime
  }
}
const mapActionToProps = dispatch => ({
  //   initFilter: () => dispatch(actionInitFilter()),
  actionSearchAvailableTime: () => dispatch(actionSearchAvailableTime())
  //   actionPrintReservation: () => dispatch(actionPrintReservation()),
  //   actionReloadFilterByDay: () => dispatch(actionReloadFilterByDay())
})

export default connect(mapStateToProps, mapActionToProps)(CalendarPopup)
