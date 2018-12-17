import React from 'react';
import DesktopArticleNav from './DesktopArticleNav.jsx';
import Article from './Article.jsx';

export default function Journalism(props) {
  return (
    <main id="journalism" className="">
      <DesktopArticleNav {...props} />
      <Article {...props} />
    </main>
  );
}
