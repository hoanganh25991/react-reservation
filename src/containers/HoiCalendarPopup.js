import { connect } from "react-redux"
import { actionSearchAvailableTime, actionCheckIndexDateArray, actionUpdateDateAndTime } from "../actions"
import CalendarPopup from "../components/CalendarPopup"
import { getCalendarTime } from "../selectors"

const mapStateToProps = state => {
  // let a = getAva(state);
  let calendarTime = getCalendarTime(state)
  //console.log(outlet);
  let { popup, checkmark } = state
  // console.log('availableDate',availableDate)
  return {
    popup,
    calendarTime,
    checkmark
  }
}
const mapActionToProps = dispatch => ({
  //   initFilter: () => dispatch(actionInitFilter()),
  actionSearchAvailableTime: () => dispatch(actionSearchAvailableTime()),
  //   actionPrintReservation: () => dispatch(actionPrintReservation()),
  actionCheckIndexDateArray: index => dispatch(actionCheckIndexDateArray(index)),
  actionUpdateDateAndTime: date => dispatch(actionUpdateDateAndTime(date))
})

export default connect(mapStateToProps, mapActionToProps)(CalendarPopup)
