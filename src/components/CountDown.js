import React from "react"
import moment from "moment"

export default class CountDown extends React.Component {
  constructor(props) {
    super(props)
    // let startTime = props
    this.state = { count: 0 }
    this.time = { date: moment() }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    let count = this.state.count
    count++

    let { startTime } = this.props
    var eventTime = startTime.format("x")
    // console.log('eventTime',eventTime);
    var currentTime = this.time.date.format("x")
    // console.log('currentTime',currentTime);
    var diffTime = eventTime - currentTime
    // console.log('diffTime',diffTime);
    var duration = moment.duration(diffTime * 1000, "milliseconds")
    // console.log('duration',duration);
    var interval = 1000

    // (function timerLoop() {

    //    duration = moment.duration(duration - interval, 'milliseconds');
    //     // console.log(duration);
    //     count = duration.days() + ':' + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
    //    console.log(count)

    //   requestAnimationFrame(timerLoop);
    // })();

    this.setState({ count })
  }
  render() {
    return <div style={{ textAlign: "right" }}>{this.state.count} </div>
  }
}
