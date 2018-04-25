import React, { Component } from 'react';

var soonStyle = {
  flex: '1',
  backgroundColor: 'papayawhip',
  marginTop: '52px'
}

var hedStyle = {
  padding: '25px'
}

class AlexaStories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={soonStyle}>
        <h1 style={hedStyle}>Projects</h1>
      </div>
    )
  }

}

export default AlexaStories;
