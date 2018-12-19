import React from 'react';
import { Link } from 'react-router-dom';

import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize.js';

export default function ChapterNav(props) {
  const { data, isMenu, section } = props;
  const { indexForChapterData } = props.localState;
  const elementId = isMenu ? 'contents-list' : 'story-nav';
  const className = isMenu ? `${section}-menu` : '';

  return (
    <section id={elementId} className={className}>
      <Mapper
        mapData={data}
        render={(chapter, idx) => {
          const n = new Normalize(data[idx].attributes.title);
          const normalizedTitle = n.done;

          return (
            <Link
              key={idx}
              className={indexForChapterData === idx ? 'active' : 'inactive'}
              to={`/story/chapter/${normalizedTitle}`}
            >
              {isMenu && <h1 id="story-chapter">Chapter {idx + 1}</h1>}
              <p>{!isMenu ? idx + 1 : chapter.attributes.title}</p>
            </Link>
          );
        }}
      />
    </section>
  );
}
