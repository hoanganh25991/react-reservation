import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
/**
 * Create REDUX store
 */
// Redux middleware
// Try use hitory from router
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

const history = createHistory();
const routerMiddlewareInstance = routerMiddleware(history);
// Thunk for action as function
import thunkMiddleware from "redux-thunk";
// Log into DevTool (DevTool of Chrome)
//import loggerMiddleware from 'redux-logger';
// Middlewares
//const middlewares = [routerMiddlewareInstance, thunkMiddleware, loggerMiddleware];
//const middlewares = [routerMiddlewareInstance, thunkMiddleware];
// Reducers
import adminPage from "./reducers";
// Build redux with middleware
import { createStore, applyMiddleware } from "redux";
// XYZ to work with DevTool
import { composeWithDevTools } from "redux-devtools-extension";
// Store
const store = createStore(
  adminPage,
  composeWithDevTools(
    applyMiddleware(routerMiddlewareInstance, thunkMiddleware)
  )
);

/**
 * Render app
 */
//import {App, Login, Logout, Login} from './components'
import App from "./components/App";
import Login from "./components/Login";
import Logout from "./components/Logout";
//Funny
import ClickSound from "./components/ClickSound";

import { ConnectedRouter } from "react-router-redux";

import ViReservation from "./components/ViReservation";

import "./css/index";

// Add router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
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

          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/login/:user_name/:password" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/reservations" component={App} />
          <Route path="/viReservation" component={ViReservation} />
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

//
////////////////////
