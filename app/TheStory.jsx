import React from 'react';

import Chapter from './Chapter.jsx';
import ChapterNav from './ChapterNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

export default function TheStory(props) {
  const { data } = props;
  const { showStory } = props.state;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForChapterData = l.params.twoToIndex();
  const chapter = data[indexForChapterData];

  return (
    <main id="the-story">
      <section
        id="chapter"
        className={`left ${showStory ? 'active' : 'inactive'}`}
      >
        <ChapterNav
          {...props}
          data={data}
          isMenu={l.params.isMenu}
          section={'chapter'}
        />
        <Chapter chapterData={chapter} />
      </section>
      <section id="illustration" className="right">
        <img src={chapter.attributes.image} alt="fantasy illustration" />
      </section>
    </main>
  );
}
