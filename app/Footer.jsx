import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer style={{opacity: this.props.opacity}}>
        <p>James Abels. All rights reserved. 2018.</p>
      </footer>
    )
  }

}

export default Footer;
