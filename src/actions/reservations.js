import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"
import { actionChooseDefaultOutlet } from "./index"
import { push } from "react-router-redux"
import { actionToggleFilterByDay } from "./filter"

/*
 |--------------------------------------------------------------------------
 | Fetch reservations
 |--------------------------------------------------------------------------
 |
 |
 */
// Receive reservations, ask to update
const actionUpdateReservations = reservations => ({
  type: c.UPDATE_RESERVATIONS,
  reservations
})
// Parse timestamp into moment data obj
const actionAssignDateOnReservations = () => ({
  type: c.ASSIGN_DATE_ON_RESERVATIONS
})
// Hook fetch reservations fail
const actionFetchReservationsFail = response => ({
  type: c.FETCH_RESERVATIONS_FAIL,
  response
})
//
//
//
//
//
//
// Fetch reservations
export const actionFetchReservations = ({ data }) => {
  return (dispatch, getState) => {
    // Explicit tell call a thunk
    dispatch({ type: c.THUNK_FETCH_RESERVATIONS })

    // outlet_id handle by default on ANY REQ
    // auto push it in
    let { outlet_id } = getState()
    // last check to save request
    if (outlet_id === null) {
      // force staff back to login page
      let msg =
        "We cant find which outlet you can go. Please, try login first or ask administrator to assign you some outlets."
      let gotoLogin = window.confirm(msg)
      if (gotoLogin) dispatch(push("/login"))
    }

    data = Object.assign(data, { outlet_id })

    let ajax_options = Object.assign({
      url: c.END_POINT_RESERVATIONS,
      data,
      type: c.POST_JSON
    })

    return dispatch(fetchData(ajax_options))
  }
}
/*
 |--------------------------------------------------------------------------
 | Fetch reservations by day
 |--------------------------------------------------------------------------
 |
 |
 */
//
//
//
//
//
//
// Fetch reservation by day
export const actionFetchReservationsByDay = ({ day }) => {
  return dispatch => {
    dispatch({ type: c.THUNK_FETCH_RESERVATIONS_BY_DAY })
    // Update type of request
    let data = { type: c.AJAX_FETCH_RESERVATIONS_BY_DAY, day }
    dispatch(actionFetchReservations({ data })).then(res => {
      // dirty check
      if (res.statusMsg === c.AJAX_FETCH_RESERVATIONS_BY_DAY_SUCCESS) {
        let { reservations } = res.data
        //let reservations = reservations
        dispatch(actionUpdateReservations(reservations))
        // Right after have reservations
        // Build moment date obj
        dispatch(actionAssignDateOnReservations())
        return
      }
      // Cant check out what res is
      // Consider as fail case
      dispatch(actionFetchReservationsFail(res))
    })
  }
}
/*
 |--------------------------------------------------------------------------
 | Fetch reservations default onload as fetch by today
 |--------------------------------------------------------------------------
 |
 |
 */
//
//
//
//
//
// Fetch reservations on load
export const actionFetchReservationsOnLoad = () => {
  return dispatch => {
    // Explicit tell calling a thunk
    dispatch({ type: c.THUNK_FETCH_RESERVATIONS_ON_LOAD })
    dispatch(actionChooseDefaultOutlet())
    dispatch(actionToggleFilterByDay(c.TODAY))
  }
}
