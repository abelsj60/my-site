import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

export default function Article(props) {
  const articleFromState = props.data[props.localState.indexForArticleData];
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
