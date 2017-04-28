import React      from 'react'
import ReactDOM   from 'react-dom';
import {Provider} from 'react-redux'
/**
 * Create REDUX store
 */
// Redux middleware
// Try use hitory from router
import {routerMiddleware}       from  'react-router-redux'
import createHistory            from 'history/createBrowserHistory'
const  history                  = createHistory()
const  routerMiddlewareInstance = routerMiddleware(history)
// Thunk for action as function
import thunk                    from 'redux-thunk';
// Log into DevTool (DevTool of Chrome)
import createLogger             from 'redux-logger';
// Middlewares
const  middlewares = [routerMiddlewareInstance, thunk, createLogger];
// Reducers
import todoApp from './reducers'
// Build redux with middleware
import {createStore, applyMiddleware} from 'redux';
// XYZ to work with DevTool
import {composeWithDevTools} from 'redux-devtools-extension';
// Store
const  store = createStore(
	todoApp,
	composeWithDevTools(
		applyMiddleware(...middlewares)
	),
);

/**
 * Render app
 */
//import {App, Login, Logout, Reservations} from './components'
import App          from './components/App'
import Login        from './components/Login'
import Logout       from './components/Logout'
import About        from './components/About'
import Reservations from './components/Reservations'
import {ConnectedRouter} from 'react-router-redux'

// Add router
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


ReactDOM.render(
	<Provider store={store}>
		{ /* ConnectedRouter will use the store from Provider automatically */}
		<ConnectedRouter history={history}>
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/logout">Logout</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/reservations">Reservations</Link></li>
					</ul>

					<hr/>

					<Route exact path="/"       component={App} />
					<Route path="/login"        component={Login} />
					<Route path="/logout"       component={Logout} />
					<Route path="/about"        component={About} />
					<Route path="/reservations" component={Reservations} />
				</div>
			</Router>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);