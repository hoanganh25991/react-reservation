import * as c from "../actions/const-name"
import moment from "moment"

const deepCloneReservation = reservation => {
  let popup = { ...reservation }
  // Reparse to create completely new obj
  popup.date = moment(popup.reservation_timestamp, "YYYY-MM-DD HH:mm:ss")
  return popup
}

export default (state, action) => {
  // console.log("action", action)
  switch (action.type) {
    case c.SHOW_CALENDAR: {
      let { popup: currPopup } = state
      let showHideCalendar = action.type
      let popup = { ...currPopup, showHideCalendar }
      return { ...state, popup }
    }
    case c.HIDE_CALENDAR: {
      let { popup: currPopup } = state
      let showHideCalendar = action.type
      let popup = { ...currPopup, showHideCalendar }
      return { ...state, popup }
    }
    case c.INJECT_CALENDAR: {
      let availableDate = action.available_time
      let payment_authorization = action.paymentAuthorization
      let checkmark = 0
      let calendarDateIndex = 0
      return { ...state, calendarDateIndex, availableDate, checkmark, payment_authorization }
    }
    case c.CHECK_INDEX_DATE_ARRAY: {
      let calendarDateIndex = action.index
      return { ...state, calendarDateIndex }
    }
    case c.CHECKMARK_BTN_SAVE: {
      let checkmark = action.i
      return { ...state, checkmark }
    }
    case c.UPDATE_DATE_AND_TIME: {
      let { popup: currPopup } = state
      let reservation_timestamp = action.date
      let date = moment(reservation_timestamp, "YYYY-MM-DD HH:mm:ss")
      let checkmark = 0
      let popup = { ...currPopup, reservation_timestamp, date }
      return { ...state, popup, checkmark }
    }
    default: {
      return state
    }
  }
}
