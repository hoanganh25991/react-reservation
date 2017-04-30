import {
	UPDATE_RESERVATION
} from '../actions'

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
		default:
			return state
	}
}

//tell me why???

export default reservations