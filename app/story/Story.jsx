import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import Main from '../primitives/Main.jsx';
import Right from '../primitives/Right.jsx';
import Left from '../primitives/Left.jsx';
import Hed from '../primitives/Hed.jsx';
import ChapterNav from './ChapterNav.jsx';

import Referrer from '../custom/Referrer.js';
import Location from '../custom/Location.js';

const RestyledLeft = styled(Left)`
  display: ${props => (props.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 52px;
  bottom: 55px;
  color: white;
  padding: 25px;
  margin: 25px;
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
const Text = styled.section`
  font-size: 1.6rem;
  line-height: normal;
  white-space: pre-wrap;
  overflow: auto;

  p {
    margin-top: 0px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default function Story(props) {
  const { data, overflowRef } = props;
  const hideStoryText = !props.state.showStoryText ? 'hidden' : '';

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForChapterData = l.params.titleToIndex();
  const chapter = data[indexForChapterData];
  const { image, title } = chapter.attributes;

  return (
    <Main>
      <RestyledLeft as="section" text={hideStoryText}>
        <ChapterNav {...props} />
        <Hed color="yellow" bigColor="pink" size="3" top="13" bottom="12">
          {title}
        </Hed>
        <Text ref={ref => (overflowRef.current = ref)}>
          {ReactHtmlParser(marked(chapter.body, { smartypants: true }))}
        </Text>
      </RestyledLeft>
      <RestyledRight>
        <Image src={image} alt="fantasy illustration" />
      </RestyledRight>
    </Main>
  );
}
