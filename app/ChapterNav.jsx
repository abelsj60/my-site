import React from 'react';
import { Link } from 'react-router-dom';
import { normalize } from './helpers/utils.js';
import Mapper from './Mapper.jsx';

export default function ChapterNav(props) {
  const { data, isMenu, section } = props;
  const { indexForChapterData } = props.localState;
  const elementId = isMenu ? 'contents-list' : 'story-nav';
  const className = isMenu ? `${section}-menu` : '';

  return (
    <section id={elementId} className={className}>
      <Mapper
        mapData={data}
        render={(chapter, idx) => (
          <Link
            key={idx}
            className={indexForChapterData === idx ? 'active' : 'inactive'}
            to={`/story/chapter/${normalize(data[idx].attributes.title)}`}
          >
            {isMenu && <h1 id="story-chapter">Chapter {idx + 1}</h1>}
            <p>{!isMenu ? idx + 1 : chapter.attributes.title}</p>
          </Link>
        )}
      />
    </section>
  );
}
