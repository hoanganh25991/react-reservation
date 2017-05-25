import * as c from "../actions/const-name"

export default (state, action) => {
  switch (action.type) {
    case c.TOGGLE_POPUP: {
      let { visiblePopup: currVisible } = state

      let visiblePopup = !currVisible

      return Object.assign({}, state, { visiblePopup })
    }
    default: {
      return state
    }
  }
}
