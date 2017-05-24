import React from "react";

class FullWidth extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        {this.props.children}
      </div>
    );
  }
}

export default FullWidth;
