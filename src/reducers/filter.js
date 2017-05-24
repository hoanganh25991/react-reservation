import * as c from "../actions/const-name"
import moment from "moment"

export default (state, action) => {
  switch (action.type) {
    case c.FETCH_RESERVATIONS_BY_DAY: {
      let { day } = action

      return state
    }
    case c.TOGGLE_FILTER_STATUS: {
      return state
    }
    default:
      return state
  }
}
