import React from "react"
import moment from "moment"

export default class GroupReservations extends React.Component {
  render() {
    let { datakey, filtered_reservations_by_date } = this.props
    let reservations = filtered_reservations_by_date[datakey]
    let totalItem = reservations.map(reservation => {
      return reservation.adult_pax + reservation.children_pax
    })
    let totalPax = totalItem.reduce((sum, value) => {
      return sum + value
    }, 0)
    return (
      <div className="reservation-status row white20">
        <div className="col-xs-4">{moment(datakey, "YYYY-MM-DD").format("DD MMM YYYY")}</div>
        <div className="col-xs-4">Total Reservations: {reservations.length}</div>
        <div className="col-xs-4">Total Pax: {totalPax}</div>
        {/* <div className="col-xs-2">Status</div> */}
      </div>
    )
  }
}
