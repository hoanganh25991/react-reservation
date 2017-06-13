import React from "react"
import moment from "moment"

export default class CountDown extends React.Component {
  constructor(props) {
    super(props)
    // countdown store how many seconds left
    this.state = { countdown: null }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    let { startTime } = this.props
    let now = moment()
    // How many seconds left
    // + sign to convert str > number
    let countdown = +startTime.format("X") - +now.format("X")
    // Update state
    this.setState({ countdown })
  }
  render() {
    // Get out countdown
    let { countdown } = this.state
    // Build an moment duration obj
    let duration = moment.duration(countdown, "seconds")
    let countdownTimeStr = `${duration.days()}:${duration.hours()}:${duration.minutes()}:${duration.seconds()}`
    // Display it
    return <div style={{ textAlign: "right" }}>{countdownTimeStr}</div>
  }
}
