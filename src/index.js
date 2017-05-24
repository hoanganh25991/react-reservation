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

const history = createHistory()
const routerMiddlewareInstance = routerMiddleware(history)
// Thunk for action as function
import thunkMiddleware from 'redux-thunk';
// Log into DevTool (DevTool of Chrome)
import loggerMiddleware from 'redux-logger';
// Middlewares
const middlewares = [routerMiddlewareInstance, thunkMiddleware, loggerMiddleware];
// Reducers
import adminPage from './reducers'
// Build redux with middleware
import {createStore, applyMiddleware} from 'redux';
// XYZ to work with DevTool
import {composeWithDevTools} from 'redux-devtools-extension';
// Store
const store = createStore(adminPage, composeWithDevTools(applyMiddleware(...middlewares)),);

/**
 * Render app
 */
//import {App, Login, Logout, Login} from './components'
import App               from './components/App'
import Login             from './components/Login'
import Logout            from './components/Logout'
//Funny
import ClickSound from './components/ClickSound'

// Testing component
import ReservationLayout from './components/ReservationLayout'
import ReservationPopupLayout from './components/ReservationPopupLayout'
import FilterPanel from './components/FilterPanel'
import NavigatorPanel from './components/NavigatorPanel'

import {ConnectedRouter} from 'react-router-redux'

import ViReservation from './components/ViReservation'

import './css/index'

// Add router
import {
	BrowserRouter as Router, Route, Link
} from 'react-router-dom'
ReactDOM.render(<Provider store={store}>
	<ConnectedRouter history={history}>
		<Router>
			<div>
				<ClickSound />
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/logout">Logout</Link></li>
					<li><Link to="/reservations">Reservations</Link></li>
					<li><Link to="/test">Test Page</Link></li>
					<li><Link to="/viReservation">Vi Page</Link></li>
					<li><Link to="/components">Components</Link>
						<ul>
							<li><Link to="/components/ReservationLayout">ReservationLayout</Link></li>
							<li><Link to="/components/ReservationPopupLayout">ReservationPopupLayout</Link></li>
							<li><Link to="/components/FilterPanel">FilterPanel</Link></li>
							<li><Link to="/components/NavigatorPanel">NavigatorPanel</Link></li>
						</ul>
					</li>
				</ul>

				<hr/>

				<Route exact path="/"       component={App}/>
				<Route path="/login"        component={Login}/>
				<Route path="/logout"       component={Logout}/>
				<Route path="/reservations" component={App}/>
				<Route path="/test"         component={ReservationPopupLayout}/>
				<Route path="/viReservation"        component={ViReservation}/>
				<Route path="/components/ReservationLayout" component={ReservationLayout}/>
				<Route path="/components/ReservationPopupLayout" component={ReservationPopupLayout}/>
				<Route path="/components/FilterPanel" component={FilterPanel}/>
				<Route path="/components/NavigatorPanel" component={NavigatorPanel}/>
			</div>
		</Router>
	</ConnectedRouter>
</Provider>, document.getElementById('root'));

//
////////////////////