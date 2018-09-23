import React, { Component } from 'react';

class BlockQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <blockquote id={this.props.elementId}>{this.props.text}</blockquote>;
  }
}

export default BlockQuote;
