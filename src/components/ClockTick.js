import React from "react"
import moment from "moment"

export default class ClockTick extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: moment() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: moment()
    })
  }

  render() {
    return (
      <div>
        {this.state.date.format("HH:mm")}
      </div>
    )
  }
}
