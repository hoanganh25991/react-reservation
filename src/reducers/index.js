import * as c from "../actions/const-name"
import reservations from "./reservations"
import user from "./user"
import filter from "./filter"

export const initState = {
  // Store reservations
  reservations: [],
  // Helps to filter reservations
  filterByStatus: [],
  filterByDay: null,
  toggleInputPickADate: false,
  // Store user info
  user: {},
  outlet_id: null
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
    case c.UPDATE_FILTER_BY_DAY:
    case c.TOGGLE_FILTER_STATUS:
    case c.CLEAR_FILTER_BY_STATUS:
    case c.TOGGLE_INPUT_PICK_A_DATE: {
      return filter(state, action)
    }
    case c.RESET_APP: {
      return initState
    }
    case c.CHOOSE_DEFAULT_OUTLET: {
      let { user: { outlet_ids } } = state

      if (outlet_ids && outlet_ids.length > 0) {
        // Just get the first one
        let outlet_id = outlet_ids[0]

        return Object.assign({}, state, { outlet_id })
      }

      return state
    }
    default:
      return state
  }
}

export default adminPage
///////
