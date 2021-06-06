import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return (
      <div className="keypad">
        <button
          value="("
          className="btn btn-light"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          (
        </button>
        <button
          value="CE"
          className="btn btn-light"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          CE
        </button>
        <button
          value=")"
          className="btn btn-light"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          )
        </button>
        <button
          value="C"
          className="btn btn-danger"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          C
        </button>
        <button
          value="7"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          7
        </button>
        <button
          value="8"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          8
        </button>
        <button
          value="9"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          9
        </button>
        <button
          value="/"
          className="btn btn-warning"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          /
        </button>
        <button
          value="4"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          4
        </button>
        <button
          value="5"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          5
        </button>
        <button
          value="6"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          6
        </button>
        <button
          value="*"
          className="btn btn-warning"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          x
        </button>
        <button
          value="1"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          1
        </button>
        <button
          value="2"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          2
        </button>
        <button
          value="3"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          3
        </button>
        <button
          value="-"
          className="btn btn-warning"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          -
        </button>
        <button
          value="."
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          .
        </button>
        <button
          value="0"
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          0
        </button>
        <button
          value="="
          className="btn btn-dark"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          =
        </button>
        <button
          value="+"
          className="btn btn-warning"
          onClick={(event) => this.props.onClick(event.target.value)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Keypad;
