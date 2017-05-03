import {UPDATE_RESERVATION, UPDATE_RESERVATIONS} from '../actions/const-name'

const reservations = (state, action) => {
	switch(action.type) {
		case UPDATE_RESERVATION:
		{
			// Watch on reservations branch
			let {reservations} = state;

			// New reservation info from action
			let {reservation} = action;

			let _reservations = reservations.map(r => {
				if(r.id !== reservation.id) {
					return r;
				}

				// Ok update it
				return Object.assign({}, r, reservation);
			});

			// Return state with reservations updated
			return Object.assign({}, state, {reservations: _reservations})
		}
		case UPDATE_RESERVATIONS:
		{
			// Watch on reservations branch
			let {reservations} = state;
			// New reservations info from action
			let _reservations = [...action.reservations];
			// Return state with reservations updated
			return Object.assign({}, state, {reservations: _reservations})
		}
		default:
			return state
	}
}

//tell me why???
export default reservations