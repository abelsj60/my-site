import React, { Component } from 'react';

var notFoundStyle = {
  flex: '1',
  display: 'flex',
  marginTop: '52px'
}

var messageStyle = {
  flex: '1',
  backgroundColor: 'papayawhip'
}

var hedStyle = {
  padding: '25px'
}

class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='NotFoundContainer' style={notFoundStyle}>
        <div id='Header' style={messageStyle}>
          <h1 style={hedStyle}>Uh oh. Not found!</h1>
        </div>
      </div>
    )
  }

}

export default NotFound;
