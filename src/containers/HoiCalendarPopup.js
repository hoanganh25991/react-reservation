import { connect } from "react-redux"
import {
  actionSearchAvailableTime,
  actionCheckIndexDateArray,
  actionUpdateDateAndTime,
  actionHideCalendarPopup
} from "../actions"
import CalendarPopup from "../components/CalendarPopup"
import { getCalendarTime } from "../selectors"

const mapStateToProps = state => {
  // let a = getAva(state);
  let calendarTime = getCalendarTime(state)
  //console.log(outlet);
  let { popup, checkmark, payment_authorization } = state
  // console.log('availableDate',availableDate)
  return {
    popup,
    calendarTime,
    checkmark,
    payment_authorization
  }
}
const mapActionToProps = dispatch => ({
  //   initFilter: () => dispatch(actionInitFilter()),
  actionSearchAvailableTime: () => dispatch(actionSearchAvailableTime()),
  //   actionPrintReservation: () => dispatch(actionPrintReservation()),
  actionCheckIndexDateArray: index => dispatch(actionCheckIndexDateArray(index)),
  actionUpdateDateAndTime: date => dispatch(actionUpdateDateAndTime(date)),
  actionHideCalendarPopup: () => dispatch(actionHideCalendarPopup())
})

export default connect(mapStateToProps, mapActionToProps)(CalendarPopup)
