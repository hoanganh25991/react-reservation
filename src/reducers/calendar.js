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
    case c.INJECT_CALENDAR: {
      let { reservation_id } = action
      let { reservations } = state
      // Get the first reservation match
      let selectedReservation = reservations.filter(reservation => reservation.id === reservation_id)[0]
      if (selectedReservation) {
        let popup = deepCloneReservation(selectedReservation)
        return { ...state, popup }
      }
      // Should handle something here
      // Fail case, no reservation found
      return state
    }
    case c.SHOW_CALENDAR: {
      let { popup: currPopup } = state
      let showHideCalender = action.type
      let popup = { ...currPopup, showHideCalender }
      return { ...state, popup }
    }
    case c.HIDE_CALENDAR: {
      let { popup: currPopup } = state
      let showHideCalender = action.type
      let popup = { ...currPopup, showHideCalender }
      return { ...state, popup }
    }
    default: {
      return state
    }
  }
}
