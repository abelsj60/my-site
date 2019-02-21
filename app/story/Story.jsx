import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import Main from '../primitives/Main.jsx';
import Right from '../primitives/Right.jsx';
import Left from '../primitives/Left.jsx';
import Hed from '../primitives/Hed.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ChapterNav from './ChapterNav.jsx';

const RestyledLeft = styled(Left)`
  display: ${p => (p.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 52px;
  bottom: 55px;
  color: white;
  padding: 25px;
  margin: 25px;
  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: 848px) {
    position: unset;
    padding: 0px;
    background-color: unset;
    color: unset;
  }
`;
const RestyledOverflow = styled(Overflow)`
  padding-right: 0px;

  @media (min-width: 848px) {
    padding-right: 25px;
  }
`;
const RestyledRight = styled(Right)`
  flex: 1;
  overflow: hidden;
`;
const Image = styled.img`
  object-fit: cover;
  overflow: hidden;
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
  const {
    data,
    overflowRef,
    appState,
    params
  } = props;
  const { showStoryText } = appState;
  const indexForChapterData = params.titleToIndex();

  const chapter = data[indexForChapterData];
  const {
    image,
    title
  } = chapter.attributes;
  const textStatus = !showStoryText ? 'hidden' : undefined;

  return (
    <Main>
      <RestyledLeft as="section" text={textStatus}>
        <ChapterNav {...props} />
        <RestyledOverflow ref={ref => {
          overflowRef.current = ref;
        }}>
          <Hed c="yellow" bC="pink" s="3" b="12">
            {title}
          </Hed>
          <Text>
            {ReactHtmlParser(marked(chapter.body, { smartypants: true }))}
          </Text>
        </RestyledOverflow>
      </RestyledLeft>
      <RestyledRight rightMargin>
        <Image src={image} alt="fantasy illustration" />
      </RestyledRight>
    </Main>
  );
}
