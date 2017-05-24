import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.FETCH_RESERVATIONS_BY_DAY: {
      return state
    }
    case c.TOGGLE_FILTER_STATUS: {
      return state
    }
    default:
      return state
  }
}
