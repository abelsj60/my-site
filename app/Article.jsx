import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="article" className="right">
        <h3>{this.props.article.attributes.publication}</h3>
        <h1>{this.props.article.attributes.headline}</h1>
        <section id="article-container">
          <p id="byline">by James Erik Abels</p>
          <section id="text">
            {ReactHtmlParser(marked(this.props.article.body))}
          </section>
        </section>
      </section>
    );
  }
}

export default Article;
