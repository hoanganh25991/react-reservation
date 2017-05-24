import React from "react";

import NavaigatorPanel from "./NavigatorPanel";
import FilterPanel from "./FilterPanel";
import ReservationList from "../components/ReservationList";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavaigatorPanel />
        <FilterPanel />
        <ReservationList />
      </div>
    );
  }
}

export default App;
