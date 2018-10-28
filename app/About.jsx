import React, { Component } from 'react';
import aboutText from './data/aboutText.js';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="about">
        <section id="about-illustration" className="left" />
        <section id="about-content" className="right">
          <h1>About</h1>
          <section id="about-text-container">
            <p>{aboutText.bio}</p>
          </section>
        </section>
      </main>
    );
  }
}

export default About;
