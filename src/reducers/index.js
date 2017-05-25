import * as c from "../actions/const-name"
import reservations from "./reservations"
import user from "./user"
import filter from "./filter"

export const initState = {
  reservations: [],
  filterByStatus: [],
  user: {},
  toggleInputPickADate: false
}

const adminPage = (state = initState, action) => {
  switch (action.type) {
    case c.UPDATE_USER:
    case c.LOGIN_SUCCESS:
    case c.LOGIN_FAIL:
    case c.LOGOUT_SUCCESS:
    case c.LOGOUT_FAIL: {
      return user(state, action)
    }
    case c.UPDATE_RESERVATION:
    case c.UPDATE_RESERVATIONS:
    case c.FETCH_RESERVATIONS_FAIL:
    case c.ASSIGN_DATE_ON_RESERVATIONS: {
      return reservations(state, action)
    }
    case c.FETCH_RESERVATIONS_BY_DAY:
    case c.TOGGLE_FILTER_STATUS:
    case c.CLEAR_FILTER_BY_STATUS: {
      return filter(state, action)
    }
    case c.TOGGLE_INPUT_PICK_A_DATE: {
      let { visibleInputPickADate: currVisibleInput } = state
      // toggle it
      let visibleInputPickADate = !currVisibleInput
      // save it
      return Object.assign({}, state, { visibleInputPickADate })
    }
    case c.RESET_APP: {
      return initState
    }
    default:
      return state
  }
}

export default adminPage
///////
