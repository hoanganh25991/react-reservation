import React from "react"
import Reservation from "./Reservation"
import "../css/color.css"
import "../css/flexboxgrid.css"

class ReservationList extends React.Component {
  componentDidMount() {
    let { fetchReservationsOnLoad } = this.props
    fetchReservationsOnLoad()
  }

  render() {
    let { reservations, user } = this.props

    return (
      <div className="table-list">
        {reservations.map((reservation, index) => (
          <Reservation key={reservation.id} order={index + 1} reservation={reservation} />
        ))}
      </div>
    )
  }
}

export default ReservationList
