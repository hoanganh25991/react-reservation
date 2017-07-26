import { connect } from "react-redux"
import { actionFetchReservationsOnLoad, actionUpdateReservations } from "../actions/reservations"
import ReservationList from "../components/ReservationList"
import moment from "moment"

const mapStateToProps = ({ user, reservations, filterByStatus }) => {
  let notApplyFilter = filterByStatus.length === 0
  let statusMatch = status => filterByStatus.includes(status)
  let filtered_reservations_by_date = {}
  filtered_reservations_by_date = reservations.reduce((carry, reservation) => {
    let key = moment(reservation.reservation_timestamp, "YYYY-MM-DD HH:mm").format("YYYY-MM-DD")
    carry[key] = carry[key] ? [...carry[key], reservation] : [reservation]

    return carry
  }, {})
  return {
    reservations: reservations.filter(reservation => notApplyFilter || statusMatch(reservation.status)),
    user,
    filtered_reservations_by_date
  }
}

const mapActionToProps = dispatch => ({
  fetchReservationsOnLoad: url => dispatch(actionFetchReservationsOnLoad(url)),
  updateReservations: reservations => dispatch(actionUpdateReservations(reservations))
})

export default connect(mapStateToProps, mapActionToProps)(ReservationList)
