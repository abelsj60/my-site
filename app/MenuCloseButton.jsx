import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class CloseButton extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  render() {
    return (
      <Link id="close-button" to={this.props.link}>
        <p>✘</p>
      </Link>
    );
  }
}

export default withRouter(CloseButton);
