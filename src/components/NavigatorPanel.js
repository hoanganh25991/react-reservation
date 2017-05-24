import React from "react";

class NavigatorPanel extends React.Component {
  render() {
    return (
      <div className="flex-row bg-blue">
        <h3 className="text-whit pad-large">Reservations</h3>
        <h3 className="text-whit pad-large">Settings</h3>
        <div className="flex1" />
        <h3 className="text-whit pad-large">HoiPOS Cafe (West)</h3>
        <h3 className="text-whit pad-large">&lt;&gt;</h3>
      </div>
    );
  }
}

export default NavigatorPanel;
