import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.FETCH_RESERVATIONS_BY_DAY: {
      return state
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
    default:
      return state
  }
}
