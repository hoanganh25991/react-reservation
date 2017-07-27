import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"
import { actionFetchReservationsByDay } from "../actions/reservations"
export const actionShowNewPopup = () => ({ type: c.SHOW_NEW_POPUP })
export const actionHideNewPopup = () => ({ type: c.HIDE_NEW_POPUP })

export const actionInitNewPopup = () => ({ type: c.INIT_NEW_POPUP })
export const actionShowHideNewPopup = () => {
  return dispatch => {
    // dispatch({ type: c.THUNK_FETCH_AVAILABLE_TIME })
    dispatch(actionInitNewPopup())
    dispatch(actionShowNewPopup())
    // dispatch(actionSearchAvailableTime())
  }
}

export const actionUpdatePaymentAmount = () => ({ type: c.UPDATE_PAYMENT_AMOUNT })

const actionUpdateReservations = reservations => ({
  type: c.UPDATE_RESERVATIONS,
  reservations
})

export const actionNewReservationPopup = sms_message_on_reserved => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_CREATE_RESERVATION_POPUP })
    dispatch({ type: c.CREATE_RESERVATION_POPUP, sms_message_on_reserved })

    let { popup, filterByDay, outlet_id } = getState()
    let salutation = popup.salutation
    let first_name = popup.first_name
    let last_name = popup.last_name
    let phone_country_code = popup.phone_country_code
    let phone = popup.phone
    let email = popup.email
    let adult_pax = popup.adult_pax
    let children_pax = popup.children_pax
    let reservation_timestamp = popup.reservation_timestamp
    let send_sms_confirmation = popup.send_sms_confirmation
    let payment_required = popup.payment_required
    let payment_amount = popup.payment_amount
    let customer_remarks = popup.customer_remarks
    let staff_remarks = popup.staff_remarks
    let sms_message_on_reserved = popup.sms_message_on_reserved
    // Build ajax options
    let ajax_options = {
      url: c.END_POINT_RESERVATIONS,
      data: {
        salutation,
        first_name,
        last_name,
        phone_country_code,
        phone,
        email,
        adult_pax,
        children_pax,
        reservation_timestamp,
        send_sms_confirmation,
        payment_required,
        payment_amount,
        customer_remarks,
        staff_remarks,
        outlet_id,
        sms_message_on_reserved,
        type: c.AJAX_CREATE_NEW_RESERVATION
      },
      type: c.POST_JSON
    }
    dispatch(fetchData(ajax_options)).then(res => {
      if (res.statusCode === 200) {
        let { data: { reservation } } = res
        dispatch(actionHideNewPopup())
        dispatch(actionFetchReservationsByDay({ day: filterByDay }))
      }
      if (res.statusCode === 422) {
        let msg = `${res.statusMsg}`
        window.alert(msg)
      }
    })
  }
}
