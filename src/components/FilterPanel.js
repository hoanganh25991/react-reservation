import React from 'react'

class FilterPanel extends React.Component {
	render(){
		// Get actions
		let {toggleInputPickADate} = this.props;


		return(
			<div className="flex-row bg-dark-blue pad30">
				<div>
					<h3 className="text-whit pad-large filter-selected">TODAY</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">TOMORROW</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">NEXT 3 DAYS</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">NEXT 7 DAYS</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">NEXT 30 DAYS</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large"
						onClick={() => toggleInputPickADate()}
					>PICK A DATE</h3>
				</div>
				<div className="flex1"></div>
				<div>
					<h3 className="text-whit pad-large bg-yell">FILTER</h3>
				</div>
			</div>
		)
	}
}

/**
 * Bind actions
 */
/**
 * Bind actions
 */
import {connect} from 'react-redux'

import {actionToggleInputPickADate} from '../actions'

const mapStateToProps  = ({reservations, filters}) => ({reservations: filters.reduce((carry, filter) => (carry.filter(filter)), reservations)})

const mapActionToProps = (dispatch) => {
	return {
		toggleInputPickADate:  () => dispatch(actionToggleInputPickADate()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(FilterPanel)