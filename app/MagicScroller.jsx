import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class MagicScroller extends Component {
  constructor(props) {
    super(props);
  }

  get abracadabra() {
    return splitPath(this.props)[1] === '';
  }

  render() {
    return this.abracadabra && <section id="abracadabra" />;
  }
}

export default withRouter(MagicScroller);
