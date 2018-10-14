import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p id="app-bar-button">{this.props.label}</p>;
  }
}

export default Button;
