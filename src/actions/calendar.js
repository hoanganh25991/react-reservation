import * as c from "./const-name"
// import { actionFetchReservationsByDay } from "./reservations"
import { fetchData } from "../actions/fetch-data"

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
    console.log("ajax_options", ajax_options)

    // dispatch(fetchData(ajax_options)).then(res => {
    //   dispatch({ type: c.SEND_SEARCH_RESERVATION })
    //   let { data: { reservations } } = res
    //   dispatch(actionUpdateReservations(reservations))
    // })
  }
}
