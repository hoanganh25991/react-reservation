import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"
import { getOutlet } from "../selectors"
// import { actionUpdateReservations } from "../actions"
export const actionTogglePopup = () => ({ type: c.TOGGLE_POPUP })
export const actionShowPopup = () => ({ type: c.SHOW_POPUP })
export const actionHidePopup = () => ({ type: c.HIDE_POPUP })
export const actionInjectPopupData = reservation_id => ({ type: c.INJECT_POPUP_DATA, reservation_id })
//
//
//
// init popup when clicked
export const actionInitPopup = reservation_id => {
  return dispatch => {
    dispatch({ type: c.THUNK_INIT_POPUP })
    dispatch(actionInjectPopupData(reservation_id))
    dispatch(actionShowPopup())
  }
}

export const actionEditCustomerInfo = ({ customer_info }) => ({ type: c.EDIT_CUSTOMER_INFO, customer_info })

export const actionUpdatePax = (delta, which_pax) => ({ type: c.UPDATE_PAX, delta, which_pax })

// export const toggle

export const actionUpdatePopupStatus = status => ({ type: c.UPDATE_STATUS, status })

// add and remove adult

export const actionAddUp = (addUp, pax) => ({ type: c.ADD_UP, addUp, pax })

// handle input and textarea change

export const actionUpdateName = (name, value) => ({ type: c.HANDLE_INPUT_CHANGE, name, value })

// update popup reservation ({ type: c.UPDATE_RESERVATION_POPUP })
const actionUpdateReservations = reservations => ({
  type: c.UPDATE_RESERVATIONS,
  reservations
})

export const actionUpdateReservation = () => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_UPDATE_RESERVATION })
    dispatch({ type: c.UPDATE_RESERVATION_POPUP })

    let { outlet_id, allowed_outlets, reservations } = getState()
    // Build ajax options
    let ajax_options = {
      url: c.END_POINT_RESERVATIONS,
      data: { outlet_id, reservations, type: c.AJAX_UPDATE_RESERVATIONS },
      type: c.POST_JSON
    }
    dispatch(fetchData(ajax_options)).then(res => {
      if (res.statusCode === 200) {
        let { data: { reservations } } = res
        dispatch(actionUpdateReservations(reservations))
        dispatch(actionHidePopup())
      }
      if (res.statusCode === 422) {
        let msg = `${res.statusMsg}`
        window.alert(msg)
      }
    })
  }
}

export const actionUpdatePaymentStatus = payment_status => {
  return dispatch => {
    dispatch({ type: c.UPDATE_PAYMENT_STATUS, payment_status })
    dispatch(actionUpdateReservation())
  }
}

export const actionSendReminder = confirm_id => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_SEND_REMINDER })
    let state = getState()
    let { outlet_id, reservations } = state
    let ajax_options = {
      url: c.END_POINT_RESERVATIONS,
      data: { outlet_id, confirm_id, type: c.AJAX_SEND_REMINDER_SMS_ON_RESERVATION },
      type: c.POST_JSON
    }
    dispatch(fetchData(ajax_options)).then(res => {
      // console.log('res', res)
      dispatch({ type: c.SEND_REMINDER })
    })
  }
}
