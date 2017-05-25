import { connect } from "react-redux"
import {
  actionFetchReservationsOnLoad,
  actionUpdateReservations
} from "../actions"
import ReservationList from "../components/ReservationList"

const mapStateToProps = ({ reservations, filterByStatus }) => {
  let notApplyFilter = filterByStatus.length === 0
  let statusMatch = status => filterByStatus.includes(status)

  return {
    reservations: reservations.filter(
      reservation => notApplyFilter || statusMatch(reservation.status)
    )
  }
}

const mapActionToProps = dispatch => ({
  fetchReservationsOnLoad: url => dispatch(actionFetchReservationsOnLoad(url)),
  updateReservations: reservations =>
    dispatch(actionUpdateReservations(reservations))
})

export default connect(mapStateToProps, mapActionToProps)(ReservationList)
