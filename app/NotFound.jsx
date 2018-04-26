import React, { Component } from 'react';

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
      <div id='NotFound'>
        <h1 id='h1ForNotFound'>Uh oh. Not found!</h1>
      </div>
    )
  }

}

export default NotFound;
