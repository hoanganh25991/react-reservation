import React from "react"

class FullHeight extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {this.props.children}
      </div>
    )
  }
}

export default FullHeight
