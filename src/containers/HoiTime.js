import { connect } from "react-redux"
import { actionCheckMarkBtnSave } from "../actions"
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
  actionCheckMarkBtnSave: i => dispatch(actionCheckMarkBtnSave(i))
})

export default connect(mapStateToProps, mapActionToProps)(time)
