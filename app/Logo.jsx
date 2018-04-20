import React, { Component } from 'react';

var logoStyle = {
  flex: '1'
};

var hedStyle = {
  paddingTop: '10px',
  paddingBottom: '5px',
  textAlign: 'center'
}

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={logoStyle}>
        <p style={hedStyle}><strong>JAMES ABELS</strong></p>
      </div>
    )
  }

}

export default Logo;
