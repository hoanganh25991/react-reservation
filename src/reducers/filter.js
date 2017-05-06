import * as c from '../actions/const-name'

import moment from 'moment'


const requiredKeys = ['name', 'type', 'priority'];

const createFilter = (filter, {name, type, priority}) => {

	let requiredKeysSubmited = requiredKeys.filter(key => typeof [key] === 'undefined').length === 0;

	if(!requiredKeysSubmited){
		throw new Error('Please submit enough keys to create filter');
	}

	filter.name = name;
	filter.type = type;
	filter.priority = priority;

	filter.toJson = () => (JSON.stringify({name, type, priority}));

	return filter;
}

const addFilter = (newFilter, currentFilters) => {
	let filters = currentFilters.reduce((carry, filter) => {
		let differentType = filter.type !== newFilter.type;
		let lowerPriority = filter.priority <= newFilter.type;

		// If same type but no priority higher than the new one
		// Ok, use the new one
		if(!differentType && lowerPriority){
			return carry.push(newFilter)
		}

		return carry.push(filter);
	}, []);
	

	return filters;
}


export default (state, action) => {
	switch(action.type) {
		case c.ADD_FILTER_DAY:
		{
			let {day} = action;

			let startDay = moment({hours: 0, minutes: 0, seconds: 0});
			let endDay;
			switch(day) {
				case c.TODAY:
				{
					endDay = startDay.clone().add(1, 'days');
					break;
				}
				case c.TOMORROW:
				{
					startDay = startDay.clone.add(1, 'days');
					endDay   = startDay.clone().add(1, 'days');
					break;
				}
				case c.NEXT_3_DAYS:
				{
					endDay = startDay.clone().add(4, 'days');
					break;
				}
				case c.NEXT_7_DAYS:
				{
					endDay = startDay.clone().add(8, 'days');
					break;
				}
				case c.NEXT_30_DAYS:
				{
					endDay = startDay.clone().add(31, 'days');
					break;
				}
				default:
				{
					/**
					 * 1 pick a custom day
					 */
					let day = moment(day, 'YYYY-MM-DD');
					
					if(day.isValid()) {
						startDay = day;
						endDay   = startDay.clone().add(1, 'days');
						break;
					}

					throw new Error('addFilterDay cant parse given day parameter');
				}
			}

			let filter  = (reservation) => (reservation.date.isBetween(startDay, endDay, null, '[)'));

			let iFilter = createFilter(filter, {name: 'Filter by day', type: c.FILTER_DAY, priority: 10});
			
			let {fitlers: currentFilters} = state;
			
			let filters = addFilter(iFilter, currentFilters);

			// Update state
			return Object.assign({}, state, {filters});
		}
		default:
			return state;
	}
}

