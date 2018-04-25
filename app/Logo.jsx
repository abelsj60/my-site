import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var logoStyle = {
  flex: '1'
};

var hedStyle = {
  paddingTop: '15px',
  paddingBottom: '5px',
  paddingLeft: '25px',
  textAlign: 'left'
};

var linkStyle = {
  color: 'white'
};

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={logoStyle}>
        <Link style={linkStyle} to={'/'}><p style={hedStyle}><strong>JAMES ABELS</strong></p></Link>
      </div>
    )
  }

}

export default Logo;
