import React, { Component } from 'react';

var navStyle = {
  flex: '1'
};

var hedStyle ={
  paddingTop: '15px',
  paddingBottom: '10px',
  paddingLeft: '25px',
  textAlign: 'left',
}

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='Motto' style={navStyle}>
        <p style={hedStyle}><em>Magical stories and other adventures</em></p>
      </div>
    )
  }

}

export default Nav;
