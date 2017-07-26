import { connect } from "react-redux"
import moment from "moment"
import GroupReservations from "../components/GroupReservations"

const mapStateToProps = ({ reservations, filterByStatus }) => {
  let notApplyFilter = filterByStatus.length === 0
  let statusMatch = status => filterByStatus.includes(status)

  let filteredReservations = reservations.filter(reservation => notApplyFilter || statusMatch(reservation.status))

  let filtered_reservations_by_date = reservations.reduce((carry, reservation) => {
    let key = moment(reservation.reservation_timestamp, "YYYY-MM-DD HH:mm").format("YYYY-MM-DD")
    carry[key] = carry[key] ? [...carry[key], reservation] : [reservation]

    return carry
  }, {})
  return {
    filtered_reservations_by_date
  }
}

//const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, null)(GroupReservations)
