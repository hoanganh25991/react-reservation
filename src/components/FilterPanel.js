import React from 'react'

import * as c from '../actions/const-name'

import '../css/crazy.css'

import Radium from 'radium'

import styles from './FilterPanel/style'

class FilterPanel extends React.Component {
	render(){
		// Get state
		let {isVisibleInputPickADate} = this.props;
		// Get actions
		let {actionToggleInputPickADate, actionToggleFilterByDay, actionToggleFilterByStatus} = this.props;


		return(
			<div className="crazy" style={[styles.base]}>
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
						    onClick={() => actionToggleInputPickADate()}
						>PICK A DATE</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large default"
						    onClick={() => console.log('xclear')}
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
						    onClick={() => actionToggleFilterByStatus(c.ARRIVED)}
						>ARRIVED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByStatus(c.CONFIRMED)}
						>CONFIRMED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByStatus(c.REMINDER_SENT)}
						>REMINDER SENT</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByStatus(c.RESERVED)}
						>RESERVED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByStatus(c.USER_CANCELLED)}
						>USER CANCELLED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByStatus(c.STAFF_CANCELLED)}
						>STAFF CANCELLED</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large"
						    onClick={() => actionToggleFilterByStatus(c.NO_SHOW)}
						>NO SHOW</h3>
					</div>
					<div>
						<h3 className="text-whit pad-large default"
						    onClick={() => console.log('xclear')}
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

import {actionToggleInputPickADate, actionToggleFilterByDay, actionToggleFilterByStatus} from '../actions'

const mapStateToProps  = ({toggleInputPickADate}) => ({isVisibleInputPickADate: toggleInputPickADate})

const mapActionToProps = (dispatch) => {
	return {
		actionToggleInputPickADate: ()       => dispatch(actionToggleInputPickADate()),
		actionToggleFilterByDay:    (day)    => dispatch(actionToggleFilterByDay(day)),
		actionToggleFilterByStatus: (status) => dispatch(actionToggleFilterByStatus(status)),

	}
}

export default connect(mapStateToProps, mapActionToProps)(Radium(FilterPanel))