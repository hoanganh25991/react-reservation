import React from "react"
import Reservation from "./Reservation"

class ReservationList extends React.Component {
  componentDidMount() {
    let { user } = this.props
    let { fetchReservationsOnLoad } = this.props
    // Ok load reservations
    let { outlet_ids } = user

    if (outlet_ids && outlet_ids.length > 0) {
      let outlet_id = outlet_ids[0]

      fetchReservationsOnLoad({ outlet_id })
    }
  }

  componentDidUpdate() {}

  render() {
    let { reservations, user } = this.props

    return (
      <div>
        <div>{JSON.stringify(user)}</div>
        <div className="flex-row" />
        {reservations.map((reservation, index) => (
          <Reservation
            key={reservation.id}
            order={index + 1}
            reservation={reservation}
          />
        ))}
      </div>
    )
  }
}

export default ReservationList
