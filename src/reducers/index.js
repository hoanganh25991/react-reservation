import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import reservations from './reservations'

const todoApp = combineReducers({
	todos,
	reservations,
	visibilityFilter
})

export default todoApp

