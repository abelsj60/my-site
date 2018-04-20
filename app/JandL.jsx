import React, { Component } from 'react';

var jAndLStyle = {
  flex: '1',
  backgroundColor: 'deepskyblue'
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
      <div style={jAndLStyle}>
        <h1 style={hedStyle}>Journalism and Law</h1>
      </div>
    )
  }

}

export default JandL;
