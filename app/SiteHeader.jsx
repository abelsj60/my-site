import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';

var siteHeaderStyle = {
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
  backgroundColor: 'white'
};

class SiteHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={siteHeaderStyle}>
        <Logo />
        <Nav />
      </div>
    )
  }

}

export default SiteHeader;
