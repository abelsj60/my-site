import React, { Component } from 'react';

var jAndLStyle = {
  flex: '1',
  backgroundColor: 'papayawhip',
  marginTop: '52px'
}

var hedStyle = {
  padding: '25px'
}

class JandL extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='JnL' style={jAndLStyle}>
        <h1 style={hedStyle}>Journalism and Law</h1>
      </div>
    )
  }

}

export default JandL;
