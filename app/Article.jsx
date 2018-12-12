import marked from 'marked';
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articleFromState = this.props.data[this.props.articleIndex];
    const headline = articleFromState.attributes.headline;
    const publication = articleFromState.attributes.publication;
    const textConvertedToMarkdown = marked(articleFromState.body);

    return (
      <section id="article" className="right">
        <h3>{publication}</h3>
        <h1>{headline}</h1>
        <p id="byline">by James Erik Abels</p>
        <section id="text">{ReactHtmlParser(textConvertedToMarkdown)}</section>
      </section>
    );
  }
}

export default Article;
