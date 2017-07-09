import React from "react"
import * as c from "../actions/const-name"

import HoiNavaigatorPanel from "../containers/HoiNavigatorPanel"
import HoiFilterPanel from "../containers/HoiFilterPanel"
import HoiReservationList from "../containers/HoiReservationList"
import HoiReservationPopup from "../containers/HoiReservationPopup"
import HoiHeaderAction from "../containers/HoiHeaderAction"
import HoiStatusBar from "../containers/HoiStatusBar"
import HoiCalendarPopup from "../containers/HoiCalendarPopup"

class App extends React.Component {
  render() {
    return (
      <div>
        <HoiNavaigatorPanel />
        <HoiHeaderAction />
        <HoiFilterPanel />
        <HoiStatusBar />
        <HoiReservationList />
        <HoiReservationPopup />
        {/*<HoiCalendarPopup />*/}
      </div>
    )
  }
}

export default App
