import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import reveries from './data/reveries/index';

class Reverie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestReverie: reveries[0],
      pastReveries: reveries.slice(1)
    };
  }

  get reverie() {
    return this.state.latestReverie;
  }

  render() {
    return (
      <main id="reverie">
        <section id="reverie-unused" className="left" />
        <section id="reverie-content" className="right">
          <h1>Reverie</h1>
          <section id="post">
            <h2>{this.reverie.attributes.hed}</h2>
            <p>{this.reverie.attributes.date}</p>
            {ReactHtmlParser(marked(this.reverie.body, { smartypants: true }))}
          </section>
        </section>
      </main>
    );
  }
}

export default withRouter(Reverie);
