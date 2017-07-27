import cx from "classnames"
import React, { Component } from "react"
import _ from "lodash"
import chunk from "lodash/chunk"
import moment from "moment"
export default class extends Component {
  changeHours = pos => {
    const m = this.props.moment
    let a = moment(`${m.format("YYYY-MM-DD")} ${pos}`, "YYYY-MM-DD HH:mm")
    this.props.onChange(a)
    this.props.actionCheckMarkBtnSave(1)
  }

  render() {
    const m = this.props.moment
    const { days, availableHour, calendarDateIndex } = this.props

    return (
      <div className={cx("m-time", this.props.className)}>
        <div className="showtime">
          <span className="time">{m.format("HH")}</span>
          <span className="separater">:</span>
          <span className="time">{m.format("mm")}</span>
        </div>

        {typeof availableHour[calendarDateIndex] === "undefined"
          ? null
          : chunk(availableHour[calendarDateIndex], 10).map((row, w) => (
              <ul key={w}>
                {row.map((hour, index) => (
                  <li key={index}><span onClick={() => this.changeHours(hour.time)}>{hour.time}</span></li>
                ))}
              </ul>
            ))}

      </div>
    )
  }
}
