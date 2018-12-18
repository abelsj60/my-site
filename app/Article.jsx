import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import DesktopArticleNav from './DesktopArticleNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

export default function Article(props) {
  const { data } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForArticleData = l.params.twoToIndex();
  const article = data[indexForArticleData];
  const markedBody = marked(article.body);

  return (
    <main id="journalism" className="">
      <DesktopArticleNav {...props} />
      <section id="article" className="right">
        <h3>{article.attributes.publication}</h3>
        <h1>{article.attributes.headline}</h1>
        <p id="byline">by James Erik Abels</p>
        <section id="text">{ReactHtmlParser(markedBody)}</section>
      </section>
    </main>
  );
}
