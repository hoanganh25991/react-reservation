/**
 * Store action in page
 * How to build an action
 * Call function name, like
 * i want to disptach updateReservation
 * just call updateReservation(reservation) 
 * //of course, please give me data, to send
 * // internal, this function build an action obj as
 * {
 *      type: UPDATE_RESERVATION,
 *      reservation: reservation
 * }
 */
import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"
// Explicit call out thunk before excecute
const actionThunkSendLoginReq = () => ({ type: c.THUNK_SEND_LOGIN_REQ })
// Hook logging user in
const actionLoggingIn = () => ({ type: c.LOGGING_IN })
// Hook log in success
const actionLoginSuccess = () => ({ type: c.LOGIN_SUCCESS })
// Hook log in fail
const actionLoginFail = () => ({ type: c.LOGIN_FAIL })
// Define thunk
export const actionSendLoginReq = () => {
  return (dispatch, getState) => {
    dispatch(actionThunkSendLoginReq())
    // Access user from current state
    let { user } = getState()
    // Build ajax options
    let ajax_options = {
      url: "login",
      data: user,
      type: c.POST_FORM
    }

    dispatch(actionLoggingIn())

    dispatch(fetchData(ajax_options))
      .then(res => {
        if (res.msg === "ok") {
          dispatch(actionLoginSuccess())
          return
        }
        dispatch(actionLoginFail())
      })
      .catch(res => {
        // Fetch FAIL ONLY no internet connection
        console.log(res)
        dispatch(actionLoginFail())
      })
  }
}

// Explicit call out thunk send log out req
const actionThunkSendLogoutReq = () => ({ type: c.THUNK_SEND_LOGOUT_REQ })
// Hook logging out
const actionLoggingOut = () => ({ type: c.LOGGING_OUT })
// Hook logout success
const actionLogoutSuccess = () => ({ type: c.LOGOUT_SUCCESS })
// Hook logout fail
const actionLogoutFail = () => ({ type: c.LOGOUT_FAIL })
export const actionSendLogoutReq = () => {
  return dispatch => {
    dispatch(actionThunkSendLogoutReq())
    // build ajax option
    let ajax_options = {
      url: "logout",
      data: {},
      type: c.POST_FORM
    }

    dispatch(actionLoggingOut())

    dispatch(fetchData(ajax_options))
      .then(res => {
        if (res.msg === "ok") {
          //login success
          dispatch(actionLogoutSuccess())
          return
        }

        dispatch(actionLogoutFail())
      })
      .catch(res => {
        // Fetch FAIL ONLY no internet connection
        console.log(res)
        dispatch(actionLogoutFail())
      })
  }
}

export const actionUpdateReservations = reservations => ({
  type: c.UPDATE_RESERVATIONS,
  reservations
})

export const actionAssignDateOnReservations = () => ({
  type: c.ASSIGN_DATE_ON_RESERVATIONS
})

// Explicit tell call a thunk
const actionThunkFetchReservations = () => ({
  type: c.THUNK_FETCH_RESERVATIONS
})
// Hook fetch reservations fail
const actionFetchReservationsFail = () => ({ type: c.FETCH_RESERVATIONS_FAIL })
export const actionFetchReservations = url => {
  return dispatch => {
    dispatch(actionThunkFetchReservations())
    // Build options
    let ajax_options = {
      url,
      type: c.POST_JSON
    }

    dispatch(fetchData(ajax_options))
      .then(reservations => {
        // dirty check
        if (reservations) {
          //let reservations = reservations
          dispatch(actionUpdateReservations(reservations))
          // Right after have reservations
          // Build moment date obj
          dispatch(actionAssignDateOnReservations())
        }
      })
      .catch(res => {
        // Fetch FAIL ONLY no internet connection
        console.log(res)
        dispatch(actionFetchReservationsFail())
      })
  }
}

/*
 |--------------------------------------------------------------------------
 | User
 |--------------------------------------------------------------------------
 | User support login
 |
 */
export const actionUpdateUser = user => ({ type: c.UPDATE_USER, user })

/*
 |--------------------------------------------------------------------------
 | Filter
 |--------------------------------------------------------------------------
 | User support login
 |
 */

export const actionToggleFilterByDay = day => ({
  type: c.FETCH_RESERVATIONS_BY_DAY,
  day
})
// Toggle pick a date
export const actionToggleInputPickADate = () => ({
  type: c.TOGGLE_INPUT_PICK_A_DATE
})

export const actionToggleFilterByStatus = status => ({
  type: c.TOGGLE_FILTER_STATUS,
  status
})
