import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
