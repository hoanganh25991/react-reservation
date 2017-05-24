import {connect} from 'react-redux'
import {actionToggleInputPickADate, actionToggleFilterByDay, actionToggleFilterByStatus} from '../actions'
import FilterPanel from '../components/FilterPanel'


const mapStateToProps  = ({toggleInputPickADate}) => ({isVisibleInputPickADate: toggleInputPickADate})

const mapActionToProps = (dispatch) => {
	return {
		actionToggleInputPickADate: ()       => dispatch(actionToggleInputPickADate()),
		actionToggleFilterByDay:    (day)    => dispatch(actionToggleFilterByDay(day)),
		actionToggleFilterByStatus: (status) => dispatch(actionToggleFilterByStatus(status)),

	}
}


export default connect(mapStateToProps, mapActionToProps)(FilterPanel)