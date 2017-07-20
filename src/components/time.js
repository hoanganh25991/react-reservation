import cx from "classnames"
import React, { Component } from "react"
import InputSlider from "react-input-slider"
import _ from "lodash"
import chunk from "lodash/chunk"
export default class extends Component {
  changeHours = pos => {
    const m = this.props.moment
    m.hours(parseInt(pos.x, 10))
    this.props.onChange(m)
  }

  changeMinutes = pos => {
    const m = this.props.moment
    m.minutes(parseInt(pos.x, 10))
    this.props.onChange(m)
  }

  render() {
    const m = this.props.moment
    const { days, availableHour, calendarDateIndex } = this.props
    console.log("this.props", this.props)
    // console.log(days)
    // let availableHour = Object.keys(days).map(key => days[key])
    console.log(calendarDateIndex)
    console.log("availableHour", availableHour[calendarDateIndex])
    return (
      <div className={cx("m-time", this.props.className)}>
        {/* <div className="showtime">
          <span className="time">{m.format("HH")}</span>
          <span className="separater">:</span>
          <span className="time">{m.format("mm")}</span>
        </div> */}

        {/* <div className="sliders">
          <div className="time-text">Hours:</div>
          <InputSlider className="u-slider-time" xmin={0} xmax={23} x={m.hour()} onChange={this.changeHours} />
          <div className="time-text">Minutes:</div>
          <InputSlider className="u-slider-time" xmin={0} xmax={59} x={m.minute()} onChange={this.changeMinutes} />
        </div>  */}
        {typeof availableHour[calendarDateIndex] === "undefined"
          ? null
          : chunk(availableHour[calendarDateIndex], 10).map((row, w) => (
              <ul key={w}>
                {row.map((hour, index) => <li key={index}><span>{hour.first_arrival_time}</span></li>)}
              </ul>
            ))}
        {/* <tbody>
            {chunk(newArrDay, 7).map((row, w) => (
              <tr key={w}>
                {row.map(([i, iBoolean]) => (
                  <Day key={i} i={i} iBoolean={iBoolean} d={d} w={w} actionCheckIndexDateArray={actionCheckIndexDateArray} onClick={() => this.selectDate(i, w)} />
                ))}
              </tr>
            ))}
          </tbody> */}
        {/* <ul>
          { availableHour[calendarDateIndex].map((hour, index) => (
                <li key = {index}><span>{hour.first_arrival_time}</span></li>
            ))}
           
           </ul> */}
      </div>
    )
  }
}
