import React from "react";
import "./Switch.scss";

class Switch extends React.Component {
  render() {
    const { handleSwitch, mode } = this.props;

    return (
      <div className={mode ? "switch switch--on" : "switch"}>
        <div className="switch__btn" onClick={handleSwitch}>
          <div className="switch__circle"></div>
        </div>
      </div>
    );
  }
}

export default Switch;
