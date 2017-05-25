import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
/**
 * Create REDUX store
 */
// Redux middleware
// Try use hitory from router
import { routerMiddleware } from "react-router-redux"
import createHistory from "history/createBrowserHistory"
// Thunk for action as function
import thunkMiddleware from "redux-thunk"
// Log into DevTool (DevTool of Chrome)
//import loggerMiddleware from 'redux-logger';
// Middlewares
//const middlewares = [routerMiddlewareInstance, thunkMiddleware, loggerMiddleware];
//const middlewares = [routerMiddlewareInstance, thunkMiddleware];
// Reducers
import adminPage from "./reducers"
// Build redux with middleware
import { createStore, applyMiddleware } from "redux"
// XYZ to work with DevTool
import { composeWithDevTools } from "redux-devtools-extension"
import { ConnectedRouter } from "react-router-redux"
/**
 * Render app
 */
//import {App, Login, Logout, Login} from './components'
import App from "./components/App"
import HoiLogin from "./containers/HoiLogin"
import HoiLogout from "./containers/HoiLogout"
//Funny
import ClickSound from "./components/ClickSound"

import ViReservation from "./components/ViReservation"

import "./css/index"

const history = createHistory()
const routerMiddlewareInstance = routerMiddleware(history)

// Add router
import { Route, Link } from "react-router-dom"
// Store
const store = createStore(
  adminPage,
  composeWithDevTools(
    applyMiddleware(routerMiddlewareInstance, thunkMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ClickSound />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/viReservation">Vi Page</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={HoiLogin} />
        <Route path="/login" component={HoiLogin} />
        <Route path="/login/:user_name/:password" component={HoiLogin} />
        <Route path="/logout" component={HoiLogout} />
        <Route path="/reservations" component={App} />
        <Route path="/viReservation" component={ViReservation} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

//
////////////////////
