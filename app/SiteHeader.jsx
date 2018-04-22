import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';

class SiteHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var siteHeaderStyle = {
      zIndex: '1',
      position: 'fixed',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      color: this.props.isTransparent ? 'white' : 'black',
      backgroundColor: this.props.isTransparent ? 'transparent' : 'white',
      transition: 'background-color .7s, color .7s'
    };

    return (
      <div style={siteHeaderStyle}>
        <Logo />
        <Nav />
      </div>
    )
  }

}

export default SiteHeader;
