import React from "react"
import * as c from "../actions/const-name"

import HoiNavaigatorPanel from "../containers/HoiNavigatorPanel"
import HoiFilterPanel from "../containers/HoiFilterPanel"
import HoiReservationList from "../containers/HoiReservationList"
import HoiReservationPopup from "../containers/HoiReservationPopup"
class App extends React.Component {
  render() {
    return (
      <div>
        <HoiNavaigatorPanel />
        <HoiFilterPanel />
        <HoiReservationList />
        <HoiReservationPopup />
      </div>
    )
  }
}

export default App
