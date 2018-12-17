import React from 'react';
import { Link } from 'react-router-dom';
import { normalize } from './helpers/utils.js';

export default function DesktopChapterNav(props) {
  const { data, chapterIndex } = props;
  const chapter = chapterIndex + 1;

  const beginningOfStory = chapter === 1;
  const endOfStory = chapter === 4;
  const lastIndex = chapterIndex - 1;
  const nextIndex = chapterIndex + 1;
  let lastTitle;
  let nextTitle;
  let backLink;
  let forwardLink;

  if (!beginningOfStory && !endOfStory) {
    lastTitle = normalize(data[lastIndex].attributes.title);
    nextTitle = normalize(data[nextIndex].attributes.title);
    backLink = `/story/chapter/${lastTitle}`;
    forwardLink = `/story/chapter/${nextTitle}`;
  } else if (beginningOfStory) {
    nextTitle = normalize(data[nextIndex].attributes.title);
    forwardLink = `/story/chapter/${nextTitle}`;
  } else if (endOfStory) {
    lastTitle = normalize(data[lastIndex].attributes.title);
    backLink = `/story/chapter/${lastTitle}`;
  }

  const navStyle = {
    fontSize: '2.5rem',
    display: 'flex',
    width: '40px',
    justifyContent: 'space-between'
  };

  return (
    <section style={navStyle}>
      <Link to={`${backLink}`}>
        <p>⟪</p>
      </Link>
      <Link to={`${forwardLink}`}>
        <p>⟫</p>
      </Link>
    </section>
  );
}
