import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import reveries from './reveries/index';

class Reverie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentReverie: reveries[0],
      allReveries: reveries
    };
  }

  get reverie() {
    return this.state.currentReverie;
  }

  render() {
    // console.log('Post:', this.reverie);
    // console.log('Post[0]:', reverie[0]);
    return (
      <main id="reverie">
        <section id="reverie-unused" className="left" />
        <section id="reverie-content" className="right">
          <h1>Reverie</h1>
          <h2>{this.reverie.attributes.hed}</h2>
          <p>{this.reverie.attributes.date}</p>
          {ReactHtmlParser(marked(this.reverie.body))}
        </section>
      </main>
    );
  }
}

export default withRouter(Reverie);
