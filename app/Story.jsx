import React from 'react';
import styled from 'styled-components';

import Main from './Main.jsx';
import Chapter from './Chapter.jsx';
import ChapterNav from './ChapterNav.jsx';

import Right from './Right.jsx';
import Left from './Left.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const RestyledLeft = styled(Left)`
  display: ${props => (props.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 52px;
  bottom: 55px;
  color: white;
  padding: 25px;
  margin: 25px 25px 25px 25px;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 848px) {
    position: unset;
    padding: 0px 25px 0px 0px;
    background-color: unset;
    color: unset;
  }
`;
const RestyledRight = styled(Right)`
  flex: 1;
  overflow: hidden;
`;
const Image = styled.img`
  object-fit: cover;
  overflow: hidden;

  @media (min-width: 848px) {
    flex: 1;
    max-width: 100%;s
  }
`;

export default function Story(props) {
  const { data } = props;
  const hideStoryText = !props.state.showStoryText ? 'hidden' : '';

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForChapterData = l.params.titleToIndex();
  const chapter = data[indexForChapterData];
  const { image } = chapter.attributes;

  return (
    <Main>
      <RestyledLeft as="section" text={hideStoryText}>
        <ChapterNav {...props} />
        <Chapter chapterData={chapter} overflowRef={props.overflowRef} />
      </RestyledLeft>
      <RestyledRight>
        <Image src={image} alt="fantasy illustration" />
      </RestyledRight>
    </Main>
  );
}
