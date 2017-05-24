import { connect } from "react-redux"
import {
  actionFetchReservationsOnLoad,
  actionUpdateReservations
} from "../actions"
import ReservationList from "../components/ReservationList"

const mapStateToProps = ({ reservations, filters }) => ({
  reservations: filters.reduce(
    (carry, filter) => carry.filter(filter),
    reservations
  )
})

const mapActionToProps = dispatch => ({
  fetchReservationsOnLoad: url => dispatch(actionFetchReservationsOnLoad(url)),
  updateReservations: reservations =>
    dispatch(actionUpdateReservations(reservations))
})

export default connect(mapStateToProps, mapActionToProps)(ReservationList)
