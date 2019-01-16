import React from 'react';
import styled from 'styled-components';

import MenuSelector from './MenuSelector.jsx';
import Chapter from './Chapter.jsx';
import ChapterNav from './ChapterNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;

  @media (min-width: 848px) {
    flex-direction: row;
  }
`;
const StyledChapter = styled.section`
  display: ${props => (props.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 53px;
  bottom: 55px;
  padding: 25px;
  margin: 25px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 848px) {
    display: flex;
    width: 327px;
    position: unset;
    bottom: 48px;
    margin: 25px;
    margin-right: 0;
    background-color: #6100f2;
    color: white;
    background-image: url('https://www.transparenttextures.com/patterns/debut-light.png');
  }
`;
const Illustration = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin: 25px;
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

  const indexForChapterData = l.params.twoToIndex();
  const chapter = data[indexForChapterData];
  const { image } = chapter.attributes;

  return (
    <Main>
      <StyledChapter text={hideStoryText}>
        <ChapterNav {...props} />
        <Chapter chapterData={chapter} />
      </StyledChapter>
      <Illustration>
        <Image src={image} alt="fantasy illustration" />
      </Illustration>
    </Main>
  );
}
