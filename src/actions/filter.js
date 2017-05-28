import * as c from "./const-name"
import { actionFetchReservationsByDay } from "./reservations"
/*
 |--------------------------------------------------------------------------
 | Filter
 |--------------------------------------------------------------------------
 | User support login
 |
 */
export const actionUpdateFilterByDay = day => ({
  type: c.UPDATE_FILTER_BY_DAY,
  day
})
//
//
//
//
// Toggle filter by day
// Actually fetch reservations by that day
export const actionToggleFilterByDay = day => {
  return dispatch => {
    dispatch({ type: c.THUNK_TOGGLE_FILTER_BY_DAY })
    dispatch(actionUpdateFilterByDay(day))
    dispatch(actionFetchReservationsByDay())
  }
}
//
//
//
//
//
// Toggle pick a date
export const actionToggleInputPickADate = () => ({
  type: c.TOGGLE_INPUT_PICK_A_DATE
})
//
//
//
//
// Toggle filter by status
export const actionToggleFilterByStatus = status => ({
  type: c.TOGGLE_FILTER_STATUS,
  status
})
//
//
//
//
// clear filter by status condition
export const actionClearFilterByStatus = () => ({
  type: c.CLEAR_FILTER_BY_STATUS
})
