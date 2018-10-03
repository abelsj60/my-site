import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="not-found" className="left">
        <section className="notFound">
          <h1>Uh oh. Not found!</h1>
        </section>
      </main>
    );
  }
}

export default NotFound;
