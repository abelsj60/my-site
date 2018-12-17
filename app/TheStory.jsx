import React from 'react';
import Chapter from './Chapter.jsx';
import ChapterNav from './ChapterNav.jsx';
import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

export default function TheStory(props) {
  const r = new Referrer(props);
  const location = new Location(r.pathToMatch, props);
  const { data } = props;
  const { indexForChapterData } = props.localState;
  const { showStory } = props.state;
  const { isMenu } = location.params;
  const chapter = data[indexForChapterData];
  const { image } = chapter.attributes;

  return (
    <main id="the-story">
      <section
        id="chapter"
        className={`left ${showStory ? 'active' : 'inactive'}`}
      >
        <ChapterNav
          {...props}
          data={data}
          isMenu={isMenu}
          section={'chapter'}
        />
        <Chapter chapterData={chapter} />
      </section>
      <section id="illustration" className="right">
        <img src={image} alt="fantasy illustration" />
      </section>
    </main>
  );
}
