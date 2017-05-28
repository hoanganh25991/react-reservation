import React from "react"

class ResvStaffReadStatus extends React.Component {
  render() {
    let { readStatus } = this.props

    let readStatusClass = "self-center padHorz"
    readStatusClass += readStatus ? " circle-readSvg" : " circle-unreadSvg"

    return (
      <div className="flex-column">
        <div className={readStatusClass} />
      </div>
    )
  }
}

export default ResvStaffReadStatus
