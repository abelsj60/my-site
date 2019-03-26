import ChapterNav from './ChapterNav.jsx';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import marked from 'marked';
import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const RestyledLeft = styled(Left)`
  display: ${p => (p.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  flex: 1;
  padding: 0px 0px 25px 25px;
  margin-top: 10px;
  overflow: auto; // Needed by desktop Chrome for no known reason

  @media (min-width: 848px) {
    max-width: 327px;
    padding: 0px;
  }
`;
const RestyledRight = styled(Right)`
  display: ${p => (p.text !== 'hidden' ? 'none' : 'flex')};
  flex: 1;
  overflow: hidden;
  margin: 0px;
  position: relative;

  @media (min-height: 530px) {
    margin-top: 0px;
  }
  
  @media (min-width: 848px) {
    display: flex;
    margin: 25px;
  }
`;
const RestyledHed = styled(Hed)`
  font-weight: 400;
`;
const Image = styled.img`
  // How to fill page with image: 
  // https://stackoverflow.com/a/30794589
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
`;
const Text = styled.section`
  font-size: 1.6rem;

  p {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default function Story(props) {
  const {
    appState,
    data,
    overflowRef,
    params
  } = props;
  const { showStoryText } = appState;
  const indexForChapterData = params.titleToIndex();

  const chapter = data[indexForChapterData];
  const {
    image,
    title
  } = chapter.attributes;
  const chapterArray = ['one', 'two', 'three', 'four'];
  const textStatus = !showStoryText
    ? 'hidden'
    : undefined;

  return (
    <Main>
      <RestyledLeft as="section" text={textStatus}>
        <ChapterNav {...props} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <RestyledHed as="h2" s="1.4" c="blue">
            Chapter {chapterArray[indexForChapterData]}
          </RestyledHed>
          <Hed c="pink" s="3" b="12">
            {title}
          </Hed>
          <Text>
            {ReactHtmlParser(
              marked(
                chapter.body,
                { smartypants: true }
              )
            )}
          </Text>
        </Overflow>
      </RestyledLeft>
      <RestyledRight rightMargin text={textStatus}>
        <Image alt="fantasy illustration" src={image} />
      </RestyledRight>
    </Main>
  );
}
