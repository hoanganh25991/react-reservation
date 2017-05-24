import React from "react";
// import Time from 'react-time';
import "../css/color.css";
import "../css/flexboxgrid.css";
const moment = require("moment");
class ViReservation extends React.Component {
  render() {
    let now = moment();
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
        status: "RESERVED",
        payment_currency: "$",
        payment_amount: "124",
        table_layout_name: "level 2",
        table_name: "A1"
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
        status: "reminder sent",
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
        status: "user cancelled",
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
        status: "no show",
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
        status: "confirmed",
        payment_currency: "$",
        payment_amount: "87",
        table_layout_name: "",
        table_name: ""
      }
    ];

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
        {reservations.map((reservation, index) => (
          <div key={index}>reservation</div>
        ))}
      </div>
    );
  }
}

export default ViReservation;
