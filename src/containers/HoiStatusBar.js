import { connect } from "react-redux"
import StatusBar from "../components/StatusBar"

const mapStateToProps = ({ reservations, filterByStatus }) => {
  let notApplyFilter = filterByStatus.length === 0
  let statusMatch = status => filterByStatus.includes(status)

  let filteredReservations = reservations.filter(reservation => notApplyFilter || statusMatch(reservation.status))

  return {
    showingOutOfTotal: `${filteredReservations.length}/${reservations.length}`
  }
}

//const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, null)(StatusBar)
