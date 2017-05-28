import React from "react"
import PropTypes from "prop-types"
import "../css/App.css"

class Layout extends React.Component {
  render() {
    const { Top, Left, Right, Bottom } = this.props

    return (
      <div className="Vi">
        <div style={{ clear: "both" }}>
          <Top />
        </div>
        <div style={{ float: "left" }}>
          <Left />
        </div>
        <div style={{ float: "right" }}>
          <Right />
        </div>
        <div style={{ clear: "both" }}>
          <Bottom />
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  Top: PropTypes.func.isRequired,
  Left: PropTypes.func.isRequired,
  Right: PropTypes.func.isRequired,
  Bottom: PropTypes.func.isRequired
}

export default Layout
