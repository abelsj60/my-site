import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import bio from './data/about.md';

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
            {ReactHtmlParser(marked(bio.body, { smartypants: true }))}
          </section>
        </section>
      </main>
    );
  }
}

export default About;
