import React, { Component } from "react";

class Screen extends Component {
  render() {
    return <div id="screen">{this.props.value.substr(0, 16)}</div>;
  }
}

export default Screen;
