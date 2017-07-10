import * as c from "../actions/const-name"
import reservations from "./reservations"
import user from "./user"
import filter from "./filter"
import router from "./router"
import popup from "./popup"
import calendar from "./calendar"

export const initState = {
  // Store reservations
  reservations: [],
  // Helps to filter reservations
  filterByStatus: [],
  filterByDay: null,
  visibleInputPickADate: false,
  // Store user info
  user: {
    user_name: "",
    password: ""
  },
  outlet_id: null,
  allowed_outlets: [],
  // Help to store current location
  router: null,
  // Popup
  visiblePopup: false,
  popup: {}
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
    case c.TOGGLE_INPUT_PICK_A_DATE:
    case c.SHOW_FILTER:
    case c.HIDE_FILTER:
    case c.THUNK_SEARCH_RESERVATION: {
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
    case c.LOCATION_CHANGE: {
      return router(state, action)
    }
    case c.TOGGLE_POPUP:
    case c.INJECT_POPUP_DATA:
    case c.SHOW_POPUP:
    case c.HIDE_POPUP:
    case c.UPDATE_STATUS:
    case c.ADD_UP:
    case c.UPDATE_RESERVATION_POPUP:
    case c.HANDLE_INPUT_CHANGE:
    case c.UPDATE_PAYMENT_STATUS:
    case c.THUNK_SEND_REMINDER: {
      return popup(state, action)
    }
    case c.INJECT_CALENDAR: {
      return calendar(state, action)
    }
    default:
      return state
  }
}

export default adminPage
///////
