import React from "react"

class ResvRemark extends React.Component {
  render() {
    let { remarks } = this.props

    let { className } = this.props

    return (
      <div className={className}>
        <h3 className="text-gray">
          To find what the font size of the H1 element
        </h3>
        <h3 className="text-yell">
          To find what the font size of the H1 element
        </h3>
        {remarks}
      </div>
    )
  }
}

export default ResvRemark
