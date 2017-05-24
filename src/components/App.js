import React from "react"

import NavaigatorPanel from "./NavigatorPanel"
import FilterPanel from "./FilterPanel"
import HoiReservationList from "../containers/HoiReservationList"

class App extends React.Component {
  render() {
    return (
      <div>
        <NavaigatorPanel />
        <FilterPanel />
        <HoiReservationList />
      </div>
    )
  }
}

export default App
