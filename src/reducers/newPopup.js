import * as c from "../actions/const-name"
import moment from "moment"

export default (state, action) => {
  // console.log("action", action)
  switch (action.type) {
    case c.INIT_NEW_POPUP: {
      let { popup: currPopup } = {}
      let { outlet_id } = state
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
      let payment_amount = null
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
    default: {
      return state
    }
  }
}
