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
import App from './components/App'
import {ConnectedRouter} from 'react-router-redux'

ReactDOM.render(
	<Provider store={store}>
		{ /* ConnectedRouter will use the store from Provider automatically */}
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);