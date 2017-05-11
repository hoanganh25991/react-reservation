import * as c from '../actions/const-name'

import moment from 'moment'

const reservations = (state, action) => {
	switch(action.type) {
		case c.UPDATE_RESERVATION:
		{
			// Watch on reservations branch
			let {reservations: currReservations} = state;

			// New reservation info from action
			let {reservation} = action;

			let reservations = currReservations.map(r => {
				if(r.id !== reservation.id) {
					return r;
				}

				// Ok update it
				return Object.assign({}, r, reservation);
			});

			// Return state with reservations updated
			return Object.assign({}, state, {reservations: reservations})
		}
		case c.UPDATE_RESERVATIONS:
		{
			// Watch on reservations branch
			//let {reservations} = state;
			// New reservations info from action
			let reservations = [...action.reservations];
			// Return state with reservations updated
			return Object.assign({}, state, {reservations})
		}
		case c.ASSIGN_DATE_ON_RESERVATIONS:{
			let {reservations: currentReservations} = state;

			let reservations = currentReservations.map(reservation => {
				/** @namespace reservation.reservation_timestamp */
				let date = moment(reservation.reservation_timestamp, 'YYYY-MM-DD HH:mm:ss');

				return Object.assign({}, reservation, {date});
			})

			return Object.assign({}, state, {reservations});
		}
		default:
			return state
	}
}

//tell me why???
export default reservations