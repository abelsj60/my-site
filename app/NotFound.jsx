import React, { Component } from 'react';

let messageStyle = {
  flex: '1',
  backgroundColor: 'papayawhip'
};

let hedStyle = {
  padding: '25px'
};

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="left">
        <section className="notFound">
          <h1>Uh oh. Not found!</h1>
        </section>
      </main>
    );
  }
}

export default NotFound;
