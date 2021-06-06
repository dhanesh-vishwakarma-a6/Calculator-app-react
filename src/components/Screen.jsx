import React, { Component } from "react";

class Screen extends Component {
  render() {
    return <div className="screen mt-1">{this.props.value.substr(0, 16)}</div>;
  }
}

export default Screen;
