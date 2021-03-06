import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.UPDATE_USER: {
      // Current user state
      let { user: currUser } = state
      // Update it with what inside action
      let user = { ...currUser, ...action.user }
      // Update state
      return { ...state, user }
    }
    case c.LOGGING_IN:
    case c.LOGIN_SUCCESS: {
      let { user: currUser } = state

      let user = { ...currUser, ...action.user, status: action.type }
      let { allowed_outlets } = action
      // Update user info
      // With full data from server
      return { ...state, user, allowed_outlets }
    }
    case c.LOGIN_FAIL:
    case c.LOGGING_OUT:
    case c.LOGOUT_SUCCESS: {
      // Reset user
      // Only status as LOGOUT SUCCESS remain
      let user = { status: action.type }

      return { ...state, user }
    }
    case c.LOGOUT_FAIL: {
      let { user: currUser } = state
      // Update user status base on action type
      let user = { ...currUser, status: action.type }
      return { ...state, user }
    }
    default:
      return state
  }
}
