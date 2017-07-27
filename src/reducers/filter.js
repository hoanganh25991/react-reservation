import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.UPDATE_FILTER_BY_DAY: {
      let { day: filterByDay } = action
      return Object.assign({}, state, { filterByDay })
    }
    case c.TOGGLE_FILTER_STATUS: {
      let { status: newStatus } = action
      let { filterByStatus: currFilterByStatus } = state

      let filterByStatus = currFilterByStatus.reduce(
        (carry, oldStatus) => {
          let alreadyExist = oldStatus === newStatus

          if (alreadyExist)
            // Just push him out
            return carry.filter(status => status != newStatus)
          else return [...carry, oldStatus]
        },
        [newStatus]
      )

      return Object.assign({}, state, { filterByStatus })
    }
    case c.CLEAR_FILTER_BY_STATUS: {
      // Totally reset it
      let filterByStatus = []

      return Object.assign({}, state, { filterByStatus })
    }
    case c.TOGGLE_INPUT_PICK_A_DATE: {
      let { visibleInputPickADate: currVisibleInput } = state
      // toggle it
      let visibleInputPickADate = !currVisibleInput
      // save it
      return Object.assign({}, state, { visibleInputPickADate })
    }
    case c.SHOW_FILTER: {
      // let { popup: currPopup } = state
      let showHideFilter = action.type
      // let popup = { ...currPopup, showHide }
      return Object.assign({}, state, { showHideFilter })
    }
    case c.HIDE_FILTER: {
      let { showHideFilter } = action.type
      // let popup = { ...currPopup, payment_status }
      return { ...state, showHideFilter }
    }
    case c.THUNK_SEARCH_RESERVATIONP: {
      let { reservations: currReservations } = state
      let { popup } = state

      let reservations = currReservations.map(reservation => {
        // if (reservation.id !== popup.id) {
        //   return reservation
        // }
        let newR = { ...reservations }
        return newR
      })

      return { ...state, reservations }
    }
    case c.IS_CHANGE_INPUT_DAY: {
      let { visibleInputPickADate: currVisibleInput } = state

      if (currVisibleInput === true) {
        let visibleInputPickADate = false
        return { ...state, visibleInputPickADate }
      }
    }
    default:
      return state
  }
}
