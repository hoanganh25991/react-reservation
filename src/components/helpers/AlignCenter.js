import React from "react";

class AlignText extends React.Component {
  render() {
    let { className } = this.props;

    return (
      <div
        className={className}
        style={{ display: "table", width: "100%", height: "100%" }}
      >
        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AlignText;
