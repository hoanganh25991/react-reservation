import * as c from "./const-name"
import { actionUpdatePaymentAmount } from "./newPopup"
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

const actionInjectCalendar = ({ available_time, paymentAuthorization }) => ({
  type: c.INJECT_CALENDAR,
  available_time,
  paymentAuthorization
})

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

    dispatch(fetchData(ajax_options)).then(res => {
      dispatch({ type: c.FETCH_AVAILABLE_TIME })
      let available_time = res.data.available_time
      let paymentAuthorization = res.data.payment_authorization
      dispatch(actionInjectCalendar({ available_time, paymentAuthorization }))
      if (popup.showHide === c.SHOW_NEW_POPUP) {
        dispatch(actionUpdatePaymentAmount())
      }
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
