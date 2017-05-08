import * as c from '../actions/const-name'

import moment from 'moment'


const requiredKeys = ['day', 'type', 'priority'];

const createFilterDay = (filter, {day, type, priority}) => {

	let requiredKeysSubmited = requiredKeys.filter(key => typeof [key] === 'undefined').length === 0;

	if(!requiredKeysSubmited){
		throw new Error('Please submit enough keys to create filter day');
	}

	filter.day  = day;
	filter.type = type;
	filter.priority = priority;

	filter.toString = () => (JSON.stringify({name, type, priority}));

	return filter;
}

const addFilter = (newFilter, currentFilters) => {

	let filters = currentFilters.reduce((carry, filter) => {
		let sameType      = filter.type == newFilter.type;
		let lowerPriority = filter.priority <= newFilter.type;

		// If same type but no priority higher than the new one
		// Ok, use the new one
		if(sameType && lowerPriority){
			// Ok, this filter not important than the newFilter
			// Don't push it in
			return carry;
		}

		return carry.push(filter);
	}, []);


	return [...filters, newFilter];
}

export default (state, action) => {
	switch(action.type) {
		case c.TOGGLE_FILTER_DAY:
		{
			let {day} = action;

			// how to check to toggle
			let {filters: currentFilters} = state;

			let sameFilterByDay = currentFilters.filter(filter => {
				return filter.day === day;
			});

			if(sameFilterByDay.length > 1){
				throw new Error('Why have more than 1 filter by day');
			}

			/**
			 * Case should toggle filter
			 * Remove it from current filter list
			 */
			if(sameFilterByDay.length >= 1){
				let needRemovedFilter = sameFilterByDay[0];

				let filters = currentFilters.filter(filter => filter.day !== needRemovedFilter.day);

				return Object.assign({}, state, {filters});
			}

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
					let momentDay = moment(day, 'YYYY-MM-DD');
					
					if(momentDay.isValid()) {
						startDay = momentDay;
						endDay   = startDay.clone().add(1, 'days');
						break;
					}

					throw new Error('addFilterDay cant parse given day parameter');
				}
			}

			let filter  = (reservation) => (reservation.date.isBetween(startDay, endDay, null, '[)'));

			let iFilter = createFilterDay(filter, {day, type: c.FILTER_DAY, priority: 10});
			
			let filters = addFilter(iFilter, currentFilters);

			// Update state
			return Object.assign({}, state, {filters});
		}
		default:
			return state;
	}
}

