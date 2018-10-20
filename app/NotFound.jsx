import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="not-found" className="left">
        <h1>Uh oh. Not found!</h1>
        <section id="image-box" />
      </main>
    );
  }
}

export default NotFound;
