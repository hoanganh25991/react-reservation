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
    function pad(val, len) {
      val = String(val)
      len = len || 2
      while (val.length < len)
        val = "0" + val
      return val
    }
    // Get out countdown
    let { countdown } = this.state
    // Build an moment duration obj
    let duration = moment.duration(countdown, "seconds")
    // moment(duration._data).format('DD:HH:mm:ss')
    let countdownTimeStr = `${pad(duration.days())}:${pad(duration.hours())}:${pad(duration.minutes())}:${pad(duration.seconds())}`
    // Display it

    if (pad(duration.seconds()) <= 0) {
      countdownTimeStr = "00:00:00:00"
    }
    return <div style={{ textAlign: "right" }}>{countdownTimeStr}</div>
  }
}
