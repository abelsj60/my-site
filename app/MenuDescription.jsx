import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MenuDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 id="menu-description">{this.props.text}</h1>;
  }
}

export default withRouter(MenuDescription);
