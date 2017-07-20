import { connect } from "react-redux"
import { actionSearchAvailableTime, actionCheckIndexDateArray } from "../actions"
import time from "../components/time"
// import { getCalendarTime } from "../selectors"

const mapStateToProps = state => {
  // let a = getAva(state);
  //   let calendarTime = getCalendarTime(state)
  //console.log(outlet);
  let { calendarDateIndex } = state
  // console.log('availableDate',availableDate)
  return {
    calendarDateIndex
    // calendarTime
  }
}
const mapActionToProps = dispatch => ({
  //   actionSearchAvailableTime: () => dispatch(actionSearchAvailableTime()),
  //   actionCheckIndexDateArray: index => dispatch(actionCheckIndexDateArray(index))
})

export default connect(mapStateToProps, mapActionToProps)(time)
