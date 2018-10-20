import React, { Component } from 'react';
import { getPath } from './helpers/utils.js';

class MagicScroller extends Component {
  constructor(props) {
    super(props);
  }

  get abracadabra() {
    return getPath(this.props).split('/')[1] === '';
  }

  render() {
    return this.abracadabra && <section id="abracadabra" />;
  }
}

export default MagicScroller;
