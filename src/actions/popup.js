import * as c from "./const-name"
export const actionTogglePopup = () => ({ type: c.TOGGLE_POPUP })
export const actionShowPopup = () => ({ type: c.SHOW_POPUP })
export const actionHidePopup = () => ({ type: c.HIDE_POPUP })
export const actionInjectPopupData = reservation_id => ({ type: c.INJECT_POPUP_DATA, reservation_id })
//
//
//
// init popup when clicked
export const actionInitPopup = reservation_id => {
  return dispatch => {
    dispatch({ type: c.THUNK_INIT_POPUP })
    dispatch(actionInjectPopupData(reservation_id))
    dispatch(actionShowPopup())
  }
}
