import React from "react"

export default class StatusBar extends React.Component {
  render() {
    let { showingOutOfTotal } = this.props
    return (
      <div className="reservation-status row back40">
        <div className="col-xs-5">Showing <b>{showingOutOfTotal}</b> reservations</div>
        <div className="col-xs-2">Customer</div>
        <div className="col-xs-3">Remarks/Staff Note</div>
        <div className="col-xs-2">Status</div>
      </div>
    )
  }
}
