import React from "react"
import * as c from "../actions/const-name"
import HoiStatusBar from "../containers/HoiStatusBar"

class FilterPanel extends React.Component {
  render() {
    // Get state
    let { visibleInputPickADate } = this.props
    // Get actions
    let { toggleInputPickADate, toggleFilterByDay, toggleFilterByStatus, clearFilterByStatus } = this.props

    return (
      <div>
        <div className="time-bar row back40">
          <div className="col-xs t-center" onClick={() => toggleFilterByDay(c.TODAY)}>Today</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByDay(c.TOMORROW)}>Tomorrow</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByDay(c.NEXT_3_DAYS)}>Next 3 days</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByDay(c.NEXT_7_DAYS)}>Next 7 days</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByDay(c.NEXT_30_DAYS)}>Next 30 days</div>
          <div className="col-xs t-center" onClick={() => toggleInputPickADate()}>Pick a date</div>
          <div className="col-xs t-right">
            <a>Filtered</a>
          </div>
        </div>
        {visibleInputPickADate
          ? <div className="flex-row">
              <div className="flex1" />
              <input
                type="date"
                onChange={e => {
                  toggleFilterByDay(e.target.value)
                }}
              />
            </div>
          : null}
        <div className="time-bar row back40">
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.ARRIVED)}>Arrived</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.CONFIRMED)}>Confirmed</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.REMINDER_SENT)}>Reminder Sent</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.RESERVED)}>Reserved</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.USER_CANCELLED)}>User cancelled</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.STAFF_CANCELLED)}>Staff cancelled</div>
          <div className="col-xs t-center" onClick={() => toggleFilterByStatus(c.NO_SHOW)}>No Show</div>
          <div className="col-xs t-center" onClick={() => clearFilterByStatus()}>xClear</div>
          <div className="col-xs t-right">
            <a>Filtered</a>
          </div>
        </div>
        <HoiStatusBar />
      </div>
    )
  }
}

export default FilterPanel
