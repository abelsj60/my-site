import React, { Component } from 'react';

var navStyle = {
  flex: '1'
};

var hedStyle ={
  paddingBottom: '10px',
  textAlign: 'center'
}

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={navStyle}>
        <p style={hedStyle}><em>Magical stories and other adventures</em></p>
      </div>
    )
  }

}

export default Nav;
