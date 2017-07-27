import React from "react"
import moment from "moment"
import ClockTick from "./ClockTick"
import * as c from "../actions/const-name"

class NavigatorPanel extends React.Component {
  componentDidUpdate() {
    let { user } = this.props
    let { status } = user
    // If user alreday login, redirect to reservation page
    if (status === c.LOGOUT_SUCCESS) {
      let { history } = this.props
      history.push("/login")
    }
  }
  render() {
    let { outlet, logout } = this.props
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
        <div className="back10 log-out" onClick={e => logout()}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 576.002 576.002"
          >
            <g>
              <g id="Share">
                <g>
                  <path d="M504.001,468.002c0,19.872-16.128,36-36,36h-360c-19.872,0-36-16.128-36-36v-360c0-19.872,16.128-36,36-36h108
                  l119.988-72H72.001c-39.78,0-72,32.22-72,72v432c0,39.78,32.22,72,72,72h432c39.78,0,72-32.22,72-72v-297l-72,54V468.002z
                  M395.425,70.562c-0.359,3.636-0.54,3.024-0.611-0.216c-17.748-0.144-241.632,17.64-250.957,292.933
                  c2.664,13.788,48.276-181.765,252.072-222.192c0.072,2.916,0.072,74.916,0.072,74.916l180-108l-180-108
                  c0.576-0.36-1.368,57.24-1.188,70.344C396.145,70.382,396.613,70.454,395.425,70.562z M144.469,349.706
                  c-0.54,6.264-0.576,9.899-0.576,9.899C143.929,356.114,144.397,353.126,144.469,349.706z" />
                </g>
              </g>
            </g>
            <g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g />
          </svg>

        </div>
      </div>
    )
  }
}

export default NavigatorPanel
