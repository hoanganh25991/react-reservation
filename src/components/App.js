import React from "react"

import NavaigatorPanel from "./NavigatorPanel"
import HoiFilterPanel from "../containers/HoiFilterPanel"
import HoiReservationList from "../containers/HoiReservationList"

class App extends React.Component {
  render() {
    return (
      <div>
        <NavaigatorPanel />
        <HoiFilterPanel />
        <HoiReservationList />
      </div>
    )
  }
}

export default App
