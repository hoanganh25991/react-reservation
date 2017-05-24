import React from "react"
// import Time from 'react-time';
import "../css/color.css"
import "../css/flexboxgrid.css"
const moment = require("moment")
class ViReservation extends React.Component {
  render() {
    let now = moment()
    let reservations = [
      {
        outlet_name: "HoiPOS Cafe (West)",
        confirm_id: "GHYTGU6",
        reservation_timestamp: "12017-04-13 18:00:00",
        adult_pax: 4,
        children_pax: 3,
        salutation: "Mr.",
        first_name: "Torin",
        last_name: "Nguyen",
        phone_country_code: "+65",
        phone: "98765432",
        email: "torinnguyen@gmail.com",
        customer_remarks: "equest for birthday party cake & song, need wheelchair access/assistant.",
        staff_remarks: "Use different color & new line for staff note like this. This text can be quite long.",
        status: 100,
        payment_currency: "$",
        payment_amount: "124",
        table_layout_name: "level 2",
        table_name: "A1"
      },
      {
        id: 247,
        outlet_id: 1,
        salutation: "Mr.",
        first_name: "Anh",
        last_name: "Le Hoang",
        email: "lehoanganh25991@gmail.com",
        phone_country_code: "+84",
        phone: "903865657",
        status: 100,
        adult_pax: 12,
        children_pax: 0,
        reservation_timestamp: "2017-05-25 10:30:00",
        customer_remarks: "hello world",
        is_outdoor: null,
        send_sms_confirmation: true,
        send_email_confirmation: null,
        table_layout_id: null,
        table_layout_name: null,
        table_name: null,
        staff_read_state: null,
        staff_remarks: null,
        payment_required: null,
        payment_authorization_id: "5FX58092A9109151E",
        payment_amount: "1.35",
        payment_currency: "USD",
        payment_status: 100,
        payment_timestamp: "2017-05-24 13:43:29",
        created_timestamp: "2017-05-24 13:41:50",
        modified_timestamp: "2017-05-24 13:43:29",
        confirm_id: "7G915DK",
        send_confirmation_by_timestamp: "2017-05-25 08:30:00",
        deposit: "1.35",
        time: "10:30",
        paypal_currency: "USD"
      },
      {
        confirm_id: "JE41ME7",
        reservation_timestamp: "2017-04-13 18:00:00",
        adult_pax: 13,
        children_pax: 3,
        salutation: "Mr.",
        first_name: "Tam",
        last_name: "Nguyen",
        phone_country_code: "+65",
        phone: "98765432",
        email: "tamnguyen@gmail.com",
        customer_remarks: "equest for birthday party cake & song, need wheelchair access/assistant.",
        staff_remarks: "Use different color & new line for staff note like this. This text can be quite long.",
        status: 200,
        payment_currency: "$",
        payment_amount: "124",
        table_layout_name: "level 2",
        table_name: "A1"
      },
      {
        confirm_id: "ASDWEFi",
        reservation_timestamp: "2017-04-13 18:00:00",
        adult_pax: 13,
        children_pax: 3,
        salutation: "Mr.",
        first_name: "Nam",
        last_name: "Nguyen",
        phone_country_code: "+65",
        phone: "98765432",
        email: "tamnguyen@gmail.com",
        customer_remarks: "",
        staff_remarks: "user called in to cancel",
        status: -100,
        payment_currency: "$",
        payment_amount: "87",
        table_layout_name: "",
        table_name: ""
      },
      {
        confirm_id: "qwertyu",
        reservation_timestamp: "2017-04-13 18:00:00",
        adult_pax: 13,
        children_pax: 3,
        salutation: "Mr.",
        first_name: "Nam",
        last_name: "Nguyen",
        phone_country_code: "+65",
        phone: "98765432",
        email: "tamnguyen@gmail.com",
        customer_remarks: "equest for birthday party cake & song, need wheelchair access/assistant.",
        staff_remarks: "Use different color & new line for staff note like this. This text can be quite long.",
        status: -300,
        payment_currency: "$",
        payment_amount: "87",
        table_layout_name: "",
        table_name: ""
      },
      {
        confirm_id: "qwertyu",
        reservation_timestamp: "2017-04-13 18:00:00",
        adult_pax: 13,
        children_pax: 3,
        salutation: "Mr.",
        first_name: "A",
        last_name: "Nguyen",
        phone_country_code: "+65",
        phone: "98765432",
        email: "tamnguyen@gmail.com",
        customer_remarks: "equest for birthday party cake & song, need wheelchair access/assistant.",
        staff_remarks: "Use different color & new line for staff note like this. This text can be quite long.",
        status: 300,
        payment_currency: "$",
        payment_amount: "87",
        table_layout_name: "",
        table_name: ""
      }
    ]
    let { reservation, order } = reservations
    console.log("reservation, order", reservation, order)

    let oddEvenClass = order % 2 ? "odd-row" : "even-row"

    return (
      <div className="page-reservation">
        <div className="row header">
          <div className="back40">
            <svg
              fill="#ffffff"
              height="45"
              viewBox="0 0 24 24"
              width="45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div className="col-xs name back10">
            <h3>{reservations[0].outlet_name}</h3>
          </div>
          <div className="col-xs t-right back10">
            <p>{now.format("dddd")}</p>
            <h3>{now.format("D MMMM YYYY")}</h3>
          </div>
          <div className="back10">
            <h1>{now.format("HH:mm")}</h1>
          </div>
        </div>
        <div className="time-bar row back40">
          <div className="col-xs t-center">Today</div>
          <div className="col-xs t-center">Tomorrow</div>
          <div className="col-xs t-center">Next 3 days</div>
          <div className="col-xs t-center">Next 7 days</div>
          <div className="col-xs t-center">Next 30 days</div>
          <div className="col-xs t-center">Pick a date</div>
          <div className="col-xs t-right">
            <a>Filtered</a>
          </div>
        </div>
        <div className="reservation-status row back40">
          <div className="col-xs-4">Showing <b>12/23</b> reservations</div>
          <div className="col-xs-3">Customer</div>
          <div className="col-xs-3">Remarks/Staff Note</div>
          <div className="col-xs-2">Status</div>
        </div>
        <div className="table-list">
          {reservations.map((reservation, index) => (
            <div key={index}>reservation</div>
          ))}

        </div>
        <div className="footer" />
        <div />
        /* assume we have Reservation Component already */
        /* reservations is our data fetch from server */
        /* bring data of each reservation into Reservation Component */

      </div>
    )
  }
}

export default ViReservation
