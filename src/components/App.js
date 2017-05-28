import React from "react"

import HoiNavaigatorPanel from "../containers/HoiNavigatorPanel"
import HoiFilterPanel from "../containers/HoiFilterPanel"
import HoiReservationList from "../containers/HoiReservationList"
import "../css/color.css"
import "../css/flexboxgrid.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <HoiNavaigatorPanel />
        <HoiFilterPanel />
        <HoiReservationList />
      </div>
    )
  }
}

export default App
