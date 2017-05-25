import React from "react"
import Radium from "radium"
import * as c from "../actions/const-name"

class FilterPanel extends React.Component {
  render() {
    // Get state
    let { visibleInputPickADate } = this.props
    // Get actions
    let {
      toggleInputPickADate,
      toggleFilterByDay,
      toggleFilterByStatus,
      clearFilterByStatus
    } = this.props

    return (
      <div>
        <div className="flex-row bg-dark-blue pad30">
          <div>
            <h3
              className="text-whit pad-large filter-selected"
              onClick={() => toggleFilterByDay(c.TODAY)}
            >
              TODAY
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByDay(c.TOMORROW)}
            >
              TOMORROW
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByDay(c.NEXT_3_DAYS)}
            >
              NEXT 3 DAYS
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByDay(c.NEXT_7_DAYS)}
            >
              NEXT 7 DAYS
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByDay(c.NEXT_30_DAYS)}
            >
              NEXT 30 DAYS
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleInputPickADate()}
            >
              PICK A DATE
            </h3>
          </div>
          <div>
            /* <h3
              className="text-whit pad-large default"
              onClick={() => console.log("xclear")}
            >
              XCLEAR
            </h3> */
          </div>
          <div className="flex1" />
          <div>
            <h3 className="text-whit pad-large bg-yell">FILTER BY DAY</h3>
          </div>
        </div>
        {visibleInputPickADate
          ? <div className="flex-row">
              <div className="flex1" />
              <div>
                <input
                  type="date"
                  onChange={e => {
                    toggleFilterByDay(e.target.value)
                  }}
                />
              </div>
            </div>
          : null}
        <div className="flex-row bg-dark-blue pad30">
          <div>
            <h3
              className="text-whit pad-large filter-selected"
              onClick={() => toggleFilterByStatus(c.ARRIVED)}
            >
              ARRIVED
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByStatus(c.CONFIRMED)}
            >
              CONFIRMED
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByStatus(c.REMINDER_SENT)}
            >
              REMINDER SENT
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByStatus(c.RESERVED)}
            >
              RESERVED
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByStatus(c.USER_CANCELLED)}
            >
              USER CANCELLED
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByStatus(c.STAFF_CANCELLED)}
            >
              STAFF CANCELLED
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large"
              onClick={() => toggleFilterByStatus(c.NO_SHOW)}
            >
              NO SHOW
            </h3>
          </div>
          <div>
            <h3
              className="text-whit pad-large default"
              onClick={() => clearFilterByStatus()}
            >
              XCLEAR
            </h3>
          </div>
          <div className="flex1" />
          <div>
            <h3 className="text-whit pad-large bg-yell">FILTER BY STATUS</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterPanel
