import React from "react"
import moment from "moment"
import ClockTick from "./ClockTick"
import * as c from "../actions/const-name"
import _ from "lodash"

class NavigatorPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search_text: null
    }
  }

  _makeSearchRequest = () => {
    // console.log('e',e)
    let { actionSearchReservation } = this.props
    actionSearchReservation(this.state.search_text)
  }

  search = _.debounce(this._makeSearchRequest, 1000)

  handleOnChage = e => {
    if (e !== undefined) {
      const text = e.target.value
      // console.log(text)
      this.setState({
        search_text: text
      })
      this.search()
    }
  }

  onClickSearch = e => {
    this.handleOnChage(e)
  }

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
    let { initFilter } = this.props
    let { actionPrintReservation, actionReloadFilterByDay, actionShowHideNewPopup } = this.props
    return (
      <div className="row header">
        <div className="name back10">
          <h3>{outlet ? outlet.outlet_name : "No outlet found"}</h3>
        </div>
        <div className="modal-header back10 col-xs row">
          <div className="col-xs row">
            <div className="modal-btn" onClick={() => actionReloadFilterByDay()}>
              <span>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </div>
            <div className="modal-btn" onClick={e => actionPrintReservation()}>
              <span>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </div>
            <div className="modal-btn" onClick={e => actionShowHideNewPopup()}>
              <span>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </div>
            <div className="modal-btn" onClick={e => initFilter()}>
              <span style={{ width: "34px", display: "inline-block" }}>
                {/*style={{"enableBackground":"new 0 0 402.577 402.577"}}*/}
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="24"
                  viewBox="0 0 402.577 402.577"
                >
                  <g>
                    <path d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                      c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                      c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                      C402.765,25.895,404.093,19.231,400.858,11.427z" />
                  </g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g />
                </svg>
              </span>
            </div>
          </div>
          <div className="col-xs t-right wrap-search">
            <input
              type="button"
              name="search_button"
              value={this.text}
              id="search_button"
              onClick={e => this.onClickSearch(e)}
            />
            <input
              type="text"
              name="search_text"
              id="search_text"
              placeholder="CONFIRM ID, name, phone or email"
              onChange={e => this.handleOnChage(e)}
            />
          </div>
        </div>
        <div className=" t-right back10">
          <p>{now.format("dddd")}</p>
          <h3>{now.format("D MMMM YYYY")}</h3>
        </div>
        <div className="back10">
          <h1><ClockTick /></h1>
        </div>
        <div className="back10">
          <span className="log-out" onClick={e => logout()}>
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
          </span>
        </div>
      </div>
    )
  }
}

export default NavigatorPanel
