import moment from "moment"
import React, { Component } from "react"
import cx from "classnames"
import range from "lodash/range"
import chunk from "lodash/chunk"

const Day = ({ i, w, d, className, iBoolean, actionCheckIndexDateArray, ...props }) => {
  const prevMonth = w === 0 && i > 7
  const nextMonth = w >= 4 && i <= 14
  const isBoolean = iBoolean === true
  //   const prevMonth =
  const cls = cx({
    "prev-month": prevMonth,
    "next-month": nextMonth,
    "current-day": !prevMonth && !nextMonth && i === d,
    isBoolean: isBoolean
  })
  // actionCheckIndexDateArray
  // console.log('actionCheckIndexDateArray',actionCheckIndexDateArray)
  //  onClick={() => actionCheckIndexDateArray()}
  return <td className={cls} {...props}>{i}</td>
}

export default class Calendar extends Component {
  selectDate = (i, w) => {
    const prevMonth = w === 0 && i > 7
    const nextMonth = w >= 4 && i <= 14
    const m = this.props.moment

    m.date(i)
    if (prevMonth) m.subtract(1, "month")
    if (nextMonth) m.add(1, "month")

    this.props.onChange(m)
    // console.log(this.props.actionCheckIndexDateArray)
    let indexArrayDay = this.props.days
      .map((item, index) => ({ item, index }))
      .filter(obj => obj.item === m.format("YYYY-MM-DD"))[0]
    // console.log(indexArrayDay)
    // console.log(indexArrayDay.index)
    this.props.actionCheckIndexDateArray(indexArrayDay.index)
  }

  prevMonth = e => {
    e.preventDefault()
    this.props.onChange(this.props.moment.subtract(1, "month"))
  }

  nextMonth = e => {
    e.preventDefault()
    this.props.onChange(this.props.moment.add(1, "month"))
  }

  render() {
    const { days, actionCheckIndexDateArray } = this.props
    // console.log(actionCheckIndexDateArray)
    const m = this.props.moment
    const d = m.date()
    const d1 = m.clone().subtract(1, "month").endOf("month").date()
    const d2 = m.clone().date(1).day()
    const d3 = m.clone().endOf("month").date()
    const arrDay = [].concat(range(d1 - d2 + 1, d1 + 1), range(1, d3 + 1), range(1, 42 - d3 - d2 + 1))
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const date = m.format("YYYY-MM-DD")
    const date1 = m.clone().subtract(1, "month").endOf("month").format("YYYY-MM-DD")
    const date2 = m.clone().date(1).format("YYYY-MM-DD")
    const date3 = m.clone().endOf("month").format("YYYY-MM-DD")
    const date4 = m.clone().add(1, "months").format("YYYY-MM-DD")

    function pad(val, len) {
      val = String(val)
      len = len || 2
      while (val.length < len)
        val = "0" + val
      return val
    }

    let call = date => date.slice(0, 8)

    let range1 = call(date1)

    let range2 = call(date2)

    let range3 = call(date4)
    let viDays = [].concat(
      range(d1 - d2 + 1, d1 + 1).map(strDate1 => `${range1}${pad(strDate1)}`),
      range(1, d3 + 1).map(strDate2 => `${range2}${pad(strDate2)}`),
      range(1, 42 - d3 - d2 + 1).map(strDate3 => `${range3}${pad(strDate3)}`)
    )

    // call(date2, d2, d3);
    Array.prototype.diff = function(a) {
      return this.filter(function(i) {
        return a.indexOf(i) < 0
      })
    }
    let arrNew = viDays.diff(days)
    //    let arrNewDay = arrNew.map(arr => {
    //         // var strDate = '2017-06-30';
    //         var dates = new Date(arr);
    //         var day = dates.getDate();
    //         // console.log('number', day)
    //         return day
    //     })
    //     console.log(arrNewDay)

    let arrIndex = viDays.map((arr, index) => {
      return index
    })
    Array.prototype.diff = function(a) {
      var source = this
      return this.filter(function(i) {
        if (a.indexOf(i) < 0) {
          diffIndexes.push(source.indexOf(i))
          return true
        } else {
          return false
        }
      })
    }
    var diffIndexes = []
    var diffValues = viDays.diff(days)
    let checkIndex = []

    function compareArray(a, b) {
      return a.map(function(ai, i) {
        if (ai === b[i]) {
          return true
        } else {
          return false
        }
      })
    }

    checkIndex = compareArray(diffIndexes, arrIndex)

    let newArrDay = arrDay.map((item, index) => {
      if (index < checkIndex.length) {
        return [item, checkIndex[index]]
      }
      return [item, false]
    })

    //  this.indexArrayDay = days.map((item, index) => ({item, index})).filter(obj => obj.item === m.format("YYYY-MM-DD"))[0]
    // if(this.indexArrayDay === undefined) {
    //   this.indexArrayDay = days.map((item, index) => ({item, index})).filter(obj => obj.item === m.format("YYYY-MM-DD"))[0]
    //   // console.log('yes')
    // }

    //  console.log('this.indexArrayDay',this.indexArrayDay)
    return (
      <div className={cx("m-calendar", this.props.className)}>
        <div className="toolbar">
          <button type="button" className="prev-month" onClick={this.prevMonth}>
            <i className={this.props.prevMonthIcon} />
            <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
              <path d="M0-.5h24v24H0z" fill="none" />
            </svg>
          </button>
          <span className="current-date">{m.format("MMMM YYYY")}</span>
          <button type="button" className="next-month" onClick={this.nextMonth}>
            <i className={this.props.nextMonthIcon} />
            <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              <path d="M0-.25h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>

        <table>
          <thead>
            <tr>
              {weeks.map((w, i) => <td key={i}>{w}</td>)}
            </tr>
          </thead>

          <tbody>
            {chunk(newArrDay, 7).map((row, w) => (
              <tr key={w}>
                {row.map(([i, iBoolean]) => (
                  <Day
                    key={i}
                    i={i}
                    iBoolean={iBoolean}
                    d={d}
                    w={w}
                    actionCheckIndexDateArray={actionCheckIndexDateArray}
                    onClick={() => this.selectDate(i, w)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
