import { connect } from "react-redux"
import {
  actionToggleInputPickADate,
  actionFetchReservationsByDay,
  actionToggleFilterByStatus
} from "../actions"
import FilterPanel from "../components/FilterPanel"

const mapStateToProps = ({ toggleInputPickADate }) => ({
  isVisibleInputPickADate: toggleInputPickADate
})

const mapActionToProps = dispatch => ({
  toggleInputPickADate: () => dispatch(actionToggleInputPickADate()),
  toggleFilterByDay: day =>
    dispatch(actionFetchReservationsByDay({ data: { day } })),
  toggleFilterByStatus: status => dispatch(actionToggleFilterByStatus(status))
})

export default connect(mapStateToProps, mapActionToProps)(FilterPanel)
