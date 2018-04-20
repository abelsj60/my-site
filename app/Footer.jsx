import React, { Component } from 'react';

const footerStyle = {
  display: 'flex',
  backgroundColor: 'black',
  color: 'white'
};

const itemStyleOne = {
  flex: '3'
}

const itemStyleTwo = {
  flex: '1'
}

const pStyle = {
  padding: '10px'
};

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div style={footerStyle}>
        <div style={itemStyleOne}>
          <p style={pStyle}>Email</p>
        </div>
        <div style={itemStyleTwo}>
        <p style={pStyle}>Journalism and Law</p>
      </div>
        <div style={itemStyleTwo}>
          <p style={pStyle}>James Abels. All rights reserved. 2018.</p>
        </div>
      </div>
    )
  }

}

export default Footer;
