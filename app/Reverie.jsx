import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import post from './reveries/11-10-18.md';

class Reverie extends Component {
  constructor(props) {
    super(props);
  }

  get date() {
    return new Date(Date.now('en-us')).toLocaleString();
  }

  render() {
    // console.log(post);
    return (
      <main id="reverie">
        <section id="reverie-unused" className="left" />
        <section id="reverie-content" className="right">
          <h1>Reverie</h1>
          <h2>{post.attributes.headline}</h2>
          <p>{post.attributes.date}</p>
          {ReactHtmlParser(marked(post.body))}
        </section>
      </main>
    );
  }
}

export default withRouter(Reverie);
