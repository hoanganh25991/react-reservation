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
    let isDate = this.state.m.format("YYYY-MM-DD HH:mm:ss")
    this.props.actionUpdateDateAndTime(isDate)
  }
  render() {
    let { popup, calendarTime, actionCheckIndexDateArray, checkmark, actionHideCalendarPopup } = this.props
    let days = []
    let availableHour = []
    if (calendarTime !== null) {
      days = Object.keys(calendarTime)
      availableHour = Object.keys(calendarTime).map(key => calendarTime[key])
    }

    return (
      <div>
        {/* Only show it up when status as SHOW_POP_UP */
        popup.showHideCalendar === c.SHOW_CALENDAR
          ? <div className="calendar-popup">
              <span onClick={() => actionHideCalendarPopup()} className="close thick" />
              <div className="date-popup">

                <div className="input">
                  <input type="text" value={this.state.m.format("dddd, DD/MM/YYYY")} readOnly />
                </div>
                <InputMoment
                  moment={this.state.m}
                  onChange={this.handleChange}
                  onSave={this.handleSave}
                  prevMonthIcon="ion-ios-arrow-left" // default
                  nextMonthIcon="ion-ios-arrow-right" // default
                  days={days}
                  availableHour={availableHour}
                  actionCheckIndexDateArray={actionCheckIndexDateArray}
                  checkmark={checkmark}
                />
              </div>
            </div>
          : null}
      </div>
    )
  }
}

export default CalendarPopup
