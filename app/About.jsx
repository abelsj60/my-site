import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="about">
        <h1>About</h1>
        <section id="about-content">
          <section id="about-pic" />
          <section id="about-description">
            <h1>James Abels</h1>
            <p>Short story</p>
          </section>
        </section>
      </main>
    );
  }
}

export default About;
