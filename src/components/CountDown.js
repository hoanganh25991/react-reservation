import React from "react"

export default class CountDown extends React.Component {
  render() {
    let { startTime } = this.props

    return <div style={{ textAlign: "right" }}>{startTime.format("d : HH : mm : ss")}</div>
  }
}
