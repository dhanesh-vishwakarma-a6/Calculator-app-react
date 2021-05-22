import React, { Component } from "react";
import Screen from "./components/Screen";
import Brand from "./components/Brand";
import Keypad from "./components/Keypad";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      brandName: "casio",
      model: "Basic"
    };
  }

  // handle button click
  onClick = (button) => {
    if (button === "=") this.calculate();
    else if (button === "C") this.clear();
    else if (button === "CE") this.backspace();
    else this.setState({ value: this.state.value + button });
  };

  // clear screen
  clear = () => {
    this.setState({ value: "" });
  };

  // backspace
  backspace = () => {
    this.setState({ value: this.state.value.slice(0, -1) });
  };

  // calculate
  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        value: (eval(this.state.value) || "") + ""
      });
    } catch (err) {
      this.setState({ value: "error" });
    }
  };

  render() {
    return (
      <div className="container" id="calc-body">
        <Screen value={this.state.value} />
        <Brand brandName={this.state.brandName} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
