import React from 'react'

class FilterPanel extends React.Component {
	render(){
		// Get state
		let {isVisibleInputPickADate} = this.props;
		// Get actions
		let {toggleInputPickADate} = this.props;


		return(
			<div>
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
				{
					isVisibleInputPickADate ? (
						<div className="flex-row">
							<div className="flex1"></div>
							<div>
								<input type="date" />
							</div>
						</div>
					) : null
				}
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

const mapStateToProps  = ({toggleInputPickADate}) => ({isVisibleInputPickADate: toggleInputPickADate})

const mapActionToProps = (dispatch) => {
	return {
		toggleInputPickADate:  () => dispatch(actionToggleInputPickADate()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(FilterPanel)