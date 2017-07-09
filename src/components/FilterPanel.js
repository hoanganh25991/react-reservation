import React from "react"
import * as c from "../actions/const-name"
import ReactCSSTransitionGroup from "react-transition-group/CSSTransitionGroup"

class FilterPanel extends React.Component {
  render() {
    // Get state
    let { visibleInputPickADate } = this.props
    // Get actions
    let { toggleInputPickADate, toggleFilterByDay, toggleFilterByStatus, clearFilterByStatus } = this.props

    // Decide clicked filter by day, by status
    let { filteredDay, filteredStatus } = this.props

    let selected = { borderBottom: "3px solid rgba(112, 136, 253, 0.9)" }
    let { showHideFilter } = this.props
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="toggle" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {showHideFilter === c.SHOW_FILTER
            ? <div className="toggle-base">
                <div className="time-bar row back40">
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByDay(c.TODAY)}
                    style={filteredDay(c.TODAY) ? selected : {}}
                  >
                    Today
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByDay(c.TOMORROW)}
                    style={filteredDay(c.TOMORROW) ? selected : {}}
                  >
                    Tomorrow
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByDay(c.NEXT_3_DAYS)}
                    style={filteredDay(c.NEXT_3_DAYS) ? selected : {}}
                  >
                    Next 3 days
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByDay(c.NEXT_7_DAYS)}
                    style={filteredDay(c.NEXT_7_DAYS) ? selected : {}}
                  >
                    Next 7 days
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByDay(c.NEXT_30_DAYS)}
                    style={filteredDay(c.NEXT_30_DAYS) ? selected : {}}
                  >
                    Next 30 days
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleInputPickADate()}
                    style={visibleInputPickADate ? selected : {}}
                  >
                    Pick a date
                  </div>
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
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.ARRIVED)}
                    style={filteredStatus(c.ARRIVED) ? selected : {}}
                  >
                    Arrived
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.CONFIRMED)}
                    style={filteredStatus(c.CONFIRMED) ? selected : {}}
                  >
                    Confirmed
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.REMINDER_SENT)}
                    style={filteredStatus(c.REMINDER_SENT) ? selected : {}}
                  >
                    Reminder Sent
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.RESERVED)}
                    style={filteredStatus(c.RESERVED) ? selected : {}}
                  >
                    Reserved
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.USER_CANCELLED)}
                    style={filteredStatus(c.USER_CANCELLED) ? selected : {}}
                  >
                    User cancelled
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.STAFF_CANCELLED)}
                    style={filteredStatus(c.STAFF_CANCELLED) ? selected : {}}
                  >
                    Staff cancelled
                  </div>
                  <div
                    className="filter-text t-center"
                    onClick={() => toggleFilterByStatus(c.NO_SHOW)}
                    style={filteredStatus(c.NO_SHOW) ? selected : {}}
                  >
                    No Show
                  </div>
                  <div className="filter-text t-center" onClick={() => clearFilterByStatus()}>xClear</div>
                  <div className="col-xs t-right">
                    <a>Filtered</a>
                  </div>
                </div>
              </div>
            : null}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default FilterPanel
