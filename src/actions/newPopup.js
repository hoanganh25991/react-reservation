import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"

export const actionShowNewPopup = () => ({ type: c.SHOW_NEW_POPUP })
export const actionHideNewPopup = () => ({ type: c.HIDE_NEW_POPUP })

export const actionInitNewPopup = () => ({ type: c.INIT_NEW_POPUP })
export const actionShowHideNewPopup = () => {
  return dispatch => {
    // dispatch({ type: c.THUNK_FETCH_AVAILABLE_TIME })
    dispatch(actionInitNewPopup())
    dispatch(actionShowNewPopup())
    // dispatch(actionSearchAvailableTime())
  }
}
