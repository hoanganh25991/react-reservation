import { connect } from "react-redux"
import {
  actionToggleInputPickADate,
  actionToggleFilterByDay,
  actionToggleFilterByStatus,
  actionClearFilterByStatus
} from "../actions"
import FilterPanel from "../components/FilterPanel"

const mapStateToProps = ({ visibleInputPickADate, filterByDay, filterByStatus }) => {
  let filteredDay = day => day === filterByDay
  let filteredStatus = status => filterByStatus.includes(status)

  return {
    visibleInputPickADate,
    filteredDay,
    filteredStatus
  }
}

const mapActionToProps = dispatch => ({
  toggleInputPickADate: () => dispatch(actionToggleInputPickADate()),
  toggleFilterByDay: day => dispatch(actionToggleFilterByDay(day)),
  toggleFilterByStatus: status => dispatch(actionToggleFilterByStatus(status)),
  clearFilterByStatus: () => dispatch(actionClearFilterByStatus())
})

export default connect(mapStateToProps, mapActionToProps)(FilterPanel)
