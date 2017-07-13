import React from "react"
import * as c from "../actions/const-name"
import "../css/color.css"
import ObjectRowCalendar from "./ObjectRowCalendar"
import InputMoment from "./input-moment"

import moment from "moment"
import "../css/input-moment.css"
class CalendarPopup extends React.Component {
  state = {
    m: moment()
  }

  handleChange = m => {
    this.setState({ m })
  }

  handleSave = () => {
    console.log("saved", this.state.m.format("llll"))
  }
  render() {
    let { popup, calendarTime } = this.props
    let days = []
    if (calendarTime !== null) {
      // console.log(Object.keys(calendarTime))
      days = Object.keys(calendarTime)

      // // console.log(Object.keys(date)[0])
      // let availableHour = Object.keys(calendarTime).map(key => calendarTime[key])
      // console.log(availableHour)

      // let date = Object.keys(calendarTime)
      // let reservationStatus = { status, payment_status, payment_currency, payment_amount }
    }

    return (
      <div>
        {/* Only show it up when status as SHOW_POP_UP */
        popup.showHideCalendar === c.SHOW_CALENDAR
          ? <div className="calendar-popup">
              <div className="row">
                <div className="col-xs">
                  <p>
                    <span>
                      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </span>
                    Date
                  </p>
                </div>
                <div className="col-xs">
                  <p>
                    <span>
                      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </span>
                    Time
                  </p>
                </div>
              </div>
              <div className="date-popup">
                {/* <ul> */}
                {/* {day ? 
                  <ObjectRowCalendar {...{day}} />
                    : null} */}
                {/* {days.map((day, index) => (
                    <ObjectRowCalendar key={day.toString()} i={index + 1} day={day} />
                  ))}
                </ul> */}
                <InputMoment
                  moment={this.state.m}
                  onChange={this.handleChange}
                  onSave={this.handleSave}
                  prevMonthIcon="ion-ios-arrow-left" // default
                  nextMonthIcon="ion-ios-arrow-right" // default
                />
              </div>
              {/*<div className="time-popup">
            <table>
              <tbody>
                
              </tbody>
            </table>
          </div>*/}
            </div>
          : null}
      </div>
    )
  }
}

export default CalendarPopup
