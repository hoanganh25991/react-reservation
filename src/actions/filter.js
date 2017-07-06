import * as c from "./const-name"
import { actionFetchReservationsByDay } from "./reservations"
import { fetchData } from "../actions/fetch-data"
import Hashids from "hashids"
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

const actionUpdateReservations = reservations => ({
  type: c.UPDATE_RESERVATIONS,
  reservations
})

export const actionSearchReservation = confirm_id => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_SEARCH_RESERVATION })
    let state = getState()
    let { outlet_id } = state
    let ajax_options = {
      url: c.END_POINT_RESERVATIONS,
      data: { outlet_id, confirm_id, type: c.AJAX_FIND_RESERVATION },
      type: c.POST_JSON
    }
    dispatch(fetchData(ajax_options)).then(res => {
      dispatch({ type: c.SEND_SEARCH_RESERVATION })
      let { data: { reservations } } = res
      dispatch(actionUpdateReservations(reservations))
    })
  }
}

export const actionPrintReservation = () => {
  return (dispatch, getState) => {
    let hashids = new Hashids()
    let state = getState()
    let { reservations: currReservations } = state
    let { outlet_id } = state
    let ids = currReservations.map(reservation => {
      let newR = reservation.id
      return newR
    })
    let id = hashids.encode(ids)
    dispatch({ type: c.PRINT_RESERVATION })
    window.open(
      `https://alfred.hoipos.com/reservation/dev/admin/${c.END_POINT_RESERVATIONS}/print?outlet_id=${outlet_id}&reservation_ids=${id}`
    )
  }
}
// Actually fetch reservations by that day
export const actionReloadFilterByDay = () => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_TOGGLE_FILTER_BY_DAY })
    // dispatch(actionUpdateFilterByDay(day))

    let { filterByDay } = getState()
    // Fetch reservations by day
    // Mean give me a day & i fetch it
    dispatch(actionFetchReservationsByDay({ day: filterByDay }))
  }
}
