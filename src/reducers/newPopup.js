import * as c from "../actions/const-name"
import moment from "moment"

export default (state, action) => {
  // console.log("action", action)
  switch (action.type) {
    case c.INIT_NEW_POPUP: {
      let { popup: currPopup } = {}
      let { outlet_id } = state
      let { payment_authorization } = state
      let salutation = "Mr."
      let first_name = ""
      let last_name = ""
      let phone_country_code = 65
      let phone = ""
      let email = ""
      let adult_pax = 0
      let children_pax = 0
      let reservation_timestamp = moment().format("YYYY-MM-DD HH:mm:ss")
      let date = moment(reservation_timestamp, "YYYY-MM-DD HH:mm:ss")
      let send_sms_confirmation = true
      let payment_required = 0
      let payment_amount = payment_authorization.deposit
      let customer_remarks = null
      let staff_remarks = null
      let popup = {
        ...currPopup,
        salutation,
        first_name,
        last_name,
        phone_country_code,
        phone,
        email,
        adult_pax,
        children_pax,
        reservation_timestamp,
        date,
        send_sms_confirmation,
        payment_required,
        payment_amount,
        customer_remarks,
        staff_remarks,
        outlet_id
      }
      return { ...state, popup }
    }
    case c.SHOW_NEW_POPUP: {
      let { popup: currPopup } = state
      let showHide = action.type
      let popup = { ...currPopup, showHide }
      return { ...state, popup }
    }
    case c.HIDE_NEW_POPUP: {
      let { popup: currPopup } = state
      let showHide = action.type
      let popup = { ...currPopup, showHide }
      return { ...state, popup }
    }
    case c.UPDATE_PAYMENT_AMOUNT: {
      let { payment_authorization } = state
      let { popup: currPopup } = state
      if (payment_authorization.deposit !== null) {
        let payment_amount = payment_authorization.deposit
        let payment_required = 1
        let popup = { ...currPopup, payment_amount, payment_required }
        return { ...state, popup }
      } else {
        let payment_amount = payment_authorization.deposit
        let payment_required = 0
        let popup = { ...currPopup, payment_amount, payment_required }
        return { ...state, popup }
      }
    }
    case c.CREATE_RESERVATION_POPUP: {
      let { popup: currPopup } = state
      let sms_message_on_reserved = action.sms_message_on_reserved
      let popup = { ...currPopup, sms_message_on_reserved }
      return { ...state, popup }
    }
    default: {
      return state
    }
  }
}
