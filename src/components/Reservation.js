import React from "react";

import Layout from "./ReservationLayout";

class Reservation extends React.Component {
  render() {
    let { reservation, order } = this.props;

    return <Layout {...{ reservation, order }} />;
  }
}

export default Reservation;
