import { connect } from "react-redux"
import {
  actionToggleInputPickADate,
  actionToggleFilterByDay,
  actionToggleFilterByStatus,
  actionClearFilterByStatus,
  actionChangeDay
} from "../actions"
import FilterPanel from "../components/FilterPanel"

const mapStateToProps = ({ visibleInputPickADate, filterByDay, filterByStatus, showHideFilter }) => {
  let filteredDay = day => day === filterByDay
  let filteredStatus = status => filterByStatus.includes(status)

  return {
    visibleInputPickADate,
    filteredDay,
    filteredStatus,
    showHideFilter
  }
}

const mapActionToProps = dispatch => ({
  toggleInputPickADate: () => dispatch(actionToggleInputPickADate()),
  toggleFilterByDay: day => dispatch(actionToggleFilterByDay(day)),
  toggleFilterByStatus: status => dispatch(actionToggleFilterByStatus(status)),
  clearFilterByStatus: () => dispatch(actionClearFilterByStatus()),
  actionChangeDay: day => dispatch(actionChangeDay(day))
})

export default connect(mapStateToProps, mapActionToProps)(FilterPanel)
