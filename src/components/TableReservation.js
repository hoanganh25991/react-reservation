import React from "react"

// import Layout from "./ReservationLayout";
import ReservationStatus from "./ReservationStatus"
class TableReservation extends React.Component {
  render() {
    let { reservation, order } = this.props
    let oddEvenClass = order % 2 ? "even-row" : "odd-row"
    let rowClass = `row ${oddEvenClass}`

    let { status, payment_status, payment_currency, payment_amount } = reservation

    let reservationStatus = { status, payment_status, payment_currency, payment_amount }

    return (
      <div className={rowClass}>
        <div className="col-xs-4 row">
          <div className="col-xs-1 dot-svg">
            {(() => {
              if (reservation.staff_read_state === 1) {
                return (
                  <svg fill="#00ffcc" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                )
              }
              if (reservation.staff_read_state === 0) {
                return (
                  <svg fill="#ff0000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                )
              } else {
                return (
                  <svg
                    fill="rgba(255, 255, 255, 0.1)"
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
          <div className="col-xs">
            <div className="confirmId t-center back40">
              {reservation.confirm_id}
            </div>
            <div className="pax">
              <span>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span> {reservation.adult_pax} + {reservation.children_pax}
            </div>
          </div>
          <div className="col-xs">
            <div className="time white20">
              {reservation.day.format("D MMMM YYYY * HH:mm")}
            </div>
            {(() => {
              if (reservation.table_layout_name !== null && reservation.table_name !== null) {
                return (
                  <div className="room">
                    <span>
                      <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                      </svg>
                    </span>
                    {" "}
                    {reservation.table_layout_name}
                    {" "}
                    -
                    {" "}
                    {reservation.table_name}
                  </div>
                )
              } else {
                return <div className="room" />
              }
            })()}
          </div>
        </div>
        <div className="col-xs-3">
          <div className="oulet-name">
            {reservation.salutation}
            {" "}
            {reservation.first_name}
            {" "}
            {reservation.last_name}
          </div>
          <div className="phone-mail">
            <p>
              <span>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span> ({reservation.phone_country_code}) {reservation.phone}
            </p>
            <p>
              <span>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span> {reservation.email}
            </p>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="customer_remark">
            {(() => {
              console.log(reservation.customer_remarks.length)
              if (reservation.customer_remarks.length > 150) {
                return reservation.customer_remarks.substr(0, 150, -3) + "..."
              } else {
                return reservation.customer_remarks
              }
            })()}
          </div>
          <div className="staff_remark">
            {reservation.staff_remarks}
          </div>
        </div>
        <div className="col-xs-2 row">
          <div className="col-xs">
            <ReservationStatus {...reservationStatus} />

          </div>
          <div className="col-xs-2 next-svg">
            <svg
              fill="rgba(255, 255, 255, 0.1)"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              <path d="M0-.25h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default TableReservation
