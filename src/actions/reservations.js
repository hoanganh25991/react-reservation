import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"
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
const actionFetchReservationsFail = () => ({ type: c.FETCH_RESERVATIONS_FAIL })
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
    data = Object.assign(data, { outlet_id })

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
//
//
//
//
//
//
// Fetch reservation by day
export const actionFetchReservationsByDay = () => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_FETCH_RESERVATIONS_BY_DAY })
    // Update type of request
    let { filterByDay: day } = getState()
    let data = { type: c.AJAX_FETCH_RESERVATIONS_BY_DAY, day }
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
    // Fetch by today
    let data = { type: c.AJAX_FETCH_RESERVATIONS_BY_DAY, day: c.TODAY }
    dispatch(actionFetchReservationsByDay({ data }))
  }
}
