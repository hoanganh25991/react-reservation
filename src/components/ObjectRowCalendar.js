import React from "react"
import * as c from "../actions/const-name"
import "../css/color.css"
import moment from "moment"
class ObjectRowCalendar extends React.Component {
  render() {
    // let now = moment()
    let { day, i } = this.props
    console.log("day", day, "i", i)
    let date = moment(day, "YYYY-MM-DD HH:mm:ss")
    return (
      <li>
        <h3>{date.format("dddd")}</h3>
        <p>{date.format("DD MMM YYYY")}</p>
      </li>
    )
  }
}

export default ObjectRowCalendar
