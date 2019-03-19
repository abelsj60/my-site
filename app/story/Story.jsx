import ChapterNav from './ChapterNav.jsx';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import marked from 'marked';
// import Hed from '../primitives/Hed.jsx';
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
  padding: 0px 0px 25px 23px;
  margin-top: 10px;

  @media (min-width: 848px) {
    margin-left: 23px;
    max-width: 327px;
    padding: 0px;
  }
`;
const RestyledOverflow = styled(Overflow)`
  @media (min-width: 848px) {
    padding-right: 25px;
  }
`;
const RestyledRight = styled(Right)`
  display: ${p => (p.text !== 'hidden' ? 'none' : 'flex')};
  flex: 1;
  overflow: hidden;
  margin: 0px;

  @media (min-height: 530px) {
    margin-top: 0px;
  }
  
  @media (min-width: 848px) {
    display: flex;
    margin: 25px;
  }
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

        <RestyledOverflow ref={
          ref => overflowRef.current = ref
        }>
          <Hed as="h2" normal italic s="1.5" c="blue">
            Chapter {chapterArray[indexForChapterData]}
          </Hed>
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
        </RestyledOverflow>
      </RestyledLeft>
      <RestyledRight rightMargin text={textStatus}>
        <Image alt="fantasy illustration" src={image} />
      </RestyledRight>
    </Main>
  );
}
