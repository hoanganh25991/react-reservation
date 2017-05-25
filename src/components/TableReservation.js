import React from "react"

// import Layout from "./ReservationLayout";

class TableReservation extends React.Component {
  render() {
    let { reservation, order } = this.props
    let oddEvenClass = order % 2 ? "even-row" : "odd-row"
    let rowClass = `row ${oddEvenClass}`

    return (
      <div className={rowClass}>
        <div className="col-xs-4 row">
          <div className="col-xs-1">
            {(() => {
              if (reservation.staff_read_state === 1) {
                return (
                  <svg
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                )
              }
              if (reservation.staff_read_state === 0) {
                return (
                  <svg
                    fill="#ffffff"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                )
              } else {
                return (
                  <svg
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                )
              }
            })()}
          </div>
          <div className="col-xs" />
          <div className="col-xs" />
        </div>
        <div className="col-xs-3">Customer</div>
        <div className="col-xs-3">Remarks/Staff Note</div>
        <div className="col-xs-2">Status</div>
      </div>
    )
  }
}

export default TableReservation
