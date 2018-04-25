import React, { Component } from 'react';

var projectStyle = {
  flex: '1',
  backgroundColor: 'papayawhip',
  paddingTop: '52px'
}

var hedStyle = {
  padding: '25px'
}

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={projectStyle}>
        <h1 style={hedStyle}>Projects</h1>
      </div>
    )
  }

}

export default Projects;
