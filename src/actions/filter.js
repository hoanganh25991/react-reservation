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
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_TOGGLE_FILTER_BY_DAY })
    dispatch(actionUpdateFilterByDay(day))

    let { filterByDay } = getState()
    // Fetch reservations by day
    // Mean give me a day & i fetch it
    dispatch(actionFetchReservationsByDay({ day: filterByDay }))
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

export const actionShowFilter = () => ({ type: c.SHOW_FILTER })
export const actionHideFilter = () => ({ type: c.HIDE_FILTER })
// init popup when clicked
export const actionInitFilter = () => {
  return (dispatch, getState) => {
    let state = getState()
    let { showHideFilter } = state
    if (showHideFilter === undefined || showHideFilter === c.HIDE_FILTER) {
      dispatch(actionShowFilter())
    } else {
      dispatch(actionHideFilter())
    }
  }
}
