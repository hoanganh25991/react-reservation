import React from "react"
import moment from "moment"

export default class GroupReservations extends React.Component {
  render() {
    let { datakey, filtered_reservations_by_date } = this.props
    let reservations = filtered_reservations_by_date[datakey]

    return (
      <div className="reservation-status row white20">
        <div className="col-xs-4">date</div>
        <div className="col-xs-4">Total Reservations: {reservations.length}</div>
        <div className="col-xs-4">Total Pax: </div>
        {/* <div className="col-xs-2">Status</div> */}
      </div>
    )
  }
}
