import React from 'react';
import Chapter from './Chapter.jsx';
import ChapterNav from './ChapterNav.jsx';
import { normalize } from './helpers/utils.js';

export default function TheStory(props) {
  const data = props.data;
  const chapter = data.find(
    c => normalize(c.attributes.title) === props.match.params.title
  );
  const chapterIndex = data.findIndex(
    c => normalize(c.attributes.title) === props.match.params.title
  );
  const isMenu = props.match.url.includes('menu');

  return (
    <main id="the-story">
      <section id="chapter" className={`left ${props.explore}`}>
        <ChapterNav
          data={data}
          isMenu={isMenu}
          section={'chapter'}
          chapterIndex={chapterIndex}
        />
        <Chapter chapterData={chapter} />
      </section>
      <section id="illustration" className="right">
        <img src={chapter.attributes.image} alt="fantasy illustration" />
      </section>
    </main>
  );
}
