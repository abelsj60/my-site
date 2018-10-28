import React, { Component } from 'react';
import siteText from './data/siteText.js';

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
            <p>{siteText.bio}</p>
          </section>
        </section>
      </main>
    );
  }
}

export default About;
