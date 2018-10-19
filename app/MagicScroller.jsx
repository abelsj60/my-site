import React, { Component } from 'react';

class MagicScroller extends Component {
  constructor(props) {
    super(props);
  }

  get abracadabra() {
    return this.props.location.pathname.split('/')[1] === '';
  }

  render() {
    return this.abracadabra && <section id="magic-scroller" />;
  }
}

export default MagicScroller;
