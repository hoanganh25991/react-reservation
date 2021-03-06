import React from "react"
import * as c from "../actions/const-name"

import HoiNavaigatorPanel from "../containers/HoiNavigatorPanel"
import HoiFilterPanel from "../containers/HoiFilterPanel"
import HoiReservationList from "../containers/HoiReservationList"
import HoiReservationPopup from "../containers/HoiReservationPopup"
import HoiHeaderAction from "../containers/HoiHeaderAction"
import HoiStatusBar from "../containers/HoiStatusBar"
import HoiCalendarPopup from "../containers/HoiCalendarPopup"
import HoiNewReservationPopup from "../containers/HoiNewReservationPopup"
class App extends React.Component {
  render() {
    let { history } = this.props
    return (
      <div>
        <HoiNavaigatorPanel history={history} />
        {/* <HoiHeaderAction /> */}
        <HoiFilterPanel />
        <HoiStatusBar />
        <HoiReservationList />
        <HoiReservationPopup />
        <HoiNewReservationPopup />
        <HoiCalendarPopup />

      </div>
    )
  }
}

export default App
