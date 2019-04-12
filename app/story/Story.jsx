import ChapterNav from './ChapterNav.jsx';
import marked from 'marked';
import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';

const PictureHolder = styled.div`
  display: ${p => (p.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  flex: 1;
  padding: 0px 0px 25px 25px;
  margin-top: 25px;
  overflow: auto; // Needed by desktop Chrome for no known reason
`;
const RestyledContentHolder = styled(ContentHolder)`
  display: ${p => (p.text !== 'hidden' ? 'none' : 'flex')};
  flex: 1;
  overflow: hidden;
  margin: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0px;
  bottom: 0px;
`;
const Chapter = styled.h2`
  color: ${p => p.theme.colors.blue};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.nine};
`;
const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
  margin-bottom: ${p => p.theme.bottomMargin.regular};
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
const StoryText = styled.section`
  font-size: ${p => p.theme.fontSizes.twelve};

  p {
    margin-bottom: ${p => p.theme.bottomMargin.regular};

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
      <PictureHolder as="section" text={textStatus}>
        <ChapterNav {...props} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <Chapter>
            Chapter {chapterArray[indexForChapterData]}
          </Chapter>
          <Title>
            {title}
          </Title>
          <StoryText>
            {ReactHtmlParser(
              marked(
                chapter.body,
                { smartypants: true }
              )
            )}
          </StoryText>
        </Overflow>
      </PictureHolder>
      <RestyledContentHolder rightMargin text={textStatus}>
        <Image alt="fantasy illustration" src={image} />
      </RestyledContentHolder>
    </Main>
  );
}
