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
/*
 |--------------------------------------------------------------------------
 | Login request
 |--------------------------------------------------------------------------
 |
 |
 */
// Explicit call out thunk before excecute
const actionThunkSendLoginReq = () => ({ type: c.THUNK_SEND_LOGIN_REQ })
// Hook logging user in
const actionLoggingIn = () => ({ type: c.LOGGING_IN })
// Hook log in success
const actionLoginSuccess = ({ user }) => ({ type: c.LOGIN_SUCCESS, user })
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
      url: c.END_POINT_AUTH,
      data: Object.assign({}, user, { type: c.AJAX_LOGIN }),
      type: c.POST_JSON
    }

    dispatch(actionLoggingIn())

    dispatch(fetchData(ajax_options))
      .then(res => {
        if (res.statusMsg === c.AJAX_LOGIN_SUCCESS) {
          let { user } = res.data
          dispatch(actionLoginSuccess({ user }))
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
/*
 |--------------------------------------------------------------------------
 | Lgout request
 |--------------------------------------------------------------------------
 |
 |
 */
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
      url: c.END_POINT_AUTH,
      data: { type: c.AJAX_LOGOUT },
      type: c.POST_JSON
    }

    dispatch(actionLoggingOut())

    dispatch(fetchData(ajax_options))
      .then(res => {
        if (res.stausMsg === c.AJAX_LOGOUT_SUCCESS) {
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
/*
 |--------------------------------------------------------------------------
 | Fetch reservations
 |--------------------------------------------------------------------------
 |
 |
 */
// Receive reservations, ask to update
export const actionUpdateReservations = reservations => ({
  type: c.UPDATE_RESERVATIONS,
  reservations
})
// Parse timestamp into moment data obj
export const actionAssignDateOnReservations = () => ({
  type: c.ASSIGN_DATE_ON_RESERVATIONS
})
// Explicit tell call a thunk
const actionThunkFetchReservations = () => ({
  type: c.THUNK_FETCH_RESERVATIONS
})
// Hook fetch reservations fail
const actionFetchReservationsFail = () => ({ type: c.FETCH_RESERVATIONS_FAIL })
// Fetch reservations
export const actionFetchReservations = ({ data }) => {
  return dispatch => {
    dispatch(actionThunkFetchReservations())

    let ajax_options = Object.assign({
      url: c.END_POINT_RESERVATIONS,
      data,
      type: c.POST_JSON
    })

    dispatch(fetchData(ajax_options))
      .then(res => {
        // dirty check
        if (res.statusMsg === c.AJAX_FETCH_RESERVATIONS_BY_DAY_SUCCESS) {
          let { reservations } = res.data
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
 | Fetch reservations by day
 |--------------------------------------------------------------------------
 |
 |
 */
const actionThunkFetchReservationsByDay = () => ({
  type: c.THUNK_FETCH_RESERVATIONS_BY_DAY
})
// Fetch reservations by day
/**
 * data in shape of
 * {
 *  day: <'TODAY' or 'TOMORROW' or...>
 * }
 */
export const actionFetchReservationsByDay = ({ data }) => {
  return dispatch => {
    dispatch(actionThunkFetchReservationsByDay())

    // Update type of request
    Object.assign(data, {
      type: c.AJAX_FETCH_RESERVATIONS_BY_DAY,
      outlet_id: 1
    })

    dispatch(actionFetchReservations({ data }))
  }
}
/*
 |--------------------------------------------------------------------------
 | Fetch reservations default onload as fetch by today
 |--------------------------------------------------------------------------
 |
 |
 */
// Explicit tell calling a thunk
const actionThunkFetchReservationsOnLoad = () => ({
  type: c.THUNK_FETCH_RESERVATIONS_ON_LOAD
})
// Fetch reservations by day
export const actionFetchReservationsOnLoad = () => {
  return dispatch => {
    dispatch(actionThunkFetchReservationsOnLoad())
    // Fetch by today
    let data = { day: c.TODAY }
    dispatch(actionFetchReservationsByDay({ data }))
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

export const actionClearFilterByStatus = () => ({
  type: c.CLEAR_FILTER_BY_STATUS
})
