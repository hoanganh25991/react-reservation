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
    case c.INJECT_POPUP_DATA: {
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
    case c.SHOW_POPUP: {
      let { popup: currPopup } = state
      let showHide = action.type
      let popup = { ...currPopup, showHide }
      return { ...state, popup }
    }
    case c.HIDE_POPUP: {
      let { popup: currPopup } = state
      let showHide = action.type
      let popup = { ...currPopup, showHide }
      return { ...state, popup }
    }
    case c.UPDATE_STATUS: {
      let { popup: currPopup } = state
      let status = action.status
      let popup = { ...currPopup, status }
      return { ...state, popup }
    }
    case c.ADD_UP: {
      let { popup: currPopup } = state
      console.log("let {popup} = state", { currPopup })
      let outlet_id = currPopup.outlet_id

      let { allowed_outlets } = state
      console.log("let {allowed_outlets} = state", allowed_outlets)
      let outlet = allowed_outlets.filter(allowed_outlet => allowed_outlet.id === outlet_id)[0]

      // let {outlet} = state
      console.log("let {outlet} = state", outlet)
      let addUp = action.addUp
      let adult_pax = currPopup.adult_pax
      if (adult_pax < outlet.overall_max_pax) {
        adult_pax = currPopup.adult_pax + addUp
      }
      let popup = { ...currPopup, adult_pax }
      return { ...state, popup }
    }
    default: {
      return state
    }
  }
}
