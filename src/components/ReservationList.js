import React from "react"
import HoiReservation from "../containers/HoiReservation"
import "../css/color.css"
import "../css/flexboxgrid.css"
import HoiGroupReservations from "../containers/HoiGroupReservations"

class ReservationList extends React.Component {
  componentDidMount() {
    let { fetchReservationsOnLoad } = this.props
    fetchReservationsOnLoad()
  }

  render() {
    let { reservations, user, filtered_reservations_by_date } = this.props
    console.log(filtered_reservations_by_date)
    // console.log(Object.keys(filtered_reservations_by_date))

    // console.log(Object.keys(filtered_reservations_by_date).map(key => filtered_reservations_by_date[key]))
    // console.log(reservations)
    return (
      <div className="table-list">
        {Object.keys(filtered_reservations_by_date).map((datakey, row) => (
          <div key={row}>
            <HoiGroupReservations key={row} datakey={datakey} />
            {filtered_reservations_by_date[datakey].map((reservation, index) => (
              <HoiReservation key={reservation.id} order={index + 1} reservation={reservation} />
            ))}
          </div>
        ))}
        {/* {reservations.map((reservation, index) => (
          <HoiReservation key={reservation.id} order={index + 1} reservation={reservation} />
        ))} */}
      </div>
    )
  }
}

export default ReservationList
