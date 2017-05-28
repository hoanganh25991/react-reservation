import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"
/*
 |--------------------------------------------------------------------------
 | Login request
 |--------------------------------------------------------------------------
 |
 |
 */
// Hook logging user in
const actionLoggingIn = () => ({ type: c.LOGGING_IN })
// Hook log in success
const actionLoginSuccess = ({ user, allowed_outlets }) => ({ type: c.LOGIN_SUCCESS, user, allowed_outlets })
// Hook log in fail
const actionLoginFail = () => ({ type: c.LOGIN_FAIL })
// Define thunk
export const actionSendLoginReq = () => {
  return (dispatch, getState) => {
    // Explicit call out thunk before excecute
    dispatch({ type: c.THUNK_SEND_LOGIN_REQ })
    // Access user from current state
    let { user } = getState()
    // Build ajax options
    let ajax_options = {
      url: c.END_POINT_AUTH,
      data: { ...user, type: c.AJAX_LOGIN },
      type: c.POST_JSON
    }

    dispatch(actionLoggingIn())

    dispatch(fetchData(ajax_options)).then(res => {
      if (res.statusMsg === c.AJAX_LOGIN_SUCCESS) {
        let { user, allowed_outlets } = res.data
        dispatch(actionLoginSuccess({ user, allowed_outlets }))
        return
      }
      // Consider cant check case as fail
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
// Hook logging out
const actionLoggingOut = () => ({ type: c.LOGGING_OUT })
// Hook logout success
const actionLogoutSuccess = () => ({ type: c.LOGOUT_SUCCESS })
// Right after login success, want to reset app
const actionResetApp = () => ({ type: c.RESET_APP })
// Hook logout fail
const actionLogoutFail = () => ({ type: c.LOGOUT_FAIL })
export const actionSendLogoutReq = () => {
  return dispatch => {
    // Explicit call out thunk send log out req
    dispatch({ type: c.THUNK_SEND_LOGOUT_REQ })
    // build ajax option
    let ajax_options = {
      url: c.END_POINT_AUTH,
      data: { type: c.AJAX_LOGOUT },
      type: c.POST_JSON
    }

    dispatch(actionLoggingOut())

    dispatch(fetchData(ajax_options)).then(res => {
      if (res.statusMsg === c.AJAX_LOGOUT_SUCCESS) {
        // Staff wants to logout
        // Complete reset state
        dispatch(actionResetApp())
        // Logout success
        dispatch(actionLogoutSuccess())
        return
      }
      // Consider cant check case as fail
      dispatch(actionLogoutFail())
    })
  }
}
