import React from "react"
import moment from "moment"
import ClockTick from "./ClockTick"

class NavigatorPanel extends React.Component {
  render() {
    let { outlet } = this.props
    let now = moment()
    return (
      <div className="row header">
        <div className="back40">
          <svg fill="#ffffff" height="45" viewBox="0 0 24 24" width="45" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="col-xs name back10">
          <h3>{outlet ? outlet.outlet_name : "No outlet found"}</h3>
        </div>
        <div className="col-xs t-right back10">
          <p>{now.format("dddd")}</p>
          <h3>{now.format("D MMMM YYYY")}</h3>
        </div>
        <div className="back10">
          <h1><ClockTick /></h1>
        </div>
      </div>
    )
  }
}

export default NavigatorPanel
