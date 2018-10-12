import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="not-found" className="left">
        <section className="content-container">
          <h1>Uh oh. Not found!</h1>
          <div className="not-found-image-box" />
        </section>
      </main>
    );
  }
}

export default NotFound;
