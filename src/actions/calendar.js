import * as c from "./const-name"
// import { actionFetchReservationsByDay } from "./reservations"
import { fetchData } from "../actions/fetch-data"
import { getAvaibleTime } from "../selectors"

export const actionShowCalendarPopup = () => ({ type: c.SHOW_CALENDAR })
export const actionHideCalendarPopup = () => ({ type: c.HIDE_CALENDAR })

export const actionShowHideCalendar = () => {
  return dispatch => {
    dispatch({ type: c.THUNK_FETCH_AVAILABLE_TIME })
    dispatch(actionShowCalendarPopup())
    dispatch(actionSearchAvailableTime())
  }
}

const actionInjectCalendar = ({ available_time }) => ({ type: c.INJECT_CALENDAR, available_time })

export const actionSearchAvailableTime = () => {
  return (dispatch, getState) => {
    dispatch({ type: c.THUNK_FETCH_AVAILABLE_TIME })
    let state = getState()
    let { outlet_id, popup } = state
    let { adult_pax, children_pax } = popup
    let ajax_options = {
      url: c.END_POINT_RESERVATIONS,
      data: { outlet_id, adult_pax, children_pax, type: c.AJAX_SEARCH_AVAILABLE_TIME },
      type: c.POST_JSON
    }
    // console.log("ajax_options", ajax_options)

    dispatch(fetchData(ajax_options)).then(res => {
      dispatch({ type: c.FETCH_AVAILABLE_TIME })
      //   let { data: { reservations } } = res
      //   dispatch(actionUpdateReservations(reservations))
      let available_time = res.data.available_time
      // console.log('res', res)
      // console.log('available_time', available_time)
      dispatch(actionInjectCalendar({ available_time }))
      // dispatch(getAvaibleTime(getState()))
    })
  }
}

export const actionCheckIndexDateArray = index => ({ type: c.CHECK_INDEX_DATE_ARRAY, index })

export const actionCheckMarkBtnSave = i => ({ type: c.CHECKMARK_BTN_SAVE, i })

export const actionUpdateDateAndTime = date => {
  return dispatch => {
    dispatch({ type: c.UPDATE_DATE_AND_TIME, date })
    dispatch(actionHideCalendarPopup())
  }
}
