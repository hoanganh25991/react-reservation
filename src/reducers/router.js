import { routerReducer } from "react-router-redux"
import * as c from "../actions/const-name"
export default (state, action) => {
  switch (action.type) {
    case c.LOCATION_CHANGE: {
      let { router: currRouter } = state
      let router = routerReducer(currRouter, action)

      return Object.assign({}, state, { router })
    }
    default: {
      let { router: currRouter } = state
      let router = routerReducer(currRouter, action)

      return Object.assign({}, state, { router })
    }
  }
}
