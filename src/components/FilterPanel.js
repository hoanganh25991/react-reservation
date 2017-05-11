import React from 'react'

import * as c from '../actions/const-name'

class FilterPanel extends React.Component {
	render(){
		// Get state
		let {isVisibleInputPickADate} = this.props;
		// Get actions
		let {toggleInputPickADate, actionToggleFilterByDay} = this.props;


		return(
			<div>
				<div className="flex-row bg-dark-blue pad30">
					<div>
						<h3 className="text-whit pad-large filter-selected"
							onClick={() => actionToggleFilterByDay(c.TODAY)}
						>TODAY</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.TOMORROW)}
						>TOMORROW</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_3_DAYS)}
						>NEXT 3 DAYS</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_7_DAYS)}
						>NEXT 7 DAYS</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_30_DAYS)}
						>NEXT 30 DAYS</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => toggleInputPickADate()}
						>PICK A DATE</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large default"
						    onClick={() => toggleInputPickADate()}
						>XCLEAR</h3>
					</div>
					<div className="flex1"></div>
					<div>
						<h3 className="text-whit pad-large bg-yell"
						>FILTER BY DAY</h3>
					</div>
				</div>
				{
					isVisibleInputPickADate ? (
						<div className="flex-row">
							<div className="flex1"></div>
							<div>
								<input type="date" onChange={(e) => {actionToggleFilterByDay(e.target.value)}} />
							</div>
						</div>
					) : null
				}
				<div className="flex-row bg-dark-blue pad30">
					<div>
						<h3 className="text-whit pad-large filter-selected"
						    onClick={() => actionToggleFilterByDay(c.TODAY)}
						>ARRIVED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.TOMORROW)}
						>CONFIRMED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_3_DAYS)}
						>REMINDER SENT</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_7_DAYS)}
						>RESERVED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_30_DAYS)}
						>USER CANCELLED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_30_DAYS)}
						>STAFF CANCELLED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByDay(c.NEXT_30_DAYS)}
						>NO SHOW</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large default"
						    onClick={() => toggleInputPickADate()}
						>XCLEAR</h3>
					</div>
					<div className="flex1"></div>
					<div>
						<h3 className="text-whit pad-large bg-yell"
						>FILTER BY STATUS</h3>
					</div>
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

import {actionToggleInputPickADate, actionToggleFilterByDay} from '../actions'

const mapStateToProps  = ({toggleInputPickADate}) => ({isVisibleInputPickADate: toggleInputPickADate})

const mapActionToProps = (dispatch) => {
	return {
		toggleInputPickADate:   ()    => dispatch(actionToggleInputPickADate()),
		actionToggleFilterByDay:(day) => dispatch(actionToggleFilterByDay(day))
	}
}

export default connect(mapStateToProps, mapActionToProps)(FilterPanel)