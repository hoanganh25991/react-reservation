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
      let outlet_id = currPopup.outlet_id
      let { allowed_outlets } = state
      let outlet = allowed_outlets.filter(allowed_outlet => allowed_outlet.id === outlet_id)[0]
      let { addUp } = action
      let { pax } = action
      let { adult_pax } = currPopup
      let { children_pax } = currPopup
      let tolatlPax = adult_pax + children_pax
      if (tolatlPax < outlet.overall_max_pax && addUp === 1) {
        if (pax === "adult") {
          adult_pax = adult_pax + addUp
        } else {
          children_pax = children_pax + addUp
        }
      }
      if (tolatlPax > 0 && addUp === -1) {
        if (pax === "adult" && adult_pax > 0) {
          adult_pax = adult_pax + addUp
        }
        if (pax === "child" && children_pax > 0) {
          children_pax = children_pax + addUp
        }
      }
      let popup = { ...currPopup, adult_pax, children_pax }
      return { ...state, popup }
    }
    case c.UPDATE_RESERVATION_POPUP: {
      let { reservations: currReservations } = state
      let { popup } = state

      let reservations = currReservations.map(reservation => {
        if (reservation.id !== popup.id) {
          return reservation
        }
        let newR = { ...popup }
        return newR
      })

      return { ...state, reservations }
    }
    case c.HANDLE_INPUT_CHANGE: {
      let { popup: currPopup } = state
      let { popup } = state
      // let value = action.value
      switch (action.name) {
        case c.FIRST_NAME: {
          let { first_name } = currPopup
          first_name = action.value
          popup = { ...currPopup, first_name }
          return { ...state, popup }
        }
        case c.LAST_NAME: {
          let { last_name } = currPopup
          last_name = action.value
          popup = { ...currPopup, last_name }
          return { ...state, popup }
        }
        case c.PHONE_COUNTRY_CODE: {
          let { phone_country_code } = currPopup
          phone_country_code = action.value
          popup = { ...currPopup, phone_country_code }
          return { ...state, popup }
        }
        case c.PHONE: {
          let { phone } = currPopup
          phone = action.value
          popup = { ...currPopup, phone }
          return { ...state, popup }
        }
        case c.EMAIL: {
          let { email } = currPopup
          email = action.value
          popup = { ...currPopup, email }
          return { ...state, popup }
        }
        case c.CUSTOMER_REMARKS: {
          let { customer_remarks } = currPopup
          customer_remarks = action.value
          popup = { ...currPopup, customer_remarks }
          return { ...state, popup }
        }
        case c.STAFF_REMARKS: {
          let { staff_remarks } = currPopup
          staff_remarks = action.value
          popup = { ...currPopup, staff_remarks }
          return { ...state, popup }
        }
        default:
          return { ...state, popup }
      }
    }
    default: {
      return state
    }
  }
}
