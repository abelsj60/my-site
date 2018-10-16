import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="article" className="right">
        <h3>{this.props.article.publication}</h3>
        <h1>{this.props.article.headline}</h1>
        <section id="article-container">
          <p id="byline">by James Erik Abels</p>
          <section id="text">{this.props.article.text}</section>
        </section>
      </section>
    );
  }
}

export default Article;
