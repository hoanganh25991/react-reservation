import { UPDATE_RESERVATION, UPDATE_RESERVATIONS } from '../actions'

const reservations = (state = [], action) => {
	switch(action.type) {
		case UPDATE_RESERVATION:
		{
			let {reservation} = action;

			return state.map(r => {
				if(r.id !== reservation.id) {
					return r;
				}

				return Object.assign({}, r, reservation);
			});
		}
		case UPDATE_RESERVATIONS:
		{
			let new_state = [...action.reservations];
			return new_state;
		}
		default:
			return state
	}
}

//tell me why???

export default reservations