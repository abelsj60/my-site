import React from 'react';
import ArticleNav from './ArticleNav.jsx';

export default function DesktopArticleNav(props) {
  const { text, data, articleIndex } = props;

  return (
    <section id="desktop-article-navigation" className="left">
      <h1>My clips</h1>
      <h2>{text}</h2>
      <ArticleNav {...props} data={data} articleIndex={articleIndex} />
    </section>
  );
}
