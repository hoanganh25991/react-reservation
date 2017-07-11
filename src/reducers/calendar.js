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
      console.log("date", availableDate)
      // console.log(Object.keys(availableDate))
      // // console.log(Object.keys(date)[0])
      // let availableHour = Object.keys(availableDate).map(key => availableDate[key])
      // console.log(availableHour)

      // Fail case, no reservation found
      return { ...state, availableDate }
    }
    default: {
      return state
    }
  }
}
