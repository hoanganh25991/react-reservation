import { combineReducers } from 'redux'
import reservations from './reservations'

const adminPage = combineReducers({
	reservations,
})

export default adminPage

