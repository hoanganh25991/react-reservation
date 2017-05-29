import * as c from "../actions/const-name"

const deepCloneReservation = reservation => {
  let popup = { ...reservation }

  if (popup.date && popup.isMoment()) {
    popup.date = popup.date.clone()
  }

  return popup
}

export default (state, action) => {
  switch (action.type) {
    case c.TOGGLE_POPUP: {
      let { visiblePopup: currVisible } = state

      let visiblePopup = !currVisible

      return Object.assign({}, state, { visiblePopup })
    }
    case c.INJECT_POPUP_DATA: {
      let { reservation_id } = action

      let { reservations } = state

      let selectedReservation = reservations.filter(reservation => reservation.id === reservation_id)[0]

      if (selectedReservation) {
        let popup = deepCloneReservation(selectedReservation)

        return { ...state, popup }
      }

      // Should handle something here
      return state
    }
    default: {
      return state
    }
  }
}
